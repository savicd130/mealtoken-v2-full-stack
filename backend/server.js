// import express from 'express';
const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/authRouter.js');
const userRouter = require('./routes/userRouter.js');

const connectDB = require('./database.js');

console.log(connectDB);
const cors = require('cors');

process.env.SUPPRESS_NO_CONFIG_WARNING = 'n';

const app = express();
app.use(cors());
app.use(express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/mealtoken', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
  res.send('Working');
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Server at port ' + port);
});
