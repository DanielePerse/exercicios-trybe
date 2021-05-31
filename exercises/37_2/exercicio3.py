def maiorinteiro_aux(lista, n):
    if n == 1:
        return lista[0]
    else:
        m = maiorinteiro_aux(lista, n-1)
        if m > lista[n-1]:
            return m
        else:
            return lista[n-1]


def maiorinteiro(lista):
    n = len(lista)
    return maiorinteiro_aux(lista, n)


print(maiorinteiro([1, 21, 300, 4, 57]))
