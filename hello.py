from flask import Flask, render_template, request
from flask import redirect, url_for
from flask_bootstrap import Bootstrap

app = Flask('bayun', static_url_path='')
bootstrap = Bootstrap(app)

# root router
@app.route('/', methods=['GET', 'POST'])
def index():
    image_path = 'images/a1.jpg'
    introduction = "This is Introduction"
    chap1 = ["1-1"]
    chap2 = ['2-1', '2-2']
    chaps = [chap1, chap2]
    return render_template('index.html', image_path=image_path, introduction=introduction, chapters=chaps)

@app.route('/novels/<novel_id_chap_id_branch_id>', methods=['GET', 'POST'])
def get_novels(novel_id_chap_id_branch_id):
    return render_template('test_novel.html', name=novel_id_chap_id_branch_id)

if __name__ == '__main__':
    app.run(debug=True)
















    # ask for a novel page
#@app.route('/static/novels/<name>', methods=['GET', 'POST'])
#def novel(name):
#    print('Render Novel Page')
#    return render_template('novel.html', name=name)

#@app.route('/static/res/<name>', methods=['GET', 'POST'])
#def res(name):
#    return redirect('novel.html', name=name)

#@app.route('/NewNovel/<name>', methods=['POST', 'GET'])
#def newnovel(name):
#    # Actually, get the novel information here and render the page
#    return render_template('test.html')

#@app.route('/hello/<name>', methods=['GET', 'POST'])
#def hello(name):
#    if request.method == 'GET':
#        #image_name = "HELLO, GODDESS!"
#        image_name = "SCALLET"
#        print('HELLO, GODDESS')
#        return render_template('novel.html', name=image_name)
#        #return redirect(url_for('novel', name=image_name))
#    return false
