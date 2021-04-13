# Show me the code!
Além da facilidade de sintaxe no uso do Socket.io, ele também cria um servidor para nós, assim como o Express. Porém, ao invés de rotas, nós temos uma lógica baseada em eventos! É através desses eventos que fazemos a comunicação do cliente com o servidor e do servidor com o cliente! Nesta seção iremos trabalhar a criação de um web chat com interface gráfica e algumas outra funcionalidades!

- Para começar, vamos iniciar um projeto Node.js com o comando abaixo:
$ npm init -y

Feito isso, vamos instalar o Express com:
$ npm install express

- Dentro da pasta do nosso projeto, vamos criar o arquivo index.js

- Dentro do mesmo diretório, vamos criar o arquivo index.html

- Rode a aplicaçao com node index.js e abra seu browser no endereço localhost:3000 . Terá de ver uma tela de um chat!

- Passando dessa etapa, vamos instalar o socket.io e o cors no projeto:
$ npm install socket.io cors

- Após isso, vamos adicioná-lo no nosso servidor: index.js

- Para que o client possa se comunicar com o back-end, nós temos que implementar o script do socket.io dentro da página HTML. Usaremos um link provido pelo CDNJS , que nos dá toda a biblioteca do socket.io para uso no front-end. O link da biblioteca é: https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.0.4/socket.io.js .
Se você prefere não usar a versão da biblioteca via CDN, você consegue encontrar um arquivo local assim que baixar o módulo do socket.io . Você terá acesso ao arquivo de que precisa no seguinte caminho: /socket.io/socket.io.js . Para usar, você utiliza a tag script dessa forma: <script src="/socket.io/socket.io.js"></script>

- Note que, até então, temos apenas o código const socket = io(); no script. O pacote do socket.io expõe um objeto chamado io , que por sua vez é global e, assim que é chamado, executa uma conexão socket com alguém. Esse método por default recebe como parâmetro o mesmo endpoint por onde ele está sendo acessado, ou seja, se estamos na rota http://localhost:3000 , é por aí que ele vai tentar se conectar. Caso você queira se conectar a um servidor num socket específico, basta você informar isso via parâmetro, por exemplo: const socket = io('http://localhost:5000') .
Agora, se você iniciar novamente seu projeto, verá uma mensagem no console.log a cada vez que atualizar a página. Note, no entanto, que nunca há uma mensagem de "desconectado". Vamos implementá-la? No index.js
- Agora, para cada refresh em nossa página web, veremos no terminal que aparece uma mensagem para o evento disconnect . Para simplificar a nossa aplicação, vamos remover essas mensagens longas do terminal e deixar alguma coisa mais direta.