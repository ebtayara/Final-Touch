from flask import Blueprint
from app.models import db, Service
from flask_login import login_required

#setting up blueprint
search_route = Blueprint('search', __name__)

@search_route.route('/all')
@login_required
def get_services():
    all_services = Service.query.all()
    data = all_services
    result = [service_type.to_dict() for service_type in data]
    return {'services': result}
