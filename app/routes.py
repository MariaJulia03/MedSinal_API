from app import app
from flask import render_template, jsonify
import pandas as pd


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')


    
    
    
    
