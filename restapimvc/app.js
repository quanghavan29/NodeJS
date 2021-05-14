const express = require('express')
const app = express()
 
const homeRouter = require('./app/routes/home.router');
app.use('/', homeRouter);

const productRouter = require('./app/routes/product.router');
app.use('/product', productRouter);

app.listen(3000, function () {
    console.log("http://localhost:3000");
});