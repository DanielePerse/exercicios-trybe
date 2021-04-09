const jokeModel = require('../models/joke');

const randomJoke = async (req, res) => {
  const joke = await jokeModel.getRandomJokes();

  return res.render('jokes/index', { joke });
};

const jokeByCategory = async (req, res) => {
  const { category } = req.params;
  const joke = await jokeModel.getJokeByCategory(category);

  return res.render('jokes/index', { joke });
};

module.exports = {
  randomJoke,
  jokeByCategory,
};
