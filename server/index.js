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
app.get('/api/styles', controllers.getStyles);
// Cart requests
app.get('/api/cart', controllers.getCart);
app.post('/api/cart', controllers.addCart);
// Interaction request
app.post('/api/interactions', controllers.addInteractions);
// Question / Answer requests
app.get('/api/questions', controllers.getQuestionsByProductId);
app.post('/api/questions/:question_id/answers', controllers.createAnswer);
app.post('/api/questions/', controllers.createQuestion);
app.put('/api/answers/:answer_id/helpful', controllers.updateAnswer);
app.get('/api/questions', controllers.getQuestion);
app.get('/api/questions/:question_id/answers', controllers.getAnswers);
app.put('/api/questions/:question_id/helpful', controllers.updateQuestion);
app.patch('/api/question/report', controllers.reportQuestion);
// Review requests
app.get('/api/reviews', controllers.getReviews);
app.get('/api/reviews/meta', controllers.getMeta);
app.post('/api/reviews', controllers.addReview);
app.patch('/api/reviews/update', controllers.updateReview);
app.patch('/api/reviews/report', controllers.reportReview);










