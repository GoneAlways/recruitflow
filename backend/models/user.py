from models import db
from werkzeug.security import generate_password_hash, check_password_hash


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), nullable=False)
    phone = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True)
    password_hash = db.Column(db.String(256), nullable=False)
    avatar = db.Column(db.String(512))
    gender = db.Column(db.String(10))
    birthday = db.Column(db.String(20))
    work_start_date = db.Column(db.String(20))
    city = db.Column(db.String(64))
    title = db.Column(db.String(128))
    years_of_experience = db.Column(db.Integer)
    summary = db.Column(db.Text)
    profile_completeness = db.Column(db.Integer, default=0)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "phone": self.phone,
            "email": self.email,
            "avatar": self.avatar,
            "gender": self.gender,
            "birthday": self.birthday,
            "work_start_date": self.work_start_date,
            "city": self.city,
            "title": self.title,
            "years_of_experience": self.years_of_experience,
            "summary": self.summary,
            "profile_completeness": self.profile_completeness,
        }
