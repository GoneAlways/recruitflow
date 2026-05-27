from models import db
from models.user import User
from flask_jwt_extended import create_access_token


class AuthService:
    @staticmethod
    def register(name, phone, password, email=None):
        if User.query.filter_by(phone=phone).first():
            return None, "手机号已注册"
        user = User(name=name, phone=phone, email=email)
        user.set_password(password)
        user.profile_completeness = 20
        db.session.add(user)
        db.session.commit()
        token = create_access_token(identity=str(user.id))
        return {"token": token, "user": user.to_dict()}, None

    @staticmethod
    def login(phone, password):
        user = User.query.filter_by(phone=phone).first()
        if not user or not user.check_password(password):
            return None, "手机号或密码错误"
        token = create_access_token(identity=str(user.id))
        return {"token": token, "user": user.to_dict()}, None
