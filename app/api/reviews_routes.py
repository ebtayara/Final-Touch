from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Review, db

reviews_routes = Blueprint('reviews', __name__)

#get comments
@reviews_routes.route('/<int:id>')
@login_required
def grab_reviews(id):
    reviews =

#create comment
@reviews_routes.route('/<int:id>')
@login_required
def create_review(id):
    reviews =
