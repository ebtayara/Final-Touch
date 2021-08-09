from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms import validators
from wtforms.validators import DataRequired, ValidationError

class ReviewForm(FlaskForm):
    text_field = StringField('text_field', validators=[DataRequired('Please provide your feedback prior to submission')])
    app_id = IntegerField('app_id')
