"""
1. Nome da abstração
- Item - Pedido

2. atributos/estados
pedido - cafe - leite - cha

3. comportamentos
- calcula area (π·r²)
- calcular perimetro (C = 2 * π * r)
"""


class Item:
    def __init__(self, nome, preco):
        self.nome = nome
        self.preco = preco


class Pedido:
    def __init__(self, cliente, consumo):
        self.cliente = cliente
        self.consumo = consumo

    def total_pedido(self):
        total = 0
        for i in self.consumo:
            total += i.preco
        return total


cafe = Item("cafe", 5)
leite = Item("leite", 3)
cha = Item("cha", 5)


if __name__ == "__main__":
    pedido_1 = Pedido("Dany", [cafe, leite, cha])
    print(pedido_1.total_pedido())
