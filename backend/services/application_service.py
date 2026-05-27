from models import db
from models.application import Application
from models.job import Job


class ApplicationService:
    @staticmethod
    def apply(user_id, job_id):
        job = Job.query.get(job_id)
        if not job:
            return None, "职位不存在"
        existing = Application.query.filter_by(
            user_id=user_id, job_id=job_id
        ).first()
        if existing:
            return None, "已投递过该职位"
        app = Application(user_id=user_id, job_id=job_id, status="applied")
        db.session.add(app)
        db.session.commit()
        return app.to_dict(), None

    @staticmethod
    def get_user_applications(user_id, status_filter=None):
        query = Application.query.filter_by(user_id=user_id)
        if status_filter:
            query = query.filter_by(status=status_filter)
        apps = query.order_by(Application.applied_at.desc()).all()
        return [app.to_dict() for app in apps]
