from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Review, db

reviews_routes = Blueprint('reviews', __name__)

#get all reviews
@reviews_routes.route('/all/<int:id>')
@login_required
def grab_reviews(user_id):
    reviews = Review.query.filter_by(user_id = user_id)
    return {'reviews': [reviews.to_dict() for reviews in reviews]}

#get user specific reviews
@reviews_routes.route('/<int:id>')
@login_required
def grab_review(user_id):
    user_reviews = Review.query.get(id)
    if user_reviews is None:
        return {}
    return user_reviews.to_dict()

#create review
# @reviews_routes.route('/<int:id>')
# @login_required
# def create_review(id):
#     reviews =
