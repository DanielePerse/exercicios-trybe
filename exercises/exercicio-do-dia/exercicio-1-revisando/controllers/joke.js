const jokeModel = require('../models/joke');

const listJokes = async (req, res) => {
  console.log('cheguei no controller 0')
  const joke = await jokeModel.getJokes();
  console.log(joke)
  console.log('cheguei no controller')

  return res.render('jokeView', { joke });
};

module.exports = { listJokes };
