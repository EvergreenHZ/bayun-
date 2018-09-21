from flask import Flask, render_template
#app = Flask('bayun')
app = Flask(__name__, static_url_path='/home/huaizhi/bayun-')

#@app.route('/', methods=['GET', 'POST'])
@app.route('/')
def index():
    return render_template('index.html')

#@app.route('/images/<name>', methods=['GET', 'POST'])
#def novel(name):
#    return render_template('./templates/novel.html', name=name)

if __name__ == '__main__':
    app.run()
