var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/books', function(req, res, next) {
  res.render('books/index', { title: 'Express' });
});

router.get('/books/new', function(req, res, next) {
  res.render('books/new');
});

module.exports = router;
