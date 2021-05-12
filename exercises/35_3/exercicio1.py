import requests


response = requests.get("https://httpbin.org/encoding/utf8")
print(response.text)

# instalei -> python3 -m pip install requests e importei
# usei o método get para fazer o response
# método text para receber o site em texto
