from flask import Flask, render_template, request
from flask_bootstrap import Bootstrap
from flask_ckeditor import CKEditor


app = Flask(__name__, static_url_path='')
app.config['CKEDITOR_SERVE_LOCAL'] = True
app.config['CKEDITOR_HEIGHT'] = 400
bootstrap = Bootstrap(app)

ckeditor = CKEditor(app)

# @app.route('/', methods=['GET', 'POST'])
# def index():
#     return render_template('index.html')

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        title = request.form.get('title')
        body = request.form.get('ckeditor')
        # You may need to store the data in database here
        return render_template('editor_post.html', title=title, body=body)
    return render_template('editor.html')

# @app.route('/static/novels/<name>', methods=['GET', 'POST'])
# def novel(name):
#     return render_template('novel.html', name=name)

# @app.route('/static/res/<name>', methods=['POST', 'POST'])
# def res(name):
#     return redirect('/templates/novel.html', name=name)

if __name__ == '__main__':
    app.run(debug=True)
