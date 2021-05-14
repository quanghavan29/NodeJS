exports.home = function (req, res) {
    const data = [
        { id: 1, name: 'spring mvc', price: 35 },
        { id: 2, name: 'nodejs', price: 34 },
        { id: 3, name: '.net', price: 43 },
    ];
    res.json(data);
}