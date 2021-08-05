from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField

class ReviewForm(FlaskForm):
    text_field = StringField('text_field')
    app_id = IntegerField('app_id')
