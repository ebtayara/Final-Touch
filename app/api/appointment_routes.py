from flask import Blueprint, request
from flask_login import login_required, current_user
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
    if user_appointments is None:
        return {}
    return user_appointments.to_dict()

#grab appointment details
@appointment_routes.route('/new-appointment', methods=['POST'])
@login_required
def create_appointment():
    form = ScheduleForm()
    print('THIS IS FORM!', form)
    print(form.validate_on_submit())
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        print('YO!---------------------')
        appointment = Appointment(
            full_name = form.data['full_name'],
            email = form.data['email'],
            address = form.data['address'],
            phone_number = form.data['phone_number'],
            user_id = current_user.id
      )
        db.session.add(appointment)
        db.session.commit()
        return appointment.to_dict()
    return {}

#edit appointment details
@appointment_routes.route('/edit-appointment/<int:id>', methods=['PUT'])
@login_required
def edit_appointment(id):
    user_appointment = Appointment.query.get(id)
    form = ScheduleForm()
    if form.validate_on_submit():
        user_appointment.full_name = form.data['full_name'],
        user_appointment.email = form.data['email'],
        user_appointment.address = form.data['address'],
        user_appointment.phone_number = form.data['phone_number']
    db.session.commit()
    return user_appointment.to_dict()

# @appointment_routes.route('/edit-appointment/<int:id>', methods=['PUT'])
# @login_required
# def edit_appointment():
#     user_appointment = Appointment.query.get(id)
#     form = ScheduleForm()
#     if form.validate_on_submit():
#         user_appointment = Appointment(
#             full_name = form.data['full_name'],
#             email = form.data['email'],
#             address = form.data['address'],
#             phone_number = form.data['phone_number']
#       )
#         db.session.commit()
#         return user_appointment.to_dict()

@appointment_routes.route('/edit-appointment/<int:id>', methods=['DELETE'])
@login_required
def delete_appointment():
    db.session.delete(id)
    db.session.commit()
    return {'deletion':'successful'}
