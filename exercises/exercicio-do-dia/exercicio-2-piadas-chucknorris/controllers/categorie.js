const categorieModel = require('../models/categorie');

const getCategories = async (req, res) => {
  const categories = await categorieModel.getCategories();

  return res.render('categories/index', { categories });
};

const redirectToCategories = (req, res) => {
  res.redirect('/categories');
};

module.exports = {
  getCategories,
  redirectToCategories,
};
