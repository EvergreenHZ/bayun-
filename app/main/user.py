from flask import Flask
import leancloud

leancloud.init("E0n6tps4U4X7wf8mnWplF3Df-gzGzoHsz", "HpO8LwvQiU8uAQezDqTY18oQ")

class UserTable(leancloud.Object):

    def had_user(self, user_mail):
        user_query = leancloud.Query(UserTable)
        user_query.equal_to('Ut_userMail', user_mail)

        try:
            g = user_query.first()
        except Exception as e:
            print("unused mail")
        else:
            print("the mail is used")
            return True

        return False


    def sign_up(self, user_name, user_mail, user_password):
        if self.had_user(user_mail):
            return False

        self.set('Ut_userName', user_name)
        self.set('Ut_userMail', user_mail)
        self.set('Ut_userPassword', user_password)
        self.save()

        print("add user successfully")
        return True


    def sign_in(self, user_mail, user_password):
        user_query = leancloud.Query(UserTable)
        user_query.equal_to('Ut_userMail', user_mail)
        user_query.equal_to('Ut_userPassword', user_password)

        try:
            g = user_query.first()
        except Exception as e:
            print("wrong mail or password")
            return False
        else:
            print("sign in successfully")

        return True


    def get_user_info(self, user_id):
        user_query = leancloud.Query(UserTable)
        user_query.equal_to('Ut_userID', user_id)
        user_info_o = user_query.first()

        user_info = {'user_name': user_info_o.get('Ut_userName'),
                     'user_mail': user_info_o.get('Ut_userMail'),
                     'user_product': user_info_o.get('Ut_userProduct'),
                     'user_lib': user_info_o.get('Ut_userLib')
                    }

        # print(user_isnfo)
        return user_info



# test
print('user')

# user_table = UserTable()
# user_table.sign_up('test_name09', 'test_mail09@test.com', 'test_password09')
# user_table.had_user('test_mail12@test.com')
# user_table.sign_in("test_mail@test.com", "test_passward123")
# user_table.get_user_info(1)

