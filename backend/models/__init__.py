from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

from models.user import User
from models.job import Job
from models.application import Application
