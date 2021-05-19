# Aqui criamos nossa entidade. No Python, a palavra reservada class é usada
# p/ definir entidade. Toda classe capaz de criar objetos deve ter um método
# construtor, que será chamado quando o objeto estiver sendo criado.
# Em Python, o método construtor é, sempre, definido com o nome __init__
# Note que o 1° parâmetro deve ser o `self`, particularidade de Python
class User:
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password


# aqui criamos um objeto que contém a entidade;
# P/ invocar o método construtor, a sintaxe é NomeDaClasse(param 1, param 2)
# Repare que o parâmetro self foi pulado -- um detalhe do Python.
# A variável `meu_user` contém o objeto criado pelo construtor da classe User!
meu_user = User("Valentino Trocatapa", "valentino@tinytoons.com", "Grana")
print(meu_user)
print(meu_user.name)
print(meu_user.email)
print(meu_user.password)
