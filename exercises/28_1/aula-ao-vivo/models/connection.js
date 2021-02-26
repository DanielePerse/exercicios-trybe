const mongoClient = require('mongodb').MongoClient;

const MONGO_DB_URL = 'mongodb://localhost:27017'; // ou coloque sua URL do MongoDB aqui

connection = () =>
  mongoClient
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('jwt_exercise_aula_ao_vivo'))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });

module.exports = connection;
