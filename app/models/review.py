from .db import db

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    text_field = db.Column(db.Varchar, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    user = db.relationship("User", back_populates="review")

    def to_dict(self):
        return {
            'id': self.id,
            'text_field': self.text_field,
            'user_id': self.user_id
        }
