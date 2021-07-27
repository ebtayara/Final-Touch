from .db import db

class Appointment(db.Model):
    __tablename__ = 'appointments'

    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False, unique=True)
    address = db.Column(db.String)
    phone_number = db.Column(db.Integer)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    user = db.relationship("User", back_populates="appointment")

    def to_dict(self):
        return {
            'id': self.id,
            'full_name': self.username,
            'email': self.email,
            'address': self.address,
            'phone_number': self.phone_number,
            'user_id': self.user_id
        }
