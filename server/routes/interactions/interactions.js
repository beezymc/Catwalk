const express = require('express');
const router = express.Router();

// Adds a interaction to the db.
router.post('/', (err) => {
  if (err) {
    res, status(422).send('Invalid Parameters', err)
  } else {
    res.status(201).send('Interaction created')
  }
})

module.exports = router;