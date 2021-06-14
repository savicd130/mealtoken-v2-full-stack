const mongoose = require('mongoose');

module.exports = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URL || 'mongodb://localhost/mealtoken',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);

    process.exit(1);
  }
};
