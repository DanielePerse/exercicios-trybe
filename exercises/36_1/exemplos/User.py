# esses módulos nos permitirão logar num servidor de e-mail
# Para conseguirmos fazer isso, precisaremos ter em mãos algumas informações:
# o email enviador, a senha do email enviador, o email que receberá a mensagem,
# o assunto e o corpo do email. Vamos colocar isso no nosso construtor
import smtplib
import ssl


# Aqui criamos nossa entidade. No Python, a palavra reservada class é usada
# p/ definir entidade. Toda classe capaz de criar objetos deve ter um método
# construtor, que será chamado quando o objeto estiver sendo criado.
# Em Python, o método construtor é, sempre, definido com o nome __init__
# Note que o 1° parâmetro deve ser o `self`, particularidade de Python
class User:
    def __init__(self, name, email, password, from_email, from_password):
        self.name = name
        self.email = email
        self.password = password
        self.from_email = from_email
        self.from_password = from_password

    def reset_password(self):
        subject = "Reset your password"
        message = "Instruções para resetar a senha, com o link de resetar"
        body = f"Subject:{subject}\n\n{message}"
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(
            "smtp.gmail.com", 465, context=context
        ) as server:
            server.login(self.from_email, self.from_password)
            try:
                server.sendmail(self.from_email, self.to_email, body)
            except (smtplib.SMTPRecipientsRefused, smtplib.SMTPSenderRefused):
                raise ValueError


# aqui criamos um objeto que contém a entidade;
# P/ invocar o método construtor, a sintaxe é NomeDaClasse(param 1, param 2)
# Repare que o parâmetro self foi pulado -- um detalhe do Python.
# A variável `meu_user` contém o objeto criado pelo construtor da classe User!
meu_user = User(
    "Valentino Trocatapa",
    "valentino@tinytoons.com",
    "Grana",
    "password_reset@teste.com",
    "myverysafepassword",
)

meu_user.reset_password()
