from flask import Flask, render_template
app = Flask('bayun')

@app.route('/')
def index():
    return render_template('index.html')

#@app.route('/images/<name>', methods=['GET', 'POST'])
#def novel(name):
#    return render_template('./templates/novel.html', name=name)

if __name__ == '__main__':
    app.run(debug=True)
