class Comments:

    def __init__(self, redshit_client, response_builder):
        self.redshift_client = redshit_client
        self.response_builder = response_builder
        self.COMMENTS_DB = "comments"
        self.COMMENT_DB_QUEUE = "comments_queue"
        self.COMMENT_DB_KEYS = ["post_id", "user_name", "comment", "comment_id"]
    
    def add_comment_to_post(self, data):
        comment_id = self._fetch_comment_id_from_comment_queue()
        if not comment_id:
            table_size = list(self._find_table_size(data["post_id"])[0])[0]
            comment_id = table_size + 1

        self.redshift_client.insert_into_table(
            self.COMMENTS_DB,
            post_id = data["post_id"],
            user_name = data["user_name"],
            comment = data["comment"],
            comment_id = comment_id
        )

    def delete_comment(self, data):
        query = "DELETE FROM {} WHERE post_id = {} AND comment_id = {}".format(self.COMMENTS_DB, data["post_id"], data["comment_id"])
        self.redshift_client.execute_query_redshift(query)
        self._add_comment_id_to_comment_queue(data["comment_id"])
        
    def remove_comments_when_post_deleted(self, post_id):
        query = "DELETE FROM {} WHERE post_id = {}".format(self.COMMENTS_DB, post_id)
        self.redshift_client.execute_query_redshift(query)

    def get_comments_for_post(self, data):
        query = "SELECT * FROM {} WHERE post_id = {}".format(self.COMMENTS_DB, data["post_id"])
        return self.response_builder.build_response(200, self._fetch_comments(query))

    def _find_table_size(self, post_id):
        query = "SELECT COUNT(*) FROM {} WHERE post_id = {}".format(self.COMMENTS_DB, post_id)
        table_size = self.redshift_client.execute_read_query_redshift(query)
        return table_size

    def _fetch_comments(self, query):
        results = self.redshift_client.execute_read_query_redshift(query)
        comments = [dict(zip(self.COMMENT_DB_KEYS, list(result))) for result in results]
        return comments

    def _fetch_comment_id_from_comment_queue(self):
        query = "SELECT comment_id from {}".format(self.COMMENT_DB_QUEUE)
        results = self.redshift_client.execute_read_query_redshift(query)
        if len(results) == 0:
            return None
        comment_id = list(results[0])[0]
        query = "DELETE FROM {} WHERE post_id = {}".format(self.COMMENT_DB_QUEUE, comment_id)
        self.redshift_client.execute_query_redshift(query)
        return comment_id

    def _add_comment_id_to_comment_queue(self, comment_id):
        self.redshift_client.insert_into_table(self.COMMENT_DB_QUEUE, comment_id=comment_id)