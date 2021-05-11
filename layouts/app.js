const express = require('express')
const app = express()

const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({
    // layoutsDir: 'views/_layouts', if rename layouts
    defaultLayout: 'main.handlebars'
})); // handlebars -> hbs
app.set('view engine', 'handlebars');
app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/contact', function (req, res) {
    res.render('contact');
});

const port = 3000;
app.listen(port, function() {
    console.log('Server is running at http://localhost:' + port);
});