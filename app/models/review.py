from .db import db

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    text_field = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    app_id = db.Column(db.Integer, db.ForeignKey('appointments.id'), nullable=False)
    user = db.relationship("User", back_populates="review")
    appointment = db.relationship("Appointment", back_populates="review")


    def to_dict(self):
        return {
            'id': self.id,
            'text_field': self.text_field,
            'user_id': self.user_id,
            'app_id': self.app_id
        }
