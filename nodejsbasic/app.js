const express = require('express');
var exphbs  = require('express-handlebars');
const productRouter = require('./src/routes/product.router');

const app = express();

app.engine('handlebars', exphbs({
    defaultLayout: 'main.handlebars',
}));
app.set('view engine', 'handlebars');

app.get('/home', function (req, res, next) {
    res.render('home');
});

app.use('/product', productRouter);

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
})