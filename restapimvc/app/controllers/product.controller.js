exports.findAll = function (req, res) {
    const products = [
        {id: 1, name: 'SamSung', price: 799, unit: 'USD'},
        {id: 2, name: 'Iphone', price: 1099, unit: 'USD'},
        {id: 3, name: 'OPPO', price: 459, unit: 'USD'},
        {id: 4, name: 'VSmart', price: 250, unit: 'USD'},
    ];
    res.json(products);
}

exports.findById = function (req, res) {
    const products = [
        {id: 1, name: 'SamSung', price: 799, unit: 'USD'},
        {id: 2, name: 'Iphone', price: 1099, unit: 'USD'},
        {id: 3, name: 'OPPO', price: 459, unit: 'USD'},
        {id: 4, name: 'VSmart', price: 250, unit: 'USD'},
    ];
    const id = parseInt(req.params.id);
    const product = products.filter(p => p.id == id);

    res.json(product);
}