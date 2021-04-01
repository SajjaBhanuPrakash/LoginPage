import pymongo
from flask import Flask, jsonify, request, session
import json

# Database
client = pymongo.MongoClient('localhost', 27017)
db = client.user

app = Flask(__name__)
app.secret_key = b'\xcc^\x91\xea\x17-\xd0W\x03\xa7\xf8J0\xac8\xc5'


@app.route("/")
def home():
    return "Home", 200


@app.route("/login", methods=['POST'])
def login():
    data = json.loads(request.data)
    print(data)
    return "login request successful", 200


@app.route("/signup", methods=['POST'])
def signup():
    data = json.loads(request.data)
    print(data)
    return "signup request successful", 200


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5678)
