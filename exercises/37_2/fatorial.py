# https://www.youtube.com/watch?v=9ddMSqxmbjc

# recursivo
def fatorial(numero):
    # caso base
    if numero == 1:
        return 1
    # se escrever somente a linha abaixo, minha função ficaŕa em looping
    # infinito, dessa maneira, preciso de um stop (caso base)
    return numero * fatorial(numero - 1)
    # pilha de execução


# não-recursivo
def fatorial_for(numero):
    resultado = 1

    for i in range(1, numero + 1):
        resultado = resultado * i

    return resultado


print(fatorial_for(5))
