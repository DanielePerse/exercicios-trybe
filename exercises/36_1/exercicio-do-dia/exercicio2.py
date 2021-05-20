"""
1. Nome da abstração
- Retangulo

2. atributos/estados
- base e altura

3. comportamentos
- calcula area (base * altura)
- calcular perimetro (2(b + a))
"""


# 1. definimos nossa entidade/classe
class Retangulo:
    # 2. definição construtor com seus atributos
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    # 3. definição comportamentos/métodos
    def calc_area(self):
        return self.base * self.altura

    def calc_perimetro(self):
        return 2 * (self.base + self.altura)


if __name__ == "__main__":
    retangulo = Retangulo(2, 3)
    print(retangulo.calc_area())
    print(retangulo.calc_perimetro())
