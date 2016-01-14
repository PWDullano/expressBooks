var express = require('express');
var router = express.Router();
var unirest = require('unirest')
var api_key = process.env.NYT_API_KEY;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Server Side API Calls' });
});

router.get('/books/index', function(req, res, next) {
  res.render('books/index');
});

router.get('/books', function(req, res) {
    unirest.get('http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=' + api_key)
      .end(function (response) {
        console.log(response.body);
      })
})

router.get('/books/show', function(req, res, next) {
  res.render('books/show');
});

router.get('/books/edit', function(req, res, next) {
  res.render('books/edit');
});

router.get('/books/new', function(req, res, next) {
  res.render('books/new');
});

router.get('/books/index', function(req, res, next) {
  res.render('books/index');
});

module.exports = router;
