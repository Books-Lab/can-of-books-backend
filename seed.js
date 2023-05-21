'use strict';

const mongoose = require('mongoose');
require ('dotenv').config();
mongoose.connect(process.env.MONGODB_URL);

const Book = require('./Model/books');

async function seed(){
  const myBook = new Book({
    title: 'The Witcher',
    description: 'Fantasy series that follows beast hunter, Geralt of Rivia, as he battles wild beasts and monsters.',
    status: 'Read'
  });

  await myBook.save()
    .then(() => console.log('string'))
    .catch(err => console.log(err));

  await Book.create({
    title: 'A Court of Thorns and Roses',
    description:'The first book of the ACOTAR series that follows a huntress who finds herself entertwined with the world of faeries after unknowingly killing one.',
    status: 'Read'
  })
    .then(() => console.log('Saved The Witcher to the DB'))
    .catch(err => console.log(err));

  await Book.create({
    title: 'The Name of the Wind',
    description: 'So begins a tale unequaled in fantasy literature—the story of a hero told in his own voice. It is a tale of sorrow, a tale of survival, a tale of one man’s search for meaning in his universe, and how that search, and the indomitable will that drove it, gave birth to a legend.',
    status: 'Unread'
  })
    .then(() => console.log('Saved ACOTAR to the DB'))
    .catch(err => console.log(err));

  await Book.create({
    title: 'Pendragon',
    description: 'Journal of an Adventure through Time and Space, commonly known as The Pendragon Adventure or simply Pendragon, is a series of ten young-adult science fiction and fantasy novels by American author D. J. MacHale,',
    status: 'Unread'
  })
    .then(() => console.log('Saved The Witcher to the DB'))
    .catch(err => console.log(err));

  mongoose.disconnect();

}

seed();
