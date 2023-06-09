'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const bookHandler = require('./Modules/bookHandler');
const verifyUser = require('./Modules/Authorize');

const app = express();
app.use(cors());
app.use(express.json());
app.use(verifyUser)

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('Mongoose is connected'));



app.get('/getBooks', bookHandler.getBooks);
app.post('/books', bookHandler.postBooks);
app.get('/test', (request, response) => {

  response.send('test request received');

});

app.delete('/books/:id', bookHandler.deleteBook);

app.put('/books/:id', bookHandler.updatedBook);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
