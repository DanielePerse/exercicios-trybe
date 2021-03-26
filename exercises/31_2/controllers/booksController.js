const { Router } = require('express');

const router = Router();

const { Book } = require('../models');

router.get('/books', async (req, res) => {
  const books = await Book.findAll();

  res.status(200).json(books);
});

router.get('/book/:id', async (req, res) => {
  const { id } = req.params;

  const book = await Book.findByPk(id);

  res.status(200).json(book);
});

router.post('/book', async (req, res) => {
  const { title, author, pageQuantity } = req.body;

  const book = await Book.create({ title, author, pageQuantity });

  res.status(200).json(book);
});

router.put('/book/:id', async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;

  const book = await Book.update({ title, author, pageQuantity }, {where: { id }});

  res.status(200).json(book);
});

router.delete('/book/:id', async (req, res) => {
  const { id } = req.params;

  await Book.destroy({ where: { id } });

  res.status(204).json({ message: "livro deletado "});
});

module.exports = router;
