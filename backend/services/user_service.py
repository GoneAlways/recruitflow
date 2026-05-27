from models import db
from models.user import User


class UserService:
    @staticmethod
    def get_profile(user_id):
        user = User.query.get(user_id)
        if not user:
            return None
        return user.to_dict()

    @staticmethod
    def update_profile(user_id, data):
        user = User.query.get(user_id)
        if not user:
            return None
        allowed = [
            "name", "email", "avatar", "gender", "birthday",
            "work_start_date", "city", "title", "summary"
        ]
        for key in allowed:
            if key in data:
                setattr(user, key, data[key])
        user.profile_completeness = UserService._calc_completeness(user)
        db.session.commit()
        return user.to_dict()

    @staticmethod
    def _calc_completeness(user):
        score = 0
        if user.name:
            score += 15
        if user.email or user.phone:
            score += 15
        if user.gender:
            score += 10
        if user.city:
            score += 10
        if user.title:
            score += 15
        if user.summary:
            score += 15
        if user.birthday:
            score += 10
        if user.work_start_date:
            score += 10
        return min(score, 100)
