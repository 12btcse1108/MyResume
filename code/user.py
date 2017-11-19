import sqlite3
from flask_restful import Resource, reqparse

class User:
    def __init__(self,_id, username, password):
        self.id = _id
        self.username = username
        self.password = password

    @classmethod
    def findByUsername(cls,username):

        connection = sqlite3.connect("data.db")
        cursor = connection.cursor()

        query = "SELECT * FROM student WHERE username = ?"
        result = cursor.execute(query,(username,))
        row = result.fetchone()
        if row:
            user = cls(*row)
        else:
            user = None

        connection.close()
        return user

    @classmethod
    def findByUserid(cls,_id):

        connection = sqlite3.connect("data.db")
        cursor = connection.cursor()

        query = "SELECT * FROM student WHERE id = ?"
        result = cursor.execute(query,(_id,))
        row = result.fetchone()
        if row:
            user = cls(*row)
        else:
            user = None

        connection.close()
        return user



class Registration(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument("username",
    type = str,
    required = True,
    help = "username is required"
    )
    parser.add_argument("password",
    type = str,
    required = True,
    help = "password is required"
    )
    def post(self):
        data = Registration.parser.parse_args()
        if User.findByUsername(data['username']):
            return {"message": "username already present"}, 400
        connection = sqlite3.connect("data.db")
        cursor = connection.cursor()
        query = "INSERT INTO student VALUES (NULL, ?, ?)"
        cursor.execute(query, (data['username'], data['password']))
        connection.commit()
        connection.close()
        return {"message": "successfully created"}
