const express = require('express');
var exphbs  = require('express-handlebars');
const homeRouter = require('./src/routes/home.router');
const productRouter = require('./src/routes/product.rotuer');
// Require handlebars and just-handlebars-helpers
const Handlebars = require('handlebars');
const H = require('just-handlebars-helpers');
 
// Register just-handlebars-helpers with handlebars
H.registerHelpers(Handlebars);

const app = express();

app.use(express.static('assets'));

// set up handlebars
app.engine('handlebars', exphbs({
    defaultLayout: 'main.handlebars',
}));
app.set('view engine', 'handlebars');

// call router => home
app.use('/home', homeRouter);

// call router => product
app.use('/product', productRouter);

// port
app.listen(4000, () => {
    console.log('Server is running at http://localhost:4000/home');
})