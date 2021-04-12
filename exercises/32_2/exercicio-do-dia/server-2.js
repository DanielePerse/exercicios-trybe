const net = require('net');
const port = 2708;

const sockets = [];
let usuarioId = 0;

const server = net.createServer((socket) => {
  usuarioId++;

  socket.guest = 'Usuário' + usuarioId;
  sockets.push(socket);
  socket.write('Bem vindo ao Chat!');

  disparo(socket.guest, socket.guest + 'Entrou no Chat.')

  socket.on('end', () => {
    // console.log('Cliente desconectado');
    sockets.splice(sockets.indexOf(socket), 1);
    const message = socket.guest + ' deixou o Chat!!!\n';

    disparo(socket.guest, message);
  });

  socket.on('data', (data) => {
    // console.log(`O client edisse: ${data}`);
    const message = socket.guest + '> ' + data.toString();

    disparo(socket.guest, message);
  });

  socket.on('error', (error) => {
    console.log('Erro no socket: ', error.message);
  });
});

// usuário 1 Entrou no chat
// usuário 2 Entrou no chat
const disparo = (from, message) => {
  sockets.forEach((socket, index, array) => {
    if (socket.guest === from) return;

    socket.write(message);
  });
};

server.listen( port, () => {
  console.log(`escutando porta: ${port}`);
});
