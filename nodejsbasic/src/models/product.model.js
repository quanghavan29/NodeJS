const db = require("../utils/db");

const Product = function (product) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.image = product.image;
}

module.exports = Product;

Product.findAll = function() {
    return db.load('SELECT * FROM product');
}

Product.findByCategory = function(category_id) {
    return db.load('SELECT * FROM product WHERE category_id = ' + category_id);
}

Product.findById = function(id) {
    return db.load('SELECT * FROM product WHERE id = ' + id);
}