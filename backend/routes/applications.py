from flask import request
from flask_restful import Resource
from flask_jwt_extended import jwt_required, get_jwt_identity
from services.application_service import ApplicationService


class ApplicationListResource(Resource):
    @jwt_required()
    def get(self):
        user_id = int(get_jwt_identity())
        status_filter = request.args.get("status")
        apps = ApplicationService.get_user_applications(user_id, status_filter)
        return {"code": 200, "message": "成功", "data": apps}
