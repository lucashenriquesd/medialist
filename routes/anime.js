var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('list_anime', { title: 'Express', animes: ['Naruto', 'Bleach'] });
});

module.exports = router;
