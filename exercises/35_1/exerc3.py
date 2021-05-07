def imprimeQuadrado(n):
    if n > 1:
        for linha in range(1, n + 1):
            for coluna in range(1, n + 1):
                print("*", end="")
            print()
    else:
        print("n precisa ser > 1")
