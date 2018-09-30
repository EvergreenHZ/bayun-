import leancloud

leancloud.init("E0n6tps4U4X7wf8mnWplF3Df-gzGzoHsz", "HpO8LwvQiU8uAQezDqTY18oQ")

class NovelPreviewTable(leancloud.Object):

    def novel_title_to_id(self, novel_title):
        novel_query = leancloud.Query(NovelPreviewTable)
        novel_query.equal_to('nPt_novelTitle', novel_title)

        novel_id = novel_query.first().get('nPt_novelID')

        # print(novel_id)
        return novel_id


    def novel_info(self, novel_title):
        novel_query = leancloud.Query(NovelPreviewTable)
        novel_query.equal_to('nPt_novelTitle', novel_title)




# test
t = NovelPreviewTable()
t.novel_title_to_id('book1')
