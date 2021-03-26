const { Router } = require('express');

const router = Router();

const { Book } = require('../models');

router.get('/books', async (req, res) => {
  const books = await Book.findAll();

  res.status(200).json(books);
});

// router.get('/book/:id', async (req, res) => {

//   res.status(200).json([]);
// });

// router.post('/book', async (req, res) => {

//   res.status(200).json([]);
// });

// router.post('/book/:id', async (req, res) => {

//   res.status(200).json([]);
// });

// router.delete('/book/:id', async (req, res) => {

//   res.status(200).json([]);
// });

module.exports = router;
