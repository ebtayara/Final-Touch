from flask import Blueprint
from flask_login import login_required
from app.models import Appointment, db
from app.forms import ScheduleForm

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
    form = ScheduleForm()
    if form.validate_on_submit():
      appointments = Appointment(
        full_name = form.data['full_name'],
        email = form.data['email'],
        address = form.data['address'],
        phone_number = form.data['phone_number']
      )
      db.session.add()
      db.session.commit()
      return appointments.to_dict()
    return {}

@appointment_routes.route('/edit-appointment', methods=['DELETE'])
@login_required
def delete_appointment():
    db.session.delete(id)
    db.session.commit()
    return {'deletion':'successful'}
