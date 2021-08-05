from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Review, db
from app.forms import ReviewForm

reviews_routes = Blueprint('reviews', __name__)

#get all reviews
@reviews_routes.route('/all/<int:user_id>')
@login_required
def grab_reviews(user_id):
    reviews = Review.query.filter_by(user_id = user_id)
    return {'reviews': [reviews.to_dict() for reviews in reviews]}

#get user specific reviews
@reviews_routes.route('/<int:id>')
@login_required
def grab_review(id):
    user_reviews = Review.query.get(id)
    if user_reviews is None:
        return {}
    return user_reviews.to_dict()

#create review
@reviews_routes.route('/new/<int:id>', methods=['POST'])
@login_required
def create_review(id):
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review = Review(
            text_field = form.data['text_field'],
            user_id = current_user.id,
            app_id = form.data['app_id']
      )
        db.session.add(review)
        db.session.commit()
        return review.to_dict()
    return {}
    # review = Review(
    #     text_field = current_user.id,
    #     user_id = current_user.id
    # )
    # db.session.add(review)
    # db.session.commit()
    # return review.to_dict()

#edit review
@reviews_routes.route('/edit/<int:id>', methods=['PUT'])
@login_required
def edit_review(id):
    new_review = Review.query.get(id)
    new_review.full_name = current_user.full_name,
    new_review.email = current_user.email,
    new_review.address = current_user.address,
    new_review.phone_number = current_user.phone_number,
    db.session.commit()
    return new_review.to_dict()

#delete review
@reviews_routes.route('/delete/<int:id>/<int:user_id>', methods=['DELETE'])
@login_required
def delete_review(id, user_id):
    user_review = Review.query.get(id)
    db.session.delete(user_review)
    db.session.commit()
    user_reviews = Review.query.filter_by(user_id = user_id).all()
    return {'reviews': user_reviews.to_dict() for user_reviews in user_reviews}
