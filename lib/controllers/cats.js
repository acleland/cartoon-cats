const { Router } = require('express');
const { cats } = require('../../data/cats');

const router = Router();

router.get('/', (req, res) => {
  return res.json(cats);
});

module.exports = router;
