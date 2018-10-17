import flask
import leancloud
from main import user
from main import content
from main import preview

# 链接leancloud数据库
leancloud.init("E0n6tps4U4X7wf8mnWplF3Df-gzGzoHsz", "HpO8LwvQiU8uAQezDqTY18oQ")

'''
node_id = novel_name-chapter_id-branch_id
'''


def NovelHome_NovelInfo(novel_id):
    # novel_id = Spit_node_id(node_id)[0]
    npt = preview.NovelPreviewTable()
    novel_info = npt.get_novel_info(novel_id)
    return novel_info


def NovelHome_Read(novel_id, chapter_id, branch_id):
    # novel_id, chapter_id, branch_id = Spit_node_id(node_id)

    nct = content.NovelContentTable()
    node_content = nct.get_node_content(novel_id, chapter_id, branch_id)

    # print(node_content)
    return node_content


'''
输入: novel_id
返回: 二维数组 [ [chapter1_branches] [chapter_branches] ···]
'''
def NovelHome_ShowBranchCatalog(novel_id):
    branch_catalog = list()  # novel_id-chapter_id-branch_id 列表
    nct = content.NovelContentTable()
    chapter_id_list = nct.get_chapter_id_list(novel_id)

    for e in chapter_id_list:
        # print(novel_id, '', e)
        branch_list = nct.get_branch_list(novel_id, e)
        # print(branch_list)
        chapter_branch = list()

        for i in branch_list:
            chapter_branch.append(str(novel_id) + '-' + str(e) + '-' + str(i))

        # branch_catalog.append(str(novel_id) + '-' + str(e) + '-' + str(i))
        branch_catalog.append(chapter_branch)

    # print(chapter_id_list)
    # print(branch_catalog)
    return branch_catalog


def Sign_in(mail, password):
    ut = user.UserTable()
    is_sign_in = ut.sign_in(mail, password)
    return is_sign_in  # bool 登陆成功返回ture,失败返回false


def Sign_up(username, mail, password):
    ut = user.UserTable()
    is_sign_up = ut.sign_up(username, mail, password)
    return is_sign_up  # bool 注册成功返回true,失败返回false


def get_user_info(user_id):
        ut = user.UserTable()
        user_info = ut.get_user_info(user_id)
        # print(user_info)
        return user_info


# 分解node_id 为 novel_id, chapter_id, branch_id
def Spit_node_id(node_id):
    # 分解id
    id = node_id.split('-')
    # print(id)

    novel_title = id[0]
    npt = preview.NovelPreviewTable()
    novel_id = npt.novel_title_to_id(novel_title)
    chapter_id = int(id[1])
    branch_id = int(id[2])

    return novel_id, chapter_id, branch_id






# test
print('interface')
print('test start')
# NovelHome_NovelInfo('book1-1-1')
# NovelHome_Read('book1-1-1')
# Sign_in("test_mail@test.com", "test_passward")
# NovelHome_ShowBranchCatalog(1)
# get_user_info(1)
print('test end')
