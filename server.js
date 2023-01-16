const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb');
const uri = 'mongodb://localhost:27017/Capstone';
const passport = require('passport');
const users = require('./routes/api/user');
const budget = require('./routes/api/budget');
const path = require('path');
const plaid = require('./routes/api/plaid');
const app = express();
if (process.env.NODE_ENV === 'development') require('./config/keys');
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

// static file-serving middleware
app.use(express.static(path.join(__dirname, 'public')));

// DB Config
const db = process.env.mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB successfully connected'))
  .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Passport config
require('./config/passport')(passport);

app.use('/api/budget', budget);

app.use('/api/users', users);
app.use(