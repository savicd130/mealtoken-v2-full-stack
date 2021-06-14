const bcrypt = require('bcryptjs');
const config = require('config');

exports.dataAdmin = {
  firstName: 'Dusan',
  lastName: 'Savic',
  username: 'savicd130',
  email: 'savicd130@gmail.com',
  password: bcrypt.hashSync(config.get('adminPassword'), 8),
  admin: true,
};
