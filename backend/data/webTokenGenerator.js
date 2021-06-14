const jwt = require('jsonwebtoken');
const config = require('config');

exports.generateWebToken = user => {
  return jwt.sign(
    {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      admin: user.admin,
    },
    config.get('webTokenSecret'),
    {
      expiresIn: '30d',
    }
  );
};
