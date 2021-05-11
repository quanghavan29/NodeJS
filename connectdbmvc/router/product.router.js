const express = require('express');
const productModel = require('../models/product.model');

const router = express.Router();

module.exports = router;

router.get('/list', async function (req, res) {
    const list = await productModel.all();
    res.render('product/product', {
        products : list,
        empty : list.length == 0
    });
});

router.get('/insert', function(req, res) {
    res.render('product/insert');
});