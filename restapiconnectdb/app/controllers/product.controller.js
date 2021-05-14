const Product = require('../models/product.model');

exports.findAll = function (req, res) {
    Product.findAll(function(products) {
        res.json(products);
    });
}

exports.findById = function (req, res) {
    const id = parseInt(req.params.id);
    const product = Product.findById(id);
    res.json(product);
}