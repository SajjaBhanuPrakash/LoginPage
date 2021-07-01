import json
class ResponseBuilder:
    
    def build_response(self, status_code, body):
        
        return {
            "statusCode": status_code,
            "body" : body if self._is_string(body) else json.dumps(body)
        }

    def _is_string(self, word):
        is_string = isinstance(word, str)
        return is_string