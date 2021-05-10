const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.send("Hello Express!");
});

app.get('/bs', function(req, res) {
    res.sendFile(__dirname + '/bs.html');
});

const port = 3000;
app.listen(port, function() {
    console.log('Server is running at http://localhost:' + port);
});