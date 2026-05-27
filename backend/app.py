from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from config import Config
from models import db


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    JWTManager(app)
    CORS(app, origins=["http://localhost:3000"], supports_credentials=True)

    api = Api(app)

    from routes.auth import RegisterResource, LoginResource
    from routes.jobs import JobListResource, JobDetailResource, JobApplyResource
    from routes.applications import ApplicationListResource
    from routes.user import UserProfileResource

    api.add_resource(RegisterResource, "/api/auth/register")
    api.add_resource(LoginResource, "/api/auth/login")
    api.add_resource(JobListResource, "/api/jobs")
    api.add_resource(JobDetailResource, "/api/jobs/<int:job_id>")
    api.add_resource(JobApplyResource, "/api/jobs/<int:job_id>/apply")
    api.add_resource(ApplicationListResource, "/api/applications")
    api.add_resource(UserProfileResource, "/api/user/profile")

    with app.app_context():
        db.create_all()
        _seed_data()

    return app


def _seed_data():
    from models.user import User
    from models.job import Job

    if User.query.first():
        return

    user = User(
        name="张伟",
        phone="13800138000",
        email="zhangwei@example.com",
        title="高级产品经理",
        city="上海市",
        gender="male",
        birthday="1995-06-15",
        work_start_date="2018-07-01",
        summary="热衷于创造以用户为中心的数字体验的产品设计师。在为招聘和金融科技平台开发直观界面方面拥有丰富的经验。精通 Figma、React，并擅长构建可扩展的设计系统。",
        profile_completeness=85,
    )
    user.set_password("123456")
    db.session.add(user)

    jobs = [
        Job(
            title="资深产品设计师",
            company="Stripe",
            location="加利福尼亚州 旧金山",
            salary_min=120000,
            salary_max=160000,
            job_type="full-time",
            work_mode="remote",
            experience="5年+ 经验",
            education="bachelor",
            description="负责核心产品线的设计工作，包括用户研究、交互设计和视觉设计。与产品和工程团队紧密合作，推动设计系统落地。",
            badge="new",
        ),
        Job(
            title="前端架构师",
            company="Airbnb",
            location="纽约州 纽约",
            salary_min=140000,
            salary_max=190000,
            job_type="contract",
            work_mode="hybrid",
            experience="资深",
            education="bachelor",
            description="负责前端架构设计和技术选型，推动组件化和工程化建设。优化前端性能和开发体验。",
            badge="hot",
        ),
        Job(
            title="用户体验研究员",
            company="Framer",
            location="荷兰 阿姆斯特丹",
            salary_min=90000,
            salary_max=130000,
            job_type="full-time",
            work_mode="onsite",
            experience="2年+ 经验",
            education="master",
            description="进行用户研究、可用性测试和数据分析，为产品设计提供洞察和建议。",
            badge="high-match",
        ),
        Job(
            title="高级产品设计师",
            company="Stellar Systems 科技有限公司",
            location="旧金山 (混合办公)",
            salary_min=140000,
            salary_max=180000,
            job_type="full-time",
            work_mode="hybrid",
            experience="5年以上",
            education="bachelor",
            description="主导创新产品从0到1的设计工作，参与用户研究、交互与视觉设计全流程。",
            badge="new",
        ),
        Job(
            title="资深 UI/UX 架构师",
            company="Nexus 全球金融科技",
            location="远程办公",
            salary_min=165000,
            salary_max=210000,
            job_type="full-time",
            work_mode="remote",
            experience="8年以上",
            education="bachelor",
            description="构建企业级设计系统，领导跨平台产品的体验架构设计与实施。",
        ),
        Job(
            title="创意总监",
            company="Pulse 传媒集团",
            location="纽约, NY",
            salary_min=130000,
            salary_max=155000,
            job_type="full-time",
            work_mode="onsite",
            experience="6年以上",
            education="bachelor",
            description="指导品牌创意方向，带领设计师团队交付高质量的视觉及交互设计方案。",
        ),
        Job(
            title="用户体验研究员",
            company="Veridian 实验室",
            location="西雅图, WA",
            salary_min=120000,
            salary_max=150000,
            job_type="full-time",
            work_mode="hybrid",
            experience="3年以上",
            education="master",
            description="规划和执行定性及定量用户研究，推动数据驱动的产品体验优化决策。",
        ),
    ]
    for job in jobs:
        db.session.add(job)

    db.session.commit()


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True, port=5000)
