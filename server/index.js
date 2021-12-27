const express = require('express');
const path = require('path');
const app = express();
const Port = 3000;
const controllers = require('./controllers/controllers.js');


app.use(express.static(__dirname + '/../client/dist'));
app.use('/product/:product_id', express.static(__dirname + '/../client/dist'));
app.use(express.json());


app.listen(Port, () => {
  console.log(`listening on port ${Port}`);
});

// Product requests
app.get('/api/products', controllers.getProducts);
// Cart requests
app.get('/api/cart', controllers.getCart);
app.post('/api/cart', controllers.addCart);
// Interaction request
app.post('/api/interactions', controllers.addInteractions);
// Question / Answer requests
app.get('/api/questions', controllers.getQuestion);
app.get('/api/answers', controllers.getAnswer);
app.patch('/api/question/update', controllers.updateQuestion);
app.patch('/api/question/report', controllers.reportQuestion);
// Review requests
app.get('/api/reviews', controllers.getReviews);
app.get('/api/reviews/meta', controllers.getMeta);
app.post('/api/reviews', controllers.addReview);
app.patch('/api/reviews/update', controllers.updateReview);
app.patch('/api/reviews/report', controllers.reportReview);










