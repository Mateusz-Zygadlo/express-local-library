const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('coolUsers', { title: 'You\'re so good' });
});

module.exports = router;