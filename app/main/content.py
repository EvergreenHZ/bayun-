# <<<<<<< HEAD
# # -*- coding:utf-8 -*-
# =======
# # -*coding:utf-8*-
# >>>>>>> 4649fb5660f87c36495aac2fb953810ee6ee3b16
import leancloud

leancloud.init("E0n6tps4U4X7wf8mnWplF3Df-gzGzoHsz", "HpO8LwvQiU8uAQezDqTY18oQ")

class NovelContentTable(leancloud.Object):

    def get_node_content(self, novel_id, chapter_id, branch_id):
        content_query = leancloud.Query(NovelContentTable)
        content_query.equal_to('nCt_novelID', novel_id)
        content_query.equal_to('nCt_chapterID', chapter_id)
        content_query.equal_to('nCt_branchID', branch_id)

        node_content = content_query.first().get('nCt_nodeContent')

        # print(node_content)

        return node_content


    def get_chapter_id_list(self, novel_id):
        content_query = leancloud.Query(NovelContentTable)
        content_query.equal_to('nCt_novelID', novel_id)
        content_list = content_query.find()

        chapter_id_set = set()
        for e in content_list:
            # print(e.get('nCt_chapterID'))
            chapter_id_set.add(e.get('nCt_chapterID'))
        # print(chapter_set)

        # set 已经把id排好序了
        chapter_id_list = list(chapter_id_set)
        return chapter_id_list


    def get_branch_list(self, novel_id, chapter_id):
        content_query = leancloud.Query(NovelContentTable)
        content_query.equal_to('nCt_novelID', novel_id)
        content_query.equal_to('nCt_chapterID', chapter_id)
        content_list = content_query.find()

        branch_list = list()
        for e in content_list:
            # print(e.get('nCt_branchID'))
            branch_list.append(e.get('nCt_branchID'))
        # print(branch_list)
        return sorted(branch_list)


    def add_node_content(self, novel_id, chapter_id, branch_id, node_title, node_content, node_author_id):
        self.set('nCt_novelID', novel_id)
        self.set('nCt_chapterID', chapter_id)
        self.set('nCt_branchID', branch_id)
        self.set('nCt_nodeTitle', node_title)
        self.set('nCt_nodeContent', node_content)
        self.set('nCt_nodeAuthorID', node_author_id)
        self.save()


    # def test(self):
    #     print("test")



# test
print('content')

# c = NovelContentTable()
# c.add_node_content(2,1,2,'node_title_2_1_2','node_content_2_1_2', 1)
# c.test()
# c.get_node_content(1, 1, 1)
# c.get_chapter_id_list(1)
# c.get_branch_list(1, 3)
