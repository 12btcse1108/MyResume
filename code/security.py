from werkzeug.security import safe_str_cmp
from user import User


def authenticate(username,password):
    user = User.findByUsername(username)
    if user and safe_str_cmp(user.password , password):
        return user

def identity(payload):
    print("===============================================================")
    userid = payload["identity"]
    return User.findByUserid(userid)
