const axios = require('axios');

const URLRANDOM = 'https://api.chucknorris.io/jokes/random';
const URLCATEGORIE = 'https://api.chucknorris.io/jokes/random?category=';

const getRandomJokes = async () => {
  const result = await axios(URLRANDOM);

  return result.data.value;
};

const getJokeByCategory = async (categorie) => {
  const result = await axios(`${URLCATEGORIE}${categorie}`);

  return result.data.value;
};

module.exports = { 
  getRandomJokes,
  getJokeByCategory,
};
