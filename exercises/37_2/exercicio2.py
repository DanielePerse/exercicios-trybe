def even_count(n):
    if n == 0:
        return 0
    elif n % 2 == 0:
        return 1 + even_count(n - 1)
    else:
        return even_count(n - 1)


# Uma função que chama a si mesma é chamada de recursiva
# Dito isso, um problema submetido, a uma solução recursiva, será quebrado
# em subproblemas menores até chegar a uma parte tão pequena que o
# torna possível solucioná-lo trivialmente
