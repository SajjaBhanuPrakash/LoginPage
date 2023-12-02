class Likes:

    def __init__(self, redshift_client):
        self.redshift_client = redshift_client
        self.LIKES_DB = "likes"

    def add_user_to_likes_list(self, data):
        self.redshift_client.insert_into_table(
            self.LIKES_DB,
            post_id = data["post_id"],
            user_name = data["user_name"]
        )

    def remove_user_from_likes_list(self, data):
        query = "DELETE FROM {} WHERE post_id={} AND user_name = '{}'".format(
            self.LIKES_DB, 
            data["post_id"], 
            data["user_name"]
        )
        self.redshift_client.execute_query_redshift(query)

    def remove_likes_when_post_deleted(self, post_id):
        query = "DELETE FROM {} WHERE post_id={}".format(self.LIKES_DB, post_id)
        self.redshift_client.execute_query_redshift(query)

    def get_likes_for_post(self, post_id):
        query = "SELECT user_name FROM {} WHERE post_id = {}".format(self.LIKES_DB, post_id)
        results = self.redshift_client.execute_read_query_redshift(query)
        return [list(result)[0] for result in results]