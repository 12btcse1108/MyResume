from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_restful import Api
from flask_jwt import JWT
from security import authenticate, identity
from item import ListItems, Items, ListFeedback, Feedback

from user import Registration

app = Flask(__name__)
CORS(app)
app.secret_key="nitin"
api = Api(app)
jwt = JWT(app, authenticate, identity)


api.add_resource(ListItems, "/items")
api.add_resource(ListFeedback, "/feedbacks")
api.add_resource(Items, "/item/<string:name>")
api.add_resource(Registration, "/register")
api.add_resource(Feedback, "/feedback")

if __name__ == "__main__":
    app.run(port = 5000, debug = True)
