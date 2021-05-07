def maiorNome(listaNomes):
    resultado = listaNomes[0]

    for nome in listaNomes:
        if len(nome) > len(resultado):
            resultado = nome
    return resultado
