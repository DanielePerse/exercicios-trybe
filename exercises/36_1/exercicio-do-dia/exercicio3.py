"""
1. Nome da abstração
- Circulo

2. atributos/estados
- pi e raio

3. comportamentos
- calcula area (π·r²)
- calcular perimetro (C = 2 * π * r)
"""


# 1. definimos nossa entidade/classe
class Circulo:
    # variável global para armazenar pi, que possui valor fixo
    PI = 3.14

    # 2. definição construtor com seus atributos
    def __init__(self, raio):
        self.raio = raio

    # 3. definição comportamentos/métodos
    def calc_area(self):
        return self.PI * (self.raio ** 2)

    def calc_perimetro(self):
        return 2 * self.PI * self.raio


if __name__ == "__main__":
    circulo = Circulo(3)
    print(circulo.calc_area())
    print(circulo.calc_perimetro())
