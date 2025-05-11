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
    mydb = myclient['guests']
    print("connected to db")
    return mydb

@app.route("/addUser", methods=["POST"])
def add_user():
    db = connect_db()
    try:
        names = db['names']
        data = request.get_json()
        if not data or 'name' not in data:
            return jsonify({"error": "Missing name"}), 400
        
        if names.find_one({'name': data['name']}):
            return jsonify({"error": "name already RVSP'd"}), 409

        name = {"name": data['name']}
        result = names.insert_one(name)
        return jsonify({
            "_id": str(result.inserted_id),
            "name": data['name']
        }), 200
    except Exception as e:
        print("failed to add name")
        return jsonify({f"error": "failed to add name"}), 500
    
@app.route("/getUsers", methods=["GET"])
def get_users():
    db = connect_db()
    try:
        names = db['names']
        result = []
        
        for name in names.find():
            name['_id'] = str(name['_id'])
            result.append(name)
        return jsonify({
            "names": result
        }), 200
    except Exception as e:
        print("failed to retrieve names")
        return jsonify({f"error": "failed to retrieve names"}), 500


if __name__ == "__main__":
    app.run(debug=True)
 