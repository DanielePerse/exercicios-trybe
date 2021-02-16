const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const PORT = 3000;

const Users = require('./models/usersModel-mongoDB');
//ao usar o sql novamente, basta alterar o nome do arquivo

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const isValid = Users.isValid(firstName, lastName, email, password);

  if (!isValid) return res.status(400).json({ message: 'Dados Inválidos' });

  await Users.createUser(firstName, lastName, email, password);

  return res.status(201).json({ message: 'Usuário criado com sucesso' });
});

app.get('/user', async (req, res) => {
  const getAllUsers = await Users.allUsers();

  return res.status(200).json(getAllUsers);
});

app.get('/user/:id', async (req, res) => {
  const id = Number(req.params.id);

  const user = await Users.userById(id);

  if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

  return res.status(200).json(user);
});

app.put('/user/:id', async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;

  const isValid = Users.isValid(firstName, lastName, email, password);

  if (!isValid) return res.status(400).json({ message: 'Dados inválidos' });

  await Users.editUser(id, firstName, lastName, email, password);

  return res.status(200).json({ message: 'Usuário editado com sucesso' });
});

app.delete('/user/:id', async (req, res) => {
  const { id } = req.params;

  await Users.deleteUser(id);

  return res.status(200).json({ message: 'Usuário deletado com sucesso' });
});

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
