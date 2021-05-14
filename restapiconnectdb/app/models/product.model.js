const Product = function (product) {
    this.id = product.id;
    this.name = product.name;
    this.price = price;
    this.unit = unit;
}

module.exports = Product;

Product.findAll = function (result) {
    const products = [
        {id: 1, name: 'SamSung', price: 799, unit: 'USD'},
        {id: 2, name: 'Iphone', price: 1099, unit: 'USD'},
        {id: 3, name: 'OPPO', price: 650, unit: 'USD'},
    ];

    result(products);
}

Product.findById = function (id) {
    const products = [
        {id: 1, name: 'SamSung', price: 799, unit: 'USD'},
        {id: 2, name: 'Iphone', price: 1099, unit: 'USD'},
        {id: 3, name: 'OPPO', price: 650, unit: 'USD'},
    ];
    const product = products.find(p => p.id == id);

    return product;
}
