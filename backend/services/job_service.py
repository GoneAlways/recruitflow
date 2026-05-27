from models import db
from models.job import Job


class JobService:
    @staticmethod
    def get_jobs(filters=None, page=1, per_page=20):
        query = Job.query.filter_by(status="active")
        if filters:
            if filters.get("city"):
                query = query.filter(Job.location.contains(filters["city"]))
            if filters.get("job_type"):
                query = query.filter_by(job_type=filters["job_type"])
            if filters.get("education"):
                query = query.filter_by(education=filters["education"])
            if filters.get("salary_min"):
                query = query.filter(Job.salary_max >= int(filters["salary_min"]))
            if filters.get("search"):
                search = f"%{filters['search']}%"
                query = query.filter(
                    db.or_(Job.title.ilike(search), Job.company.ilike(search))
                )
            if filters.get("work_mode"):
                query = query.filter_by(work_mode=filters["work_mode"])
        pagination = query.order_by(Job.created_at.desc()).paginate(
            page=page, per_page=per_page, error_out=False
        )
        return {
            "items": [job.to_dict() for job in pagination.items],
            "total": pagination.total,
            "page": page,
            "per_page": per_page,
            "pages": pagination.pages,
        }

    @staticmethod
    def get_job(job_id):
        job = Job.query.get(job_id)
        if not job:
            return None
        return job.to_dict()
