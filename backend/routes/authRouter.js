const express = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

const authRouter = express.Router();

const { generateWebToken } = require('../data/webTokenGenerator.js');
const { dataAdmin } = require('../data/AdminConfig.js');
const User = require('../models/User.js');

// @route   GET api/auth/makeadmin
// @desc    Make admin
// @access  Public
authRouter.get('/makeadmin', async (req, res) => {
  try {
    const adminUser = await User.insertMany(dataAdmin);

    res.send(adminUser);
  } catch (err) {
    console.error(err);
    res.status(500).send('Problem with server');
  }
});

// @route   Post api/auth/login
// @desc    Login and get token
// @access  Public
authRouter.post(
  '/login',
  [
    check('username', 'Please make a valid username').exists(),
    check('password', 'Please make a valid username').exists(),
  ],
  async (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      res.status(404).send(err.array());
    }

    const { username, password } = req.body;

    try {
      const user = await User.findOne({ username: username });
      if (!user) {
        return res.status(401).json({ error: 'Invalid Credentials' });
      }

      const passwordMatched = bcrypt.compareSync(password, user.password);

      if (passwordMatched) {
        return res.send({
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
          email: user.email,
          admin: user.admin,
          avatar: user.avatar,
          token: generateWebToken(user),
        });
      } else {
        return res.status(401).json({ error: 'Invalid Credentials' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Problem with server');
    }
  }
);

module.exports = authRouter;
