const connection = require('./connection');

const findCEP = async (cep) => {
  const result = await connection().then((db) => db.collection('ceps').findOne({ cep }));

  if (!result) return null;

  return result;
};

const saveCEP = async (data) => {
  const { uf, cidade, bairro, logradouro, cep } = data;

  const result = await connection().then((db) => db.collection('ceps').insertOne({ uf, cidade, bairro, logradouro, cep }));
  
  return result;
};

module.exports = {
  findCEP,
  saveCEP,
};
