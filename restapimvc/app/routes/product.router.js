const express = require('express');
const router = express.Router();

module.exports = router;

const productController = require('../controllers/product.controller');

router.get('/list', productController.findAll);

router.get('/detail/:id', productController.findById);