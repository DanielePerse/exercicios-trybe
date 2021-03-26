const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const booksController = require('./controllers/booksController');

app.use(bodyParser.json());
app.use('/', booksController);

app.listen(3000);
