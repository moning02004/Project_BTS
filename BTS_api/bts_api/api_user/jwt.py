def jwt_custom_handler(token, user=None, request=None):
    return {
        'token': token,
        'nickname': user.nickname
    }