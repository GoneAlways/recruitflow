from flask import request
from flask_restful import Resource
from services.auth_service import AuthService


class RegisterResource(Resource):
    def post(self):
        data = request.get_json()
        name = data.get("name")
        phone = data.get("phone")
        password = data.get("password")
        email = data.get("email")
        if not name or not phone or not password:
            return {"code": 400, "message": "缺少必要参数", "data": None}, 400
        result, error = AuthService.register(name, phone, password, email)
        if error:
            return {"code": 400, "message": error, "data": None}, 400
        return {"code": 200, "message": "注册成功", "data": result}


class LoginResource(Resource):
    def post(self):
        data = request.get_json()
        phone = data.get("phone")
        password = data.get("password")
        if not phone or not password:
            return {"code": 400, "message": "缺少必要参数", "data": None}, 400
        result, error = AuthService.login(phone, password)
        if error:
            return {"code": 400, "message": error, "data": None}, 400
        return {"code": 200, "message": "登录成功", "data": result}
