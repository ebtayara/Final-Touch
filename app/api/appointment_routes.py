from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Appointment, db
from app.forms import ScheduleForm

def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

appointment_routes = Blueprint('appointments', __name__)

#locate all appointments
@appointment_routes.route('/all/<int:user_id>')
@login_required
def appointments(user_id):
    appointments = Appointment.query.filter_by(user_id = user_id)
    return {'appointments': [appointments.to_dict() for appointments in appointments]}

#get user specific appointments
@appointment_routes.route('/<int:id>')
@login_required
def user_appointments(id):
    user_appointments = Appointment.query.get(id)
    if user_appointments is None:
        # return {}
        return None
    return user_appointments.to_dict()

#create appointment
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
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

#edit appointment details
@appointment_routes.route('/edit-appointment/<int:id>', methods=['PUT'])
@login_required
def edit_appointment(id):
    user_appointment = Appointment.query.get(id)
    form = ScheduleForm()
    print('edit FORM', form.data['full_name'])
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user_appointment.full_name = form.data['full_name'],
        user_appointment.email = form.data['email'],
        user_appointment.address = form.data['address'],
        user_appointment.phone_number = form.data['phone_number']
        db.session.commit()
        return user_appointment.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401

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

#delete appointment
@appointment_routes.route('/delete-appointment/<int:id>/<int:user_id>', methods=['DELETE'])
@login_required
def delete_appointment(id, user_id):
    user_appointment = Appointment.query.get(id)
    db.session.delete(user_appointment)
    db.session.commit()
    user_appointments = Appointment.query.filter_by(user_id = user_id).all()
    return {'appointments': user_appointments.to_dict() for user_appointments in user_appointments}

#cancel appointment
@appointment_routes.route('/cancel-appointment/<int:id>', methods=['DELETE'])
@login_required
def cancel_appointment(id):
    user_appointment = Appointment.query.get(id)
    db.session.delete(user_appointment)
    db.session.commit()
    user_appointments = Appointment.query.filter_by(id = id).all()
    return {'appointments': user_appointments.to_dict() for user_appointments in user_appointments}
