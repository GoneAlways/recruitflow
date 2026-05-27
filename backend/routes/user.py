from flask import request
from flask_restful import Resource
from flask_jwt_extended import jwt_required, get_jwt_identity
from services.user_service import UserService


class UserProfileResource(Resource):
    @jwt_required()
    def get(self):
        user_id = int(get_jwt_identity())
        profile = UserService.get_profile(user_id)
        if not profile:
            return {"code": 404, "message": "用户不存在", "data": None}, 404
        return {"code": 200, "message": "成功", "data": profile}

    @jwt_required()
    def put(self):
        user_id = int(get_jwt_identity())
        data = request.get_json()
        profile = UserService.update_profile(user_id, data)
        if not profile:
            return {"code": 404, "message": "用户不存在", "data": None}, 404
        return {"code": 200, "message": "更新成功", "data": profile}
