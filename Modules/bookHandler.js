'use strict';

const Book = require('../Model/books');

const bookHandler = {};

bookHandler.getBooks = function (req, res) {
  let queryObject = {};

  Book.find(queryObject)
    .then(data => res.status(200).send(data))
    .catch(err => console.error(err));

};

bookHandler.postBooks = function (req, res, next) {
  const data = req.body;
  Book.create(data)
    .then(createdBook => res.status(201).send(createdBook))
    .catch(err => next(err));
};

module.exports = bookHandler;
