const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello word!');
});

const productRoutes = require('./routes/product.routes');
app.use('/product', productRoutes);

const port = 3000;
app.listen(port, function() {
    console.log('Server is running on http://localhost:' + port);
});