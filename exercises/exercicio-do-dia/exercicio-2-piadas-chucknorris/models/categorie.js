const axios = require('axios');

const URL = 'https://api.chucknorris.io/jokes/categories';

const getCategories = async () => {
  const result = await axios(URL);

  return result.data;
};

module.exports = { getCategories };
