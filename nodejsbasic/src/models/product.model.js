const Product = function (product) {
    this.id = product.id;
    this.name = product.name;
}

Product.findAll = function(result) {
    const data = [
        {id: 1, name: 'iphone'},
        {id: 1, name: 'iphone'},
        {id: 1, name: 'iphone'},
    ]
    result(data);
}

module.exports = Product;