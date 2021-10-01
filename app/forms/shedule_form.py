from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms import validators
from wtforms.fields.core import SelectMultipleField
from wtforms.validators import DataRequired, ValidationError, Email, NumberRange
# from app.models import Appointment

# def correct_format(form, field):
#     #check if number is formatted correctly
#     phone_number = field.data
#     if phone_number:
#         raise ValidationError('Incorrect format.')

class ScheduleForm(FlaskForm):
    full_name = StringField('full_name', validators=[DataRequired('Name is required.')])
    email = StringField('email', validators=[DataRequired('Email is required.'), Email()])
    address = StringField('address', validators=[DataRequired('Address is required.')])
    phone_number = IntegerField('phone_number', validators=[DataRequired('Number is required.')])
    service_type = SelectMultipleField('service_type')
    # NumberRange(min = 1, max = 15, message = 'Number cannot exceed 15 digits.')]
    # NumberRange(1000000000, None, 'Number needs to contain at least 10 digits')
    # NumberRange(10009999, None, 'Number needs to contain at least 8 digits')
