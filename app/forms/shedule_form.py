from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
# from app.models import Appointment

class ScheduleForm(FlaskForm):
    full_name = StringField('full_name')
    email = StringField('email')
    address = StringField('address')
    phone_number = IntegerField('phone_number')
