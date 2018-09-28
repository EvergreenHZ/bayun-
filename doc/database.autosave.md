###NovelContentTable
|       name       | type | must | addself |
|------------------|------|------|---------|
| nCt_novelID      | num  | Y    | N       |
| nCt_chapterID    | num  | Y    | N       |
| nCt_branchID     | num  | Y    | N       |
| nCt_nodeTitle    | str  | Y    |         |
| nCt_nodeContent  | str  | Y    |         |
| nCt_nodeAuthorID | num  | Y    | N       |
| nCt_nodeFatherID | str  | Y    |         |
|                  |      |      |         |

###UserTable
|       name      | type | must | addself |
|-----------------|------|------|---------|
| Ut_userID       | num  | Y    | Y       |
| Ut_userName     | str  | Y    |         |
| Ut_userMail     | str  | Y    |         |
| Ut_userPassword | str  | Y    |         |
| Ut_userAvator   | file | N    |         |
| Ut_userProject  | arr  | N    |         |
| Ut_userLib      | arr  | N    |         |
|                 |      |      |         |


###NovelPreviewTable
|           name          | type | must | addself |
|-------------------------|------|------|---------|
| nPt_novelID             | num  | Y    | Y       |
| nPt_novelTitle          | str  | Y    |         |
| nPt_novelCreatorID      | num  | Y    | N       |
| nPt_novelCover          | file | N    |         |
| nPt_novelGenre          | str  | N    |         |
| nPt_productParticipants | arr  | N    |         |
|                         |      |      |         |
