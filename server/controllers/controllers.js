const models = require('../models/models.js');

module.exports = {
  // product requests
  getProducts: (req, res) => {
    const params = req.query.product_id;
    models.getProducts(params)
    .then((response) => {
      res.send(response.data)
    })
    .catch((err) => {
      res.status(404).send(err)
    })
  },
  // cart requests
  getCart: (req, res) => {
    models.getCart()
    .then((response) => {
      res.send(response.data)
    })
    .catch((err) => {
      res.status(404).send(err)
    })
  },
  addCart: (req, res) => {
    const params = req.body.sku_id;
    models.addCart(params)
    .then(() => {
      return models.getCart()
    })
    .then((response) => {
      res.send(response.data)
    })
    .catch((err) => {
      res.status(404).send(err)
    })
  },
  // interaction request
  addInteractions: (req, res) => {
    const params = {
      widget: req.body.widget,
      element: req.body.element,
      time: req.body.time
    }
    models.addInteractions(params)
    .then((response) => {
      res.status(201).send('Created interaction')
    })
    .catch((err) => {
      res.status(422).send(err)
    })
  },
  // questions/answers
  getQuestion: (req,res) => {
    const params = req.query.question_id;
    models.getQuestion(params)
    .then((response) => {
      res.send(response.data)
    })
    .catch((err) => {
      res.status(404).send(err)
    })
  },
  getAnswer: (req, res) => {
    const params = req.query.question_id;
    models.getAnswer(params)
    .then((response) => {
      res.send(response.data)
    })
    .catch((err) => {
      res.status(404).send(err)
    })
  },
  updateQuestion: (req, res) => {
    const params = req.body.question_id;
    models.updateQuestion(params)
    .then(() => {
      return models.getQuestion(params)
    })
    .then((response) => {
      res.send(response.data)
    })
    .catch((err) => {
      res.status(404).send(err)
    })
  },
  reportQuestion: (req, res) => {
    const params = req.body.question_id;
    models.reportQuestion(params)
    .then(() => {
      return models.getQuestion(params)
    })
    .then((response) => {
      res.send(response.data)
    })
    .catch((err) => {
      res.status(404).send(err)
    })
  },
  // review requests
  getReviews: (req, res) => {
    const params = req.query.product_id;
    models.getReviews(params)
    .then((response) => {
      res.send(response.data)
    })
    .catch((err) => {
      res.status(404).send(err)
    })
  },
  getMeta: (req, res) => {
    const params = req.query.product_id;
    models.getMeta(params)
    .then((response) => {
      res.send(response.data)
    })
    .catch((err) => {
      res.status(404).send(err)
    })
  },
  // still need to do add review, update review, report review
}