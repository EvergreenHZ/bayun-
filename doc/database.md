###NovelContentTable
|       name       | type | must |
|------------------|------|------|
| nCt_novelID      | num  | Y    |
| nCt_chapterID    | num  | Y    |
| nCt_branchID     | num  | Y    |
| nCt_nodeTitle    | str  | Y    |
| nCt_nodeContent  | str  | Y    |
| nCt_nodeAuthorID | num  | Y    |
| nCt_nodeFatherID | str  | Y    |
|                  |      |      |

###UserTable
|       name      | type | must |
|-----------------|------|------|
| Ut_userID       | num  | Y    |
| Ut_userName     | str  | Y    |
| Ut_userMail     | str  | Y    |
| Ut_userPassword | str  | Y    |
| Ut_userAvator   | file | N    |
| Ut_userProject  | arr  | N    |
| Ut_userLib      | arr  | N    |
|                 |      |      |


###NovelPreviewTable
|           name          | type | must |
|-------------------------|------|------|
| nPt_novelID             | num  | Y    |
| nPt_novelTitle          | str  | Y    |
| nPt_novelCreatorID      | num  | Y    |
| nPt_novelCover          | file | N    |
| nPt_novelGenre          | str  | N    |
| nPt_productParticipants | arr  | N    |
|                         |      |      |
