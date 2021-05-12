import requests
from parsel import Selector


response = requests.get(
    "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"
)

selector = Selector(text=response.text)
print(selector)


# título, preço, descrição e url contendo a imagem de capa do livro
# instalei python3 -m pip install parsel e importei
# estou usando seletor para acessar os itens da página
