exports.home = function(req, res) {
    const books = [
        {id: 1, name: 'spring mvc', price: 35},
        {id: 2, name: 'nodejs', price: 34},
        {id: 3, name: '.net', price: 43},
    ]
    res.json(books); 
}

exports.about = function(req, res) {
    const books = [
        {id: 1, name: 'about spring mvc', price: 35},
        {id: 2, name: 'about nodejs', price: 34},
        {id: 3, name: 'about .net', price: 43},
    ]
    res.json(books); 
}