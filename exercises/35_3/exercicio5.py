import requests
from parsel import Selector


response = requests.get(
    "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"
)

selector = Selector(response.text)


title = selector.css("h1::text").get()
price = selector.css(".price_color::text").get()[2:]
description = selector.css("#product_description ~ p::text").get()
srcImage = selector.css("#product_gallery img::attr(src)").get()
urlImage = "http://books.toscrape.com/catalogue/" + srcImage
availableBooks = selector.css(".product_main .availability::text").re_first(
    "\d"
)

print(title, price, description, urlImage, availableBooks, sep=" - ")


# título, preço, descrição e url contendo a imagem de capa do livro
# instalei python3 -m pip install parsel e importei
# estou usando seletor para acessar os itens da página
