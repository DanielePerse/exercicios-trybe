import math


def calcTinta(tamParede):
    if tamParede > 0:
        precoLata = 80
        litrosNecessario = (tamParede / 3) / 18
        valorTratado = int(math.ceil(litrosNecessario))
        resultado = (valorTratado, valorTratado * precoLata)

    return resultado
