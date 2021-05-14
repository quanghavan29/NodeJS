const express = require('express');
const router = express.Router();

module.exports = router;

const homeController = require('../controllers/home.controller')

router.get('/home', homeController.home);