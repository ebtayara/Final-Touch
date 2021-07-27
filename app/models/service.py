from .db import db

class Service(db.Model):
    __tablename__ = 'services'

    id = db.Column(db.Integer, primary_key=True)
    service_type = db.Column(db.Varchar, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    user = db.relationship("User", back_populates="service")

    def to_dict(self):
        return {
            'id': self.id,
            'service_type': self.service_type,
            'user_id': self.user_id
        }
