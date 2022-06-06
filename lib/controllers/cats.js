const { Router } = require('express');
const { cats } = require('../../data/cats');

const router = Router();

router.get('/', (req, res) => {
  const cats_resp = cats.map((cat) => ({ id: cat.id, name: cat.name }));
  return res.json(cats_resp);
});

module.exports = router;
