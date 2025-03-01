import os

class Config:
    SECRET_KEY = 'your_secret_key_here'
    SQLALCHEMY_DATABASE_URI = 'sqlite:///inkspire.db'  # Using SQLite for local development
    SQLALCHEMY_TRACK_MODIFICATIONS = False
