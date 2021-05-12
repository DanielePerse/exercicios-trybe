import requests


response = requests.get(
    "https://scrapethissite.com/pages/advanced/?gotcha=headers",
    headers={"User-agent": "Mozilla", "Accept": "text/html"},
)

assert "bot detected" not in response.text

# l.6 -> peguei do gabarito -> DÚVIDA? como saber q só preciso
# desses headers para fazer o exercicio?
# inspecionar - network - cliquei no name "gotcha=headers"
# fui em request headers
# e oeguei somente os dados necessários
