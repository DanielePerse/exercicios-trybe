def nomeVertical(nome):
    for letra in range(len(nome)):
        result = nome
        print(result)
        # nome[-1:] - pega a ultima posição da string
        ultimaLetra = nome[-1:]
        # rstrip - remover o último caracter
        nome = nome.rstrip(ultimaLetra)


# codigo laís https://github.com/lais-gurgel/Trybe-course/blob/exercises-trybe/
# 35_Python_WebDataScraping_Introduction/35_2/exercises/01_print_name.py

# user_name = input("Digite seu nome: ")

# for i in range(len(user_name)):
#     quantity_of_letters = len(user_name) - i
#     print(user_name[:quantity_of_letters]) -> fatiamento - >>> word[:2]
# carac. from the beginning to position 2 (excluded):
# https://docs.python.org/pt-br/3/tutorial/introduction.html#strings
