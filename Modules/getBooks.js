'use strict';

const Book = require('../Model/books');

function getBooks(req, res) {
  let queryObject = {};

  Book.find(queryObject)
    .then(data => res.status(200).send(data))
    .catch(err => console.log(err));
}

module.exports = getBooks;
