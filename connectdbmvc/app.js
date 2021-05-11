const express = require('express')
const exphbs  = require('express-handlebars');

const app = express()

app.engine('handlebars', exphbs({
    defaultLayout: 'main.handlebars',
}));
app.set('view engine', 'handlebars');
 
app.get('/home', function (req, res) {
  res.render('home')
});

const productRouter = require('./router/product.router');
app.use('/product', productRouter);

app.use(function (req, res) {
  res.render('404');
});


const port = 3000;

app.listen(port, function() {
    console.log('Server is running at http://localhost:' + port + '/home');
})