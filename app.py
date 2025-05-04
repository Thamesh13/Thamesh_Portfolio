from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/about')
def about():
    return render_template('About.html')

@app.route('/skills')
def skills():
    return render_template('Skill.html')

@app.route('/experience')
def experience():
    return render_template('Experience.html')

@app.route('/projects')
def projects():
    return render_template('Projects.html')

@app.route('/education')
def education():
    return render_template('Education.html')

@app.route('/certificate')
def certificate():  
    return render_template('Certificate.html')

@app.route('/contact')
def contact():
    return render_template('Contact.html')

if __name__ == '__main__':
    app.run(debug=True)
