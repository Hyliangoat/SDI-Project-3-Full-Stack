//Will be used to store the main app logic and server configuration, then exported for use in server.js
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const cardsRouter = require('./routes/cards');
// const usersRouter = require('./routes/auth');

app.use('/api/cards', cardsRouter);
// app.use('/api/auth', usersRouter);

app.get('/', (req, res) => {
  res.send('You don\'t belong here, boy, get back to the api...');
});

module.exports = app;