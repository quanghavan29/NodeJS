const express = require('express');
const router = express.Router();

module.exports = router;

// Display list product
router.get('/list', function (req, res) {
    res.json({
        "message" : "Success",
    })
});

// Product detail
router.get('/detail', function (req, res) {
    const id = req.query.id;
    res.json({
        "id" : id,
        "name" : 'Xiaomi'
    })
});

router.post('/insert', function(req, res) {
    res.json(req.body);
})