const { MongoClient } = require('mongodb');

const MONGODB_URL = 'mongodb://127.0.0.1:27017';

const connection = () =>
  MongoClient.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then((conn) => conn.db('cep_exercise'))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });

module.exports = connection;
