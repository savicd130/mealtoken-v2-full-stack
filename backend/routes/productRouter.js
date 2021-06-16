const express = require('express');
const { userAuth } = require('../middleware/authorization.js');
const { adminAuth } = require('../middleware/authorizationAdmin.js');

const productRouter = express.Router();

const Product = require('../models/Product.js');

// @route   GET api/product/uploadproducts
// @desc    Upload products
// @access  Admin

productRouter.get('/uploadproducts', userAuth, adminAuth, async (req, res) => {
  try {
    await Product.insertMany([
      ...require('../data/productsData/burger.json'),
      ...require('../data/productsData/pasta.json'),
      ...require('../data/productsData/pizza.json'),
      ...require('../data/productsData/salads.json'),
      ...require('../data/productsData/dessert.json'),
    ]);
    res.status(200).send({ message: 'Success' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Problem with server');
  }
});

// @route   Get api/product/:category
// @desc    Get product by category
// @access  Public

productRouter.get('/:category', async (req, res) => {
  console.log(req.params.category);
  try {
    const products = await Product.find({ category: req.params.category });
    res.status(200).send(products);
  } catch (error) {
    console.error(err);
    res.status(500).send({ error: 'Problem with server' });
  }
});

module.exports = productRouter;
