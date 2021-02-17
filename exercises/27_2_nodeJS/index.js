const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// const SongController = require('./controllers/SongController');

// app.get('/songs', SongController.getAll);

app.listen(PORT, () => console.log(`Porta sendo escutada em ${PORT}`));