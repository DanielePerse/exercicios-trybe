const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

const categorieController = require('./controllers/categorie');
const jokeController = require('./controllers/joke');

app.get('/jokes', jokeController.randomJoke);

app.get('/jokes/:category', jokeController.jokeByCategory);

app.get('/categories', categorieController.getCategories);

app.get('/', categorieController.redirectToCategories);

app.listen(3000, () => console.log("Ouvindo a porta 3000!"));
