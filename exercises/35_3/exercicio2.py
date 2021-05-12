import requests


response = requests.get("https://api.github.com/users")
usersResources = response.json()
for user in usersResources:
    print(f"'{user['login']}' - '{user['url']}'")

# usei o método get para fazer o response
# método json para receber dados no formato json
# fim um looping para acessar cada item que precisava
