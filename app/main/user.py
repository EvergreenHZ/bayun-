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


    def add_user(self, user_name, user_mail, user_password):
        if self.had_user(user_mail):
            return False

        self.set('Ut_userName', user_name)
        self.set('Ut_userMail', user_mail)
        self.set('Ut_userPassword', user_password)
        self.save()

        print("add user successfully")


    # @property
    # def user_name(self):
    #     return self.get('Ut_userName')




# test

# user_table = UserTable()
# user_table.add_user('test_name09', 'test_mail09@test.com', 'test_password09')
# user_table.had_user('test_mail12@test.com')

print('user')
