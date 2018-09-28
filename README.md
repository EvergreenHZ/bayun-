# INTRODUCTION
This is a Novel Website Repository called Bayun.

# TECHNIQUES
+ [html5] 
+ [css3]
+ [ES6](http://es6.ruanyifeng.com/)
+ [jQuery]
+ [python]
+ [Flask](https://github.com/miguelgrinberg/flasky)
+ [leancloud](https://leancloud.cn/docs/leanstorage_guide-python.html)

# NOTE
Collaborators: 
* [*Cedo00*][1]
* [*finerc*][2]
* [*emeven*][3]
* [*Miss.Lei*][4]
* [*Azurimson*][5]

[1]: https://github.com/Cedo00
[2]: https://github.com/finerc
[3]: https://github.com/emeven
[4]: https://github.com/leixiaorong
[5]: https://github.com/Azurimson

# Program Structure
```
| - projectName
    | - app  //程序包
        | - templates //jinjia2模板
        |- static //css,js 图片等静态文件
        | - main  //py程序包 ，可以有多个这种包，每个对应不同的功能
            | - __init__.py
            |- errors.py
            |- forms.py
            |- views.py
        |- __init__.py
        |- email.py //邮件处理程序
        |- models.py //数据库模型
    |- migrations //数据迁移文件夹
    | - tests  //单元测试
        |- __init__.py
        |- test*.py //单元测试程序，可以包含多个对应不同的功能点测试
    |- venv  //虚拟环境
    |- requirements.txt //列出了所有依赖包以及版本号，方便在其他位置生成相同的虚拟环境以及依赖
    |- config.py //全局配置文件，配置全局变量
    |- manage.py //启动程序
```

# Use Command
virtualenv --no-site-packages venv
pip install -r requirements.txt
