from models import db


class Job(db.Model):
    __tablename__ = "jobs"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(128), nullable=False)
    company = db.Column(db.String(128), nullable=False)
    company_logo = db.Column(db.String(512))
    location = db.Column(db.String(128))
    salary_min = db.Column(db.Integer)
    salary_max = db.Column(db.Integer)
    job_type = db.Column(db.String(32))  # full-time, part-time, contract, internship
    work_mode = db.Column(db.String(32))  # remote, hybrid, onsite
    experience = db.Column(db.String(64))
    education = db.Column(db.String(32))
    description = db.Column(db.Text)
    requirements = db.Column(db.Text)
    benefits = db.Column(db.Text)
    status = db.Column(db.String(32), default="active")  # active, closed
    badge = db.Column(db.String(32))  # new, hot, high-match
    created_at = db.Column(db.DateTime, default=db.func.now())

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "company": self.company,
            "company_logo": self.company_logo,
            "location": self.location,
            "salary_min": self.salary_min,
            "salary_max": self.salary_max,
            "job_type": self.job_type,
            "work_mode": self.work_mode,
            "experience": self.experience,
            "education": self.education,
            "description": self.description,
            "requirements": self.requirements,
            "benefits": self.benefits,
            "status": self.status,
            "badge": self.badge,
            "created_at": self.created_at.isoformat() if self.created_at else None,
        }
