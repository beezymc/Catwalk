const express = require('express');
const app = express();
const Port = 3000;

const cart = require('./routes/carts/carts.js');
const interactions = require('./routes/interactions/interactions.js');
const products = require('./routes/products/products.js');
const qa = require('./routes/qa/qa.js');
const reviews = require('./routes/reviews/reviews.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());


app.listen(Port, () => {
  console.log(`listening on port ${Port}`)
})


app.use('/cart', cart);
app.use('/interactions', interactions);
app.use('/products', products);
app.use('/qa', qa);
app.use('/reviews', reviews);


