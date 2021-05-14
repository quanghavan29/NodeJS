const express = require('express');
const router = express.Router();

module.exports = router;

const productController = require('../controllers/product.controller');

router.get('/product/list', productController.findAll);

router.get('/product/detail/:id', productController.findById);