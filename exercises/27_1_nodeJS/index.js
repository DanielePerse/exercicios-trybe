const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const PORT = 3000;

const Users = require('./models/usersModel');

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const isValid = Users.isValid(firstName, lastName, email, password);

  if (!isValid) return res.status(400).json({ message: 'Dados Inválidos' });
  await Users.createUser(firstName, lastName, email, password);
  return res.status(201).json({ message: 'Usuário criado com sucesso' });
});

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
