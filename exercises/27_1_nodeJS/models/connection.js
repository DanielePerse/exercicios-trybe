const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'users_crud',
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo ba porta ${PORT}`);
});

module.exports = connection;
