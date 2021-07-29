from flask import Blueprint
from flask_login import login_required
from app.models import Appointment

appointment_routes = Blueprint('appointments', __name__)

#locate all appointment
@appointment_routes.route('/')
@login_required
def appointments():
    appointments = Appointment.query.all()
    return {'appointments': [appointment.to_dict() for appointment in appointments]}


