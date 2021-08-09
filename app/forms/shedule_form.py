from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms import validators
from wtforms.validators import DataRequired, ValidationError, Email, NumberRange
# from app.models import Appointment

class ScheduleForm(FlaskForm):
    full_name = StringField('full_name', validators=[DataRequired('Name is required')])
    email = StringField('email', validators=[DataRequired('Email is required'), Email()])
    address = StringField('address', validators=[DataRequired('Address is required')])
    phone_number = IntegerField('phone_number', validators=[DataRequired('Number is required'),
    # NumberRange(1000000000, None, 'Number needs to contain at least 10 digits')])
    NumberRange(10009999, None, 'Number needs to contain at least 8 digits')])
