from flask import Flask, render_template
from flask_bootstrap import Bootstrap

app = Flask('bayun')
bootstrap = Bootstrap(app)

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/static/novels/<name>', methods=['GET', 'POST'])
def novel(name):
    return render_template('novel.html', name=name)

@app.route('/static/res/<name>', methods=['POST', 'POST'])
def res(name):
    return redirect('/templates/novel.html', name=name)

if __name__ == '__main__':
    app.run(debug=True)
