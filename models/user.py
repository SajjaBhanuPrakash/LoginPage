class User:

    # This class consists all methods that queries on USERS DB.

    def __init__(self, redshift_client, response_builder):
        self.redshift_client = redshift_client
        self.response_builder = response_builder
        self.USERS_DB = "users"
        self.USER_INTERESTS_DB = "user_interests"
        self.USERS_DB_KEYS = ["user_name", "email", "roll_no", "current_company", "is_authenticated", "password"]

    def create_user(self, data):

        if self._is_user_exists(data["user_name"]):
            return self.response_builder.build_response(404, "User already exists")

        try:
            self.redshift_client.insert_into_table(
                self.USERS_DB,
                user_name = data["user_name"].lower(),
                password = data["password"],
                email = data["email"],
                roll_no = data["roll_no"],
                current_company = data["current_company"].lower(),
                is_authenticated = "True"
            )
            return self.response_builder.build_response(200, "User created")
        except:
            return self.response_builder.build_response(404, "There's some problem")

    def login(self, data):
        user_name = data["user_name"]
        password = data["password"]
        query = "SELECT * FROM {} WHERE user_name={} AND password = {}".format(self.USERS_DB, user_name, password)
        query_results = self.redshift_client.execute_read_query_redshift(query)

        if len(query_results) == 0:
            return self.response_builder.build_response(404, "Username and password did not match")

        self._authenticate(True, user_name)
        return self.response_builder.build_response(200, "User logged in successfully")

    def logout(self, data):
        user_name = data["user_name"]
        self._authenticate(False, user_name)
        return self.response_builder.build_response(200, "Logged out succefully")


    def update_user(self, data):
        updated_params = ""
        for field in data.keys():
            if field in self.USERS_DB_KEYS:
                updated_params += "{} = '{}', ".format(field, data[field])
        if len(updated_params) != 0 and updated_params[-2] == ',':
            updated_params = updated_params[:-2]
        query = "UPDATE {} SET {} WHERE user_name = {}".format(self.POSTS_DB, updated_params, data["user_name"])
        self.redshift_client.execute_query_redshift(query)
        return self.response_builder.build_response(200, "User updated")
    
    
    def is_user_authenticated(self, data):
        query = "SELECT is_authenticated FROM {} WHERE user_name = '{}'".format(self.USERS_DB, data["user_name"])
        query_results = self.redshift_client.execute_read_query_redshift(query)
        if len(query_results) == 0:
            return self.response_builder.build_response(200, False)
        print(query_results)
        return self.response_builder.build_response(200, str(list(query_results[0])[0]))

    def get_user(self, data):
        query = "SELECT * FROM {} WHERE user_name = '{}'".format(self.USERS_DB, data["user_name"])
        query_results = self.redshift_client.execute_read_query_redshift(query)
        print(query_results)
        if len(query_results) == 0:
            return {}
        user_data = [dict(zip(self.USERS_DB_KEYS, list(result)[:-1])) for result in query_results]
        return user_data

    def get_user_interests(self, data):
        query = "SELECT company_name FROM {} WHERE user_name = '{}'".format(self.USER_INTERESTS_DB, data["user_name"])
        query_results = self.redshift_client.execute_read_query_redshift(query)
        interests = [list(result)[0] for result in query_results]
        return interests

    def add_to_user_interests(self, data):
        company_name = data["company_name"].lower()
        user_name = data["user_name"]
        if self._is_data_exists("company_name", company_name):
            return self.response_builder.build_response(200, "")
        self.redshift_client.insert_into_table(self.USER_INTERESTS_DB, user_name = user_name, company_name=company_name)
        return self.response_builder.build_response(200, "Added")

            
    # Util methods

    def _is_data_exists(self, field_name, field_value):
        query = "SELECT * FROM {} WHERE {} = '{}'".format(self.USER_INTERESTS_DB, field_name, field_value)
        query_results = self.redshift_client.execute_query_redshift(query)
        return query_results != None

    def _is_user_exists(self, user_name):
        query = "SELECT * FROM {} ".format(self.USERS_DB, user_name)
        query_results = self.redshift_client.execute_query_redshift(query)
        return query_results != None

    def _authenticate(self, user_name, auth):
        query = "UPDATE {} SET is_authenticated = {} WHERE user_name = '{}'".format(self.USERS_DB, auth, user_name)
        self.redshift_client.execute_query_redshift(query)
