from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired, ValidationError
# from app.models import Appointment


# def username_exists(form, field):
#     # Checking if username is already in use
#     username = field.data
#     user = User.query.filter(User.username == username).first()
#     if user:
#         raise ValidationError('Username is already in use.')

class ScheduleForm(FlaskForm):
    full_name = StringField('full_name', validators=[DataRequired('name is required')])
    email = StringField('email')
    address = StringField('address')
    phone_number = IntegerField('phone_number')
