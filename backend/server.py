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
    return "return recent posts", 200


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


@app.route("/user_interests", methods=['POST'])
def user_interests():
    data = json.loads(request.data)
    print(data)
    return "User interests added", 200


@app.route("/new_post", methods=['POST'])
def create_new_post():
    data = json.loads(request.data)
    print(data)
    return "New post created", 200


@app.route("/add_comment", methods=["POST"])
def add_comment_to_post():
    data = json.loads(request.data)
    print(data)
    return "Comment added to the post ", 200


@app.route("/like_post", methods=["POST"])
def like_a_post():
    data = json.loads(request.data)
    print(data)
    return "Liked the post", 200


@app.route("/users/<reg_no>", methods=['GET'])
def profile(reg_no):
    return "Profile page called for the student " + reg_no, 200


@app.route("/users/update-profile/<reg_no>", methods=['GET', 'POST'])
def update_profile(reg_no):
    data = json.loads(request.data)
    print(data)
    return "Update profile page called for the student " + reg_no, 200


@app.route("/logout", methods=['POST'])
def logout():
    data = json.loads(request.data)
    print(data)
    return "User logged out", 200


@app.route("/forgot_password", methods=["POST"])
def forgot_password():
    data = json.loads(request.data)
    print(data)
    return "Start forget Password process", 200


@app.route("/enter_otp", methods=["POST"])
def enter_otp():
    data = json.loads(request.data)
    print(data)
    return "Evaluate Otp", 200


@app.route("/set_new_password", methods=["POST"])
def set_new_password():
    data = json.loads(request.data)
    print(data)
    return "Set new password", 200


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5678)

