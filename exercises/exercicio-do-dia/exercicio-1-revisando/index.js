const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

const jokeController = require('./controllers/joke');

app.get('/', jokeController.listJokes);

app.listen(3000, () => console.log("Ouvindo a porta 3000!"));
