|        页面        |     模块     | 重要度 |     功能     |           函数名            |                  输入                 |                    输出                   | 是否已完成 |
|--------------------|--------------|--------|--------------|-----------------------------|---------------------------------------|-------------------------------------------|------------|
| 首页               | 作品分类     |      3 |              | Homepage_Classification     | genre:作品类型                        | url:页面url  book_list:相关类型的小说列表 |            |
|                    | 排行榜       |      2 |              | Homepage_NovelRank          |                                       | book_list                                 |            |
|                    | 最新活动     |      0 |              |                             |                                       |                                           |            |
|                    | 编辑推荐     |      1 |              |                             |                                       |                                           |            |
|                    | 本周强推     |      1 |              |                             |                                       |                                           |            |
|                    | 小说搜索     |      3 |              | NovelSearch                 | keyword                               | book_list                                 |            |
|                    | 新书推荐     |      1 |              |                             |                                       |                                           |            |
|                    | 最新签约     |      0 |              |                             |                                       |                                           |            |
|                    | 最近更新     |      1 |              | Homepage_RecentUpdates      |                                       | book_list                                 |            |
|                    | 完本精品     |      1 |              |                             |                                       |                                           |            |
|                    |              |        |              |                             |                                       |                                           |            |
|                    |              |        |              |                             |                                       |                                           |            |
| 小说主页           | 小说信息     |      3 |              | NovelHome_NovelInfo         | novel_id                              | book_info                                 |            |
|                    | 开始阅读     |      3 |              | NovelHome_Read              | node_id                               | book_content                              |            |
|                    | 续写         |      3 |              | NovelHome_Write             | novel_id                              | url:小说创作页                            |            |
|                    | 显示分支目录 |      3 |              | NovelHome_ShowBranchCatalog | novel_id                              | chapter_list                              |            |
|                    | 切换分支目录 |      3 |              | NovelHome_SwitchBranch      | novel_id  chapter_id                  | chapter_list                              |            |
|                    | 作者信息     |      2 |              | NovelHome_AuthorInfo        | creator_id                            | creator_info                              |            |
|                    | 续写榜       |      1 |              | NovelHome_ParticipantsList  |                                       | novel_id                                  |            |
|                    | 参与者信息   |      1 |              | NovelHome_ParticipantsInfo  | novel_id                              | participants_list                         |            |
|                    | 评论区       |      1 |              | NovelHome_CommitList        | novel_id                              | comment_list                              |            |
|                    |              |        |              |                             |                                       |                                           |            |
|                    |              |        |              |                             |                                       |                                           |            |
| 小说阅读页         | 章节内容     |      3 |              | NovelRead_ChapterContent    | novel_id  chapter_id                  | novel_content                             |            |
| 阅读页左侧边栏     | 目录         |      2 |              | NovelRead_Catelog           | novel_id  chapter_id                  | novel_chapter_list                        |            |
|                    | 设置         |      0 |              |                             |                                       |                                           |            |
|                    | 手机         |      0 |              |                             |                                       |                                           |            |
|                    | 书架         |      2 | 收藏         | NovelRead_AddtoLib          | novel_id  chapter_id                  | bool                                      |            |
|                    | 书页         |      2 | 返回小说主页 | NovelRead_BacktoNovelHome   |                                       | url:小说主页                              |            |
|                    | 改写         |      2 | 添加分支     | NovelRead_AddBranch         | novel_id                              | url:小说主页                              |            |
| 阅读页右侧边栏     | 打赏         |        |              |                             |                                       |                                           |            |
|                    | 投票         |        |              |                             |                                       |                                           |            |
|                    | 评论         |        |              |                             |                                       |                                           |            |
| 阅读页底边栏       | 上一章       |      3 |              | NovelRead_NextChapter       | novel_id  chapter_id                  | novel_content                             |            |
|                    | 下一章       |      3 |              | NovelRead_PreviousChapter   | novel_id  chapter_id                  | novel_content                             |            |
|                    | 目录         |        |              |                             |                                       |                                           |            |
|                    |              |        |              |                             |                                       |                                           |            |
|                    |              |        |              |                             |                                       |                                           |            |
| 小说创作页面       | 章节管理     |      3 |              | NovelWrite_AddBranch        | novel_id  chapter_id                  | bool                                      |            |
|                    | 文本编辑     |      3 |              | NovelWrite_Commit           | novel_id  chapter_id  chapter_content | bool                                      |            |
|                    |              |        |              |                             |                                       |                                           |            |
|                    |              |        |              |                             |                                       |                                           |            |
| 个人页面           | 个人基本信息 |      3 |              | UserPage_UserInfo           | user_id                               | user_info                                 |            |
|                    | 信息修改     |      1 |              | UserPage_InfoModify         | user_id                               | info:一个object	 bool                     |            |
|                    | 创作中心     |      3 |              | UserPage_Generate           |                                       | url:创作页                                |            |
|                    | 作品创建     |      3 |              | UserPage_NovelCreate        | user_id                               | bool  url:创作页                          |            |
|                    | 我的书架     |      3 |              | UserPage_UserLib            | user_id                               | book_list                                 |            |
|                    | 足迹         |        |              |                             |                                       |                                           |            |
|                    | 群组         |        |              |                             |                                       |                                           |            |
|                    | 师徒         |        |              |                             |                                       |                                           |            |
|                    | 消息通知     |        |              |                             |                                       |                                           |            |
|                    | 最近阅读     |      1 |              | UserPage_RescentRead        | user_id                               | book_list                                 |            |
|                    |              |        |              |                             |                                       |                                           |            |
| 登陆/注册          | 登陆         |      3 |              | SignIn                      | user_mail  user_password              | bool                                      |            |
|                    | 注册         |      3 |              | SignUp                      | user_id  user_mail  user_password     | bool                                      |            |
|                    | 退出         |      2 |              | SignOut                     |                                       | bool                                      |            |
|                    |              |        |              |                             |                                       |                                           |            |
|                    |              |        |              |                             |                                       |                                           |            |
| 数据库相关操作     | 增           |      3 |              |                             |                                       |                                           |            |
|                    | 删           |      3 |              |                             |                                       |                                           |            |
|                    | 改           |      3 |              |                             |                                       |                                           |            |
|                    | 查           |      3 |              |                             |                                       |                                           |            |
|                    |              |        |              |                             |                                       |                                           |            |
|                    |              |        |              |                             |                                       |                                           |            |
| 前后端信息交互操作 | 接收         |      3 |              |                             |                                       |                                           |            |
|                    | 返回         |      3 |              |                             |                                       |                                           |            |
|                    |              |        |              |                             |                                       |                                           |            |
| 数据操作           | 数据解析     |      3 |              |                             |                                       |                                           |            |
|                    | 数据构建     |      3 |              |                             |                                       |                                           |            |
