## Agora a prática, novamente juntos, tentem trocar de posição, quem pilotava, agora observa e vice-versa:

*Você irá criar um sistema de cadastro de clientes. Esse sistema deve ser composto por 4 páginas.*

1. A primeira página deve ser a Home. Ela deverá ter um Link que possibilite ao usuário navegar para a página de login.

2. A segunda página será a de Login. Devem existir 2 campos para pegar os dados do usuário (email e senha). Após o login ser efetuado, o usuário deve ser redirecionado para a página de Clientes cadastrados.

3. Caso o login não seja feito, ou seja, o usuário tenha mudado à mão o link do sistema e ido para a página de cadastro ou de clientes, a única mensagem exibida deve ser: "Login não efetuado".

4. A página de Clientes cadastrados deverá listar todos os clientes. Caso não haja cliente, a mensagem "Nenhum cliente cadastrado" deve aparecer na tela, juntamente com um botão para ir à pagina de cadastro. Esse botão deve permanecer na tela mesmo caso hajam clientes.

5. A página de cadastro deve conter 3 inputs, para pegar 3 dados do cliente: nome, idade e email. Um botão deve gerar o cadastro. Deve haver também na página um botão que leve o usuário para a página de Clientes cadastrados.

6. Estados que não necessitem navegar para outros componentes, podem ser guardados internamente. Todos os outros devem ser trafegados via Redux.