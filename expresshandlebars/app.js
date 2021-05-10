const express = require('express');
var exphbs  = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/contact', function(req, res) {
    res.render('contact');
});

app.get('/bs', function(req, res) {
    res.sendFile(__dirname + '/bs.html');
})

const port = 3000;
app.listen(port, function() {
    console.log('Server is running at http://localhost:' + port);
});
