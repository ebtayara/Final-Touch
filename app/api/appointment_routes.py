from typing_extensions import Required
from flask import Blueprint
from flask_login import login_required
from app.models import Appointment, db

appointment_routes = Blueprint('appointments', __name__)

# #locate all appointments
# @appointment_routes.route('/')
# @login_required
# def appointments():
#     appointments = Appointment.query.all()
#     return {'appointments': [appointment.to_dict() for appointment in appointments]}

#get user specific appointments
@appointment_routes.route('/<int:id>')
@login_required
def user_appointments(id):
    user_appointments = Appointment.query.get(id)
    return user_appointments.to_dict()

#edit appointment details
@appointment_routes.route('/edit-appointment', methods=['PUT'])
@login_required
def edit_appointment():
    # form = grab form from react front
    if form.validate._on_submit():
        id.full_name = form.data['new-full_name']
        id.email = form.data['new-email']
        id.address = form.data['new-address']
        id.phone_number = form.data['new-phone_number']
        db.session.add()
        db.session.commit()
        return id.to_dict()
    return {}

@appointment_routes.route('/edit-appointment', methods=['DELETE'])
@login_required
def delete_appointment():
    db.session.delete(id)
    db.session.commit()
    return {'deletion':'successful'}
