import sys
sys.path.append('.')


from models.likes import Likes
from models.comments import Comments

class Post:

    # A class for performing all actions on POSTS table

    def __init__(self, redshift_client, response_builder):
        self.POSTS_DB = "posts"
        self.POST_DB_QUEUE = "post_queue"
        self.redshift_client = redshift_client
        self.response_builder = response_builder
        self.likes = Likes(redshift_client)
        self.comments = Comments(redshift_client, response_builder)
        self.POSTS_DB_KEYS = ["post_id", "company_name", "author", "post_description", "likes", "comments", "package", "role"]

    # Post methods

    def create_post(self, data):
        post_id = self._fetch_post_id_from_post_queue()
        if not post_id:
            table_size = list(self._find_table_size(self.POSTS_DB)[0])[0]
            post_id = table_size + 1

        self.redshift_client.insert_into_table(
            self.POSTS_DB,
            post_id = post_id,
            company_name = data["company_name"].lower(), 
            author = data["author"].lower(),
            post_description = data["post_description"],
            likes = 0,
            comments = 0,
            package = data["package"],
            role = data["role"].lower()
        )
        return self.response_builder.build_response(200, "post created")


    def update_post(self, data):
        updated_params = ""
        for field in data.keys():
            if field in self.POSTS_DB_KEYS and field != "post_id":
                updated_params += "{} = '{}', ".format(field, data[field])
        if len(updated_params) != 0 and updated_params[-2] == ',':
            updated_params = updated_params[:-2]
        query = "UPDATE {} SET {} WHERE post_id = {}".format(self.POSTS_DB, updated_params, data["post_id"])
        self.redshift_client.execute_query_redshift(query)
        return self.response_builder.build_response(200, "post updated")


    def add_comment_to_post(self, data):
        self._increment_or_decrement_fields_for_post("comments", "+", data["post_id"])
        self.comments.add_comment_to_post(data)
        return self.response_builder.build_response(200, "comment added")

    # Get methods


    def delete_comment(self, data):
        self._increment_or_decrement_fields_for_post("comments", "-", data["post_id"])
        self.comments.delete_comment(data)
        return self.response_builder.build_response(200, "comment deleted")

    def like_post(self, data):
        self._increment_or_decrement_fields_for_post("likes", "+", data["post_id"])
        self.likes.add_user_to_likes_list(data)
        return self.response_builder.build_response(200, "post liked")


    def dislike_post(self, data):
        self._increment_or_decrement_fields_for_post("likes", "-", data["post_id"])
        self.likes.remove_user_from_likes_list(data)
        return self.response_builder.build_response(200, "post disliked")


    def delete_post(self, data):
        post_id = data["post_id"]
        def is_post_exists(post_id):
            query = "SELECT * FROM {} WHERE post_id={}".format(self.POSTS_DB, post_id)
            result = self.redshift_client.execute_read_query_redshift(query)
            return len(result) == 0

        if is_post_exists(post_id):
            return { "message" : "Post does not exist" }
        query = "DELETE FROM {} WHERE post_id = {}".format(self.POSTS_DB, post_id)
        self.redshift_client.execute_query_redshift(query)

        # Also delete likes and comments assosiated with post
        self.likes.remove_likes_when_post_deleted(post_id)
        self.comments.remove_comments_when_post_deleted(post_id)
        self._add_post_id_to_post_queue(post_id)
        return self.response_builder.build_response(200, "post deleted")

    def get_single_post(self, data):
        query = "SELECT * FROM {} WHERE post_id = {}".format(self.POSTS_DB, data["post_id"])
        return self.response_builder.build_response(200, self._fetch_posts(query))

    def get_all_posts(self):
        query = "SELECT * FROM {}".format(self.POSTS_DB)
        return self.response_builder.build_response(200, self._fetch_posts(query))

    def get_posts_by_company_name(self, data):
        query = "SELECT * FROM {} WHERE company_name = '{}'".format(self.POSTS_DB, data["company_name"])
        return self.response_builder.build_response(200, self._fetch_posts(query))

    def get_all_company_names(self):
        query = "SELECT company_name from {}".format(self.POSTS_DB)
        results = self.redshift_client.execute_read_query_redshift(query)
        return self.response_builder.build_response(200, [list(result)[0] for result in results])

    def get_posts_by_user(self, data):
        query = "SELECT * FROM {} WHERE author = '{}'".format(self.POSTS_DB, data["user_name"])
        return self._fetch_posts(query)

    def get_user_interested_posts(self, data, user_interests):
        fields = ""
        for interest in user_interests:
            fields += "'{}',".format(interest)
        query = "SELECT * FROM {} WHERE company_name IN ({}) AND author != '{}'".format(self.POSTS_DB, fields[:-1], data["user_name"])
        print(query)
        print( self._fetch_posts(query))

    
    # Util methods

    def _find_table_size(self, table_name):
        query = "SELECT COUNT(*) FROM {}".format(table_name)
        table_size = self.redshift_client.execute_read_query_redshift(query)
        return table_size

    def _increment_or_decrement_fields_for_post(self, field, operator, post_id):
        query = "UPDATE {0} SET {1} = {1} {2} 1 WHERE post_id = {3}".format(self.POSTS_DB, field, operator, post_id)
        self.redshift_client.execute_query_redshift(query)

    def _fetch_posts(self, query):
        results = self.redshift_client.execute_read_query_redshift(query)
        posts = [dict(zip(self.POSTS_DB_KEYS, list(result))) for result in results]
        for post in posts:
            post["liked_by"] = self.likes.get_likes_for_post(post["post_id"])
        return posts

    def _fetch_post_id_from_post_queue(self):
        query = "SELECT post_id from {}".format(self.POST_DB_QUEUE)
        results = self.redshift_client.execute_read_query_redshift(query)
        if len(results) == 0:
            return None
        post_id = list(results[0])[0]
        query = "DELETE FROM {} WHERE post_id = {}".format(self.POST_DB_QUEUE, post_id)
        self.redshift_client.execute_query_redshift(query)
        return int(post_id)

    def _add_post_id_to_post_queue(self, post_id):
        self.redshift_client.insert_into_table(self.POST_DB_QUEUE, post_id=post_id)