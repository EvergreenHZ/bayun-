# -*coding:utf-8*-
import sys
sys.path.append("./main")

from flask import Flask, render_template, request
from flask import redirect, url_for, request
from flask_bootstrap import Bootstrap
import main.interface as interface

# interface test
print('interface test start')

# print(interface.NovelHome_ShowBranchCatalog(1))

print('interface test end')



app = Flask('bayun', static_url_path='')
bootstrap = Bootstrap(app)


# root router
@app.route('/', methods=['GET', 'POST'])
def index():
    print('index')
    return render_template('index.html')

@app.route('/personalMain/', methods=['GET', 'POST'])
def personalMain():
    return render_template('person.html')

#@app.route('/edit_and_create_branched', methods=['GET', 'POST'])

@app.route('/login/', methods=['GET', 'POST'])
def login():
    print('login')
    return render_template('login.html')


@app.route('/', methods=['GET', 'POST'])
def SignIn():
    return "fuck"
    print('signin')
    form = request.form
    print(form)
    return render_template('person.html')


@app.route('/forgetpwd/',methods=['GET', 'POST'])
def forgetpwd():
    print('forgetpwd')
    return render_template('forgot.html')


@app.route('/register/', methods=['GET', 'POST'])
def register():
    print('register')
    return render_template('register.html')


@app.route('/bayun2novel/<imagename>', methods=['GET', 'POST'])
def bayun2novel(imagename):
    print('bayun2novel')
    # jpg or png
    image_path = '/images/' + imagename
    print(imagename)
    print(image_path)
    introduction = "This is Introduction"

    # chap1 = ["1-1"]
    # chap2 = ['2-1', '2-2']
    # chaps = [chap1, chap2]
    chaps = interface.NovelHome_ShowBranchCatalog(1)
    return render_template('xtp_template_novel_main.html', image_path=image_path, introduction=introduction, chapters=chaps)


@app.route('/novels/<novel_id_chap_id_branch_id>', methods=['GET', 'POST'])
def get_novels(novel_id_chap_id_branch_id):
    print('get_novels')
    '''
    Pay attention:
    novel_read.html come from ping qi bing
    '''
    id = novel_id_chap_id_branch_id.split('-')
    print(id)
    novel_id = int(id[1])
    chapter_id = int(id[2])
    branch_id = int(id[3])
    novel_content = interface.NovelHome_Read(novel_id,chapter_id,branch_id)

    chaps = interface.NovelHome_ShowBranchCatalog(novel_id)
    chapterlast = []
    if chapter_id > 1:
        chapterlast = chaps[chapter_id-2]
    chapternext = chaps[chapter_id]
    print('hello')
    print(novel_id_chap_id_branch_id)
    return render_template('read.html', name=novel_id_chap_id_branch_id, content = novel_content, chapternext = chapternext, chapterlast = chapterlast)

    # print(novel_id_chap_id_branch_id)
    # novel_content = interface.NovelHome_Read(1,1,1)
    # return render_template('novel_read.html', name=novel_id_chap_id_branch_id, content=novel_content)


# @app.route("/test",methods=['POST','GET'])
# def test():
#     return "我是测试的"

if __name__ == '__main__':
    app.run(debug=True)

# -*coding:utf-8*-
import sys
sys.path.append("./main")

from flask import Flask, render_template, request
from flask import redirect, url_for, request
from flask_bootstrap import Bootstrap
import main.interface as interface

# interface test
print('interface test start')

# print(interface.NovelHome_ShowBranchCatalog(1))

print('interface test end')



app = Flask('bayun', static_url_path='')
bootstrap = Bootstrap(app)


# root router
@app.route('/<novel_id>/show_branches', methods=['GET', 'POST'])
def branch(novel_id):
    print('show branch')
    branch_catalog = interface.NovelHome_ShowBranchCatalog(novel_id)
    #{'chapter':[branch1, branch2]}
    chapter_branch = {}

    for i in branch_catalog:
        branch_list = []
        for j in i:
            _, chapter, branch = j.split('-')
            branch_list.append(branch)
        chapter_branch[chapter] = branch_list

    chapter_list = list(chapter_branch.keys())
    context = {
        'chapter_branch': chapter_branch,
        'chapter_list': chapter_list,
    }
    return render_template('tree_branches.html', context=context)

@app.route('/', methods=['GET', 'POST'])
def index():
    print('index')
    return render_template('index.html')

@app.route('/personalMain/', methods=['GET', 'POST'])
def personalMain():
    return render_template('person.html')

@app.route('/login/', methods=['GET', 'POST'])
def login():
    print('login')
    return render_template('login.html')


@app.route('/', methods=['GET', 'POST'])
def SignIn():
    return "fuck"
    print('signin')
    form = request.form
    print(form)
    return render_template('person.html')


@app.route('/forgetpwd/',methods=['GET', 'POST'])
def forgetpwd():
    print('forgetpwd')
    return render_template('forgot.html')


@app.route('/register/', methods=['GET', 'POST'])
def register():
    print('register')
    return render_template('register.html')


@app.route('/bayun2novel/<imagename>', methods=['GET', 'POST'])
def bayun2novel(imagename):
    print('bayun2novel')
    # jpg or png
    image_path = '/images/' + imagename
    print(imagename)
    print(image_path)
    introduction = "This is Introduction"

    # chap1 = ["1-1"]
    # chap2 = ['2-1', '2-2']
    # chaps = [chap1, chap2]
    chaps = interface.NovelHome_ShowBranchCatalog(1)
    return render_template('xtp_template_novel_main.html', image_path=image_path, introduction=introduction, chapters=chaps)


@app.route('/novels/<novel_id_chap_id_branch_id>', methods=['GET', 'POST'])
def get_novels(novel_id_chap_id_branch_id):
    print('get_novels')
    '''
    Pay attention:
    novel_read.html come from ping qi bing
    '''
    id = novel_id_chap_id_branch_id.split('-')
    print(id)
    novel_id = int(id[1])
    chapter_id = int(id[2])
    branch_id = int(id[3])
    novel_content = interface.NovelHome_Read(novel_id,chapter_id,branch_id)

    chaps = interface.NovelHome_ShowBranchCatalog(novel_id)
    chapterlast = []
    if chapter_id > 1:
        chapterlast = chaps[chapter_id-2]
    chapternext = chaps[chapter_id]
    print('hello')
    print(novel_id_chap_id_branch_id)
    return render_template('read.html', name=novel_id_chap_id_branch_id, content = novel_content, chapternext = chapternext, chapterlast = chapterlast)

    # print(novel_id_chap_id_branch_id)
    # novel_content = interface.NovelHome_Read(1,1,1)
    # return render_template('novel_read.html', name=novel_id_chap_id_branch_id, content=novel_content)


# @app.route("/test",methods=['POST','GET'])
# def test():
#     return "我是测试的"

if __name__ == '__main__':
    app.run(debug=True)
