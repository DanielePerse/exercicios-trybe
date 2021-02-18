const express = require('express');
const app = express();
const PORT = 3000;

const cepController = require('./controllers/cepController');

app.get('/lookup', cepController.lookupCEP);

app.listen(PORT, () => console.log(`Porta sendo escutada em ${PORT}`));
