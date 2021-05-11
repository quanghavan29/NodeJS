const express = require('express');

const router = express.Router();

module.exports = router;

router.get('/list', function (req, res) {
    const list = [
        {productId: 1, productName: 'Stuged', price: 450, unit: 'USD'},
        {productId: 2, productName: 'Stuged', price: 450, unit: 'USD'},
        {productId: 3, productName: 'Stuged', price: 450, unit: 'USD'},
        {productId: 4, productName: 'Stuged', price: 450, unit: 'USD'},
    ]
    res.render('product/product', {
        products : list,
        empty: list.length == 0
    });
});

router.get('/insert', function(req, res) {
    res.render('/insert');
});