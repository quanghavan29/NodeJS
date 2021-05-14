const express = require('express');
const db = require('./src/config/db.config');
const app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

const categoryRouter = require('./src/routes/category.router');
app.use('/category', categoryRouter);
 
app.listen(3000, function () {
    console.log('Server is running at http://localhost:3000');
});