const express = require('express');
const bodyParser = require('body-parser');
const { getPosts, login, createUsers } = require('./controllers');
const verifyAuthorization = require('./middlewares/verifyAuthorization');

const app = express();

app.use(bodyParser.json());

app.get('/api/posts', verifyAuthorization, getPosts);
app.get('/api/foo', verifyAuthorization, (req, res) => res.status(200).send("foo"));
app.post('/api/users', createUsers);
app.post('/api/login', login);

const PORT = 3000;

app.listen(PORT, () => console.log('conectado na porta ' + PORT));
