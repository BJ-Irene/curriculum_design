from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField,SelectField
from wtforms.validators import DataRequired


class NameForm(FlaskForm):
    name = StringField('输入单词')
    category = SelectField('category', default='a', choices=[('a', 'explanation'), ('b', '同义词网络')])
    submit = SubmitField('查询')



