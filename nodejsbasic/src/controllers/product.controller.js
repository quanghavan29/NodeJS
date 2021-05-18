const Product = require('../models/product.model');

exports.findAll = function (req, res) {
    Product.findAll(function(data) {
        return res.json(data);
    })
}