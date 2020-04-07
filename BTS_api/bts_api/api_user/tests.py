from django.test import TestCase, Client

from api_user.models import User


class UserTestCase(TestCase):

    @classmethod
    def setUpTestData(cls):
        cls.user1 = User.objects.create(username='user1@bts.com', nickname='user_1')
        cls.user1.set_password('password1')
        cls.user1.save()

    def test_user_list(self):
        client = Client()
        response = client.get('/user/')
        self.assertEqual(response.status_code, 200)

    def test_user_register(self):
        client = Client()
        response = client.post('/user/', {
            'username': 'user2@bts.com',
            'password': 'password2',
            'nickname': 'user_2'
        })
        self.assertEqual(response.status_code, 201)

    def test_user_profile(self):
        client = Client()
        login = client.post('/user/signin/', {'username': 'user1@bts.com', 'password': 'password1'})
        header = {'HTTP_AUTHORIZATION': f'JWT {login.data.get("token")}'}
        response = client.get('/user/1/', **header)
        user = response.data.get('nickname')
        self.assertEqual(user, 'user_1')
