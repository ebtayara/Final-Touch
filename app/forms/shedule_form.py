from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms import validators
from wtforms.validators import DataRequired, ValidationError, Email, email_validator
# from app.models import Appointment

class ScheduleForm(FlaskForm):
    full_name = StringField('full_name', validators=[DataRequired('Name is required')])
    email = StringField('email', validators=[DataRequired('Email is required'), Email()])
    address = StringField('address')
    phone_number = IntegerField('phone_number')
