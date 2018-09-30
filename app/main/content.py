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


    def test(self):
        print("test")
    # def novel_name_to_id(self, novel_name):
    #     content_query = leancloud.Query(NovelContentTable)
    #     content_query.equal_to('nCt_novelName', novel_name)
    #     novel_id = content_query.first().get('nCt_novelID')

    #     print(novel_id)
    #     return novel_id




# test

print('content')
# NovelContentTable.get_node_content(1, 1, 1)
# NovelContentTable.novel_name_to_id('')

c = NovelContentTable()
c.test()
c.get_node_content(1, 1, 1)
