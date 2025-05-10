from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
import os
import pymongo

load_dotenv()
MONGODB_URI = os.getenv("MONGODB_URI")

app = Flask(__name__)
CORS(app)

def connect_db():
    myclient = pymongo.MongoClient(MONGODB_URI)
    mydb = myclient["guests"]
    print("connected to db")
    return mydb

@app.route("/addUser", methods=["POST"])
def add_user():
    conn = connect_db()
    try:
        names = conn["names"]
        print(names)
        print(request.text)
        """ name = {"name": request.text("name")}
        names.insert_one(name)
        return jsonify({"name": name}), 200 """
    except Exception as e:
        print("failed to add name")
        return jsonify({f"error": "failed to add name"}), 500



if __name__ == "__main__":
    app.run(debug=True)
 