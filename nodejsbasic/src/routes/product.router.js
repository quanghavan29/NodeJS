var express = require('express');
var router = express.Router();
var productController = require('../controllers/product.controller');

module.exports = router;

router.get('/list', productController.findAll);