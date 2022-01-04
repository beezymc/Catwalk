const models = require('../models/models.js');

module.exports = {
  // product requests
  getProducts: (req, res) => {
    const { product_id, type } = req.query;
    models.getProducts(product_id, type)
      .then((response) => {
        //console.log(response.data);
        res.send(response.data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  getStyles: (req, res) => {
    const product_id = req.query.product_id;
    models.getStyles(product_id)
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  // cart requests
  getCart: (req, res) => {
    models.getCart()
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  addCart: (req, res) => {
    const params = req.body;
    models.addCart(params)
      .then(() => {
        return models.getCart();
      })
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  // interaction request
  addInteractions: (req, res) => {
    const params = {
      widget: req.body.widget,
      element: req.body.element,
      time: req.body.time
    };
    models.addInteractions(params)
      .then((response) => {
        res.status(201).send('Created interaction');
      })
      .catch((err) => {
        res.status(422).send(err);
      });
  },
  // questions/answers
  createQuestion: (req, res) => {
    const product_id = req.query.product_id;
    console.log('req.body for create question is: ', req.body);
    models.createQuestion(req.body)
      .then((response) => {
        res.status(201).send(response.data);
      })
      .catch((err) => {
        console.log('ERROR: Create question error: ', err);
        res.status(500).send(err);
      });
  },

  createAnswer: (req, res) => {
    const question_id = req.params.question_id;
    models.createAnswer(req.body, question_id)
      .then((response) => {
        res.status(201).send(response.data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  getQuestionsByProductId: (req, res) => {
    const product_id = req.query.product_id;
    const count = req.query.count;
    models.getQuestionsByProductId(product_id, count)
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },

  updateAnswer: (req, res) => {
    const answer_id = req.params.answer_id;
    models.updateAnswer(req.body, answer_id)
      .then((response) => {
        res.status(201).send(response.data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  getAnswers: (req, res) => {
    const question_id = req.params.question_id;
    const count = req.query.count;
    const page = req.query.page;
    models.getAnswers(question_id, count, page)
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },


  getQuestion: (req, res) => {
    const params = req.query.question_id;
    models.getQuestion(params)
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  updateQuestion: (req, res) => {
    const params = req.body.question_id;
    models.updateQuestion(params)
      .then(() => {
        return models.getQuestion(params);
      })
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  reportQuestion: (req, res) => {
    const params = req.body.question_id;
    models.reportQuestion(params)
      .then(() => {
        return models.getQuestion(params);
      })
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  // review requests
  getReviews: (req, res) => {
    const params = req.query.product_id;
    models.getReviews(params)
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  getMeta: (req, res) => {
    const params = req.query.product_id;
    models.getMeta(params)
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  // still need to do add review, update review, report review
  addReview: (req, res) => {
    const params = req.body;
    models.addReview(params)
      .then(() => {
        return models.getReviews(req.body.product_id);
      })
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  updateReview: (req, res) => {
    const params = req.query.review_id;
    models.updateReview(params)
      .then(() => {
        res.status(204).send('No Content');
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  reportReview: (req, res) => {
    const params = req.query.review_id;
    models.reportReview(params)
      .then(() => {
        res.status(204).send('No Content');
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  }
};