def nomeVertical(nome):
    for letra in range(len(nome)):
        result = nome
        print(result)
        # nome[-1:] - pega a ultima posição da string
        ultimaLetra = nome[-1:]
        # rstrip - remover o último caracter
        nome = nome.rstrip(ultimaLetra)
