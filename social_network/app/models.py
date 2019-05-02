from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from . import db, login_manager


class Role(db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), unique=True)
    users = db.relationship('User', backref='role', lazy='dynamic')

    def __repr__(self):
        return '<Role %r>' % self.name


class User(UserMixin, db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(64), unique=True, index=True)
    username = db.Column(db.String(64), unique=True, index=True)
    role_id = db.Column(db.Integer, db.ForeignKey('roles.id'))
    password_hash = db.Column(db.String(128))

    @property
    def password(self):
        raise AttributeError('password is not a readable attribute')

    @password.setter
    def password(self, password):
        self.password_hash = generate_password_hash(password)

    def verify_password(self, password):
        return check_password_hash(self.password_hash, password)

    def __repr__(self):
        return '<User %r>' % self.username

class English(db.Model):
    __tabel__='english'
    id = db.Column(db.Integer, primary_key=True)
    english = db.Column(db.String(15), unique=True, index=True)
    pt = db.Column(db.String(36))
    chinese= db.Column(db.String(41))
    flag= db.Column(db.String(1))

    def __repr__(self):
        return '<English %r>' % self.chinese


class Books(db.Model):
    __tablename__ = 'book'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64))
    sort = db.Column(db.String(64))

    def __repr__(self):
        return '<Books %r>' % self.id


class BooksEdge(db.Model):
    __tablename__ = 'bookedge'
    source = db.Column(db.Integer)
    target = db.Column(db.Integer)
    id = db.Column(db.Integer,primary_key=True)
    weight = db.Column(db.Float)

    def __repr__(self):
        return '<BooksEdge %r>' % self.id


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))
