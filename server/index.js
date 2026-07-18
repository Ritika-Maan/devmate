require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('./auth/passport');
const mongoose = require('mongoose');
const authRoutes = require('./auth/routes');

const app = express();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));