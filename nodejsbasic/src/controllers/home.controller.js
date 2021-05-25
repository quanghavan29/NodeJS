const Product = require('../models/product.model');
const Category = require('../models/category.model');
const db = require('../utils/db');

exports.load = async function (req, res) {
    // get all category
    const categories = await Category.findAll();
    // get all product
    const products = await Product.findAll();
    products.map(function (p) {
        p.f_price = '$' + p.price + '.00';
    });

    res.render('home', {
        layout: false,
        categories: categories,
        products: products,
        empty: products.length == 0,
        home: true,
    });
}