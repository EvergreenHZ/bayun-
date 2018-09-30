from flask import Flask, render_template, request
from flask import redirect, url_for
from flask_bootstrap import Bootstrap

app = Flask('bayun', static_url_path='')
bootstrap = Bootstrap(app)

# root router
@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/bayun2novel/<imagename>', methods=['GET', 'POST'])
def bayun2novel(imagename):
    # jpg or png
    image_path = '/images/' + imagename
    print(imagename)
    print(image_path)
    introduction = "This is Introduction"
    chap1 = ["1-1"]
    chap2 = ['2-1', '2-2']
    chaps = [chap1, chap2]
    return render_template('xtp_template_novel_main.html', image_path=image_path, introduction=introduction, chapters=chaps)



@app.route('/novels/<novel_id_chap_id_branch_id>', methods=['GET', 'POST'])
def get_novels(novel_id_chap_id_branch_id):
    '''
    Pay attention:
    novel_read.html come from ping qi bing
    '''
    chapterlast = []
    chapternext = ['2-1', '2-2', '2-3']
    print(novel_id_chap_id_branch_id)
    return render_template('read.html', name=novel_id_chap_id_branch_id, content = "this is novel content", chapternext = chapternext, chapterlast = chapterlast)

if __name__ == '__main__':
    app.run(debug=True)
