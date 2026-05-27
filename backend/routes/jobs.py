from flask import request
from flask_restful import Resource
from flask_jwt_extended import jwt_required, get_jwt_identity
from services.job_service import JobService
from services.application_service import ApplicationService


class JobListResource(Resource):
    def get(self):
        filters = {}
        if request.args.get("city"):
            filters["city"] = request.args.get("city")
        if request.args.get("job_type"):
            filters["job_type"] = request.args.get("job_type")
        if request.args.get("education"):
            filters["education"] = request.args.get("education")
        if request.args.get("salary_min"):
            filters["salary_min"] = request.args.get("salary_min")
        if request.args.get("search"):
            filters["search"] = request.args.get("search")
        if request.args.get("work_mode"):
            filters["work_mode"] = request.args.get("work_mode")
        page = request.args.get("page", 1, type=int)
        per_page = request.args.get("per_page", 20, type=int)
        result = JobService.get_jobs(filters, page, per_page)
        return {"code": 200, "message": "成功", "data": result}


class JobDetailResource(Resource):
    def get(self, job_id):
        job = JobService.get_job(job_id)
        if not job:
            return {"code": 404, "message": "职位不存在", "data": None}, 404
        return {"code": 200, "message": "成功", "data": job}


class JobApplyResource(Resource):
    @jwt_required()
    def post(self, job_id):
        user_id = int(get_jwt_identity())
        result, error = ApplicationService.apply(user_id, job_id)
        if error:
            return {"code": 400, "message": error, "data": None}, 400
        return {"code": 200, "message": "投递成功", "data": result}
