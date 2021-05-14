const express = require('express');

const router = express.Router();

module.exports = router;

const categoryController = require('../controllers/categoryController');
router.get('/list', categoryController.findAll);