import leancloud

leancloud.init("E0n6tps4U4X7wf8mnWplF3Df-gzGzoHsz", "HpO8LwvQiU8uAQezDqTY18oQ")

class NovelPreviewTable(leancloud.Object):

    def novel_title_to_id(self, novel_title):
        novel_query = leancloud.Query(NovelPreviewTable)
        novel_query.equal_to('nPt_novelTitle', novel_title)

        novel_id = novel_query.first().get('nPt_novelID')

        # print(novel_id)
        return novel_id


    def get_novel_info(self, novel_id):
        novel_query = leancloud.Query(NovelPreviewTable)
        novel_query.equal_to('nPt_novelID', novel_id)
        novel_info_o = novel_query.first()

        novel_info = {'novel_title': novel_info_o.get('nPt_novelTitle'),
                      'novel_genre': novel_info_o.get('nPt_novelGenre'),
                      'novel_creator_id': novel_info_o.get('nPt_novelCreatorID'),
                      'novel_participants': novel_info_o.get('nPt_productParticipants')
                      }

        # print(novel_info)
        return novel_info




# test
print('preview')

# t = NovelPreviewTable()
# t.novel_title_to_id('book1')
