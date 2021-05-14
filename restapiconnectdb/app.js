const express = require('express')
const app = express()

const homeRouter = require('./app/routes/home.router');
app.use('/', homeRouter);

const productRouter = require('./app/routes/product.router');
app.use('/', productRouter);

const port = 3000;
app.listen(port, function() {
    console.log('Server is running on http://localhost:' + port);
});