const express = require('express')
const exphbs  = require('express-handlebars');
const app = express()

app.engine('handlebars', exphbs({
    // layoutsDir: 'view/rename_layouts' -< if rename layouts
    // set default layout
    defaultLayout: 'main.handlebars',
})); // handlebars -> hbs if rename
app.set('view engine', 'handlebars');
 
app.get('/home', function (req, res) {
  res.render('home')
});

app.get('/about', function (req, res) {
    res.render('about')
});

app.get('/contact', function (req, res) {
    res.render('contact')
});

const productRouter = require('./routes/product.route');
app.use('/product', productRouter)

const port = 3000;

app.listen(port, function() {
    console.log('Server is running at http://localhost:' + port + '/home')
});