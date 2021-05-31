import os


# "" indica que o param é opcional
def escanear_pastas(pasta_inicial, pasta="", nivel=0):
    # base p parada
    caminho = os.path.join(pasta_inicial, pasta)
    if not os.path.isdir(caminho):
        return

    # os.path.join -> concatenador de caminhos de arquivos
    arquivos = os.listdir(os.path.join(pasta_inicial, pasta))

    for arquivo in arquivos:
        print('\t' * nivel, '>', arquivo)
        escanear_pastas(caminho, arquivo, nivel + 1)


caminho = "/home/danieleperse/workspace/exercicios-trybe/exercises"
print(escanear_pastas(caminho))
