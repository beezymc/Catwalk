const express = require('express');
const router = express.Router();

// Retrieves list of products added to the cart by a user.
router.get('/', (err, results) => {
  if (err) {
    res.status(404).send(err)
  } else {
    res.status(200).send(results)
  }
})

// Adds a product to the cart.
router.post('/', (err) => {
  if (err) {
    res.status(404).send(err)
  } else {
    res.status(201).send('Product added')
  }
})


module.exports = router;
