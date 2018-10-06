import flask
import user
import content
import preview


# node_id = novel_id-chapter_id-branch_id
def NovelHome_NovelInfo(node_id):
    id = node_id.split('-')
    print(id)


def NovelHome_Read(node_id):
    # 分解id
    id = node_id.split('-')
    # print(id)

    novel_title = id[0]
    npt = preview.NovelPreviewTable()
    novel_id = npt.novel_title_to_id(novel_title)
    chapter_id = int(id[1])
    branch_id = int(id[2])

    # 查找内容
    nct = content.NovelContentTable()
    node_content = nct.get_node_content(novel_id, chapter_id, branch_id)

    return node_content


def NovelHome_NovelInfo(novel_id):
    book_info = {}

    return book_info


def Sign_in(mail, password):
    pass


def Sign_up(mail, username, password):
    pass

# test
# NovelHome_Read('book1-1-1')
