const net = require('net');

// exercicio 1: experimentem remover a resposta do servidor e veja quanto tempo a conexão fica ligada! Para isso, basta comentar o trecho de código.
// ao fazer isso, a porta não desconecta
const server = net.createServer((connection) => {
  // console.log('Cliente conectado');

  // connection.on('end', () => {
  //   console.log('Cliente desconectado');
  // });

  // connection.write('Mensagem do servidor!\r\n');
  // connection.pipe(connection);
});

server.listen(8080, () => {
  console.log('Servidor escutando na porta 8080');
});
