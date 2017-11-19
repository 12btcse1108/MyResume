import sqlite3
from flask import request
from flask_jwt import jwt_required
from flask_restful import Resource,reqparse


class ListItems(Resource):
    def get(self):
        connection = sqlite3.connect("data.db")
        cursor = connection.cursor()
        query = "SELECT * FROM items"
        items = []
        result = cursor.execute(query)
        for row in result:
            items.append({"name": row[0], "price": row[1]})
        connection.close()
        return {"items": items}

class ListFeedback(Resource):
    def get(self):
        connection = sqlite3.connect("data.db")
        cursor = connection.cursor()
        query = "SELECT * FROM feedbacks"
        feedbacks = []
        result = cursor.execute(query)
        print(result)
        for row in result:
            feedbacks.append({"username": row[0], "useremail": row[1], "subject": row[2], "message": row[3]})
        connection.close()
        return {"feedbacks": feedbacks}

class Feedback(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument("username", type = str, required = True, help = "Your name is required")
    parser.add_argument("useremail", type = str, help = "email is not correct")
    parser.add_argument("subject", type = str, required = True, help = "Subject is required")
    parser.add_argument("message", type = str, help = "message")

    def post(self):
        data = Feedback.parser.parse_args()
        connection = sqlite3.connect("data.db")
        cursor = connection.cursor()
        queryinsert = "INSERT INTO feedbacks VALUES (NULL, '{0}', '{1}', '{2}', '{3}')".format(data['username'], data['useremail'], data['subject'], data['message'])
        cursor.execute(queryinsert)
        connection.commit()
        connection.close()
        return {"message": "successfully created"}


class Items(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument("price",
    type = float,
    required = True,
    help = "price field can't be empty!!"
    )
    @jwt_required()
    def get(self,name):
        item = self.find_by_name(name)
        if item:
            return item
        return {"message": "item not found"}, 400

    @classmethod
    def find_by_name(cls, name):
        connection = sqlite3.connect("data.db")
        cursor = connection.cursor()
        query = "SELECT * FROM items WHERE name = ?"
        result = cursor.execute(query,(name,))
        row = result.fetchone()
        connection.close()
        if row:
            return {'item':{"name": row[0], "price": row[1]}}, 200
        return None


    def post(self,name):
        item = self.find_by_name(name)
        if item != None:
            return {"messeage": "{} is already present please try another".format(name)},400
        data = Items.parser.parse_args()
        item = {'name' : name, 'price': data["price"]}
        try:
            self.insert(item)
            return item
        except:
            return {"message": "something error occured"}, 500



    @classmethod
    def insert(cls,item):
        connection = sqlite3.connect("data.db")
        cursor = connection.cursor()
        query = "INSERT INTO items VALUES (?, ?)"
        cursor.execute(query,(item['name'] , item['price']))
        connection.commit()
        connection.close()

    def delete(self,name):
        item = self.find_by_name(name)
        if item == None:
            return {"message": "item already deleted!!"}, 400
        connection = sqlite3.connect("data.db")
        cursor = connection.cursor()
        query = "DELETE FROM items WHERE name=?"
        cursor.execute(query,(name,))
        connection.commit()
        connection.close()
        return {"message": "item deleted successfully!!"}

    def put(self,name):
        data = Items.parser.parse_args()
        item = self.find_by_name(name)
        updated_item = {"name": name, "price": data["price"]}
        if item is None:
            self.insert(updated_item)
        else:
            self.update(updated_item)
        return updated_item

    @classmethod
    def update(cls,item):
        print
        connection = sqlite3.connect("data.db")
        cursor = connection.cursor()
        query = "UPDATE items SET price=? WHERE name=?"
        cursor.execute(query,(item['price'], item['name']))
        connection.commit()
        connection.close()
