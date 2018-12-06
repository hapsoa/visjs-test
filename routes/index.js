var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/network-test', function(req, res, next) {
    res.render('basic-network-example');
});

router.get('/side-info', function(req, res, next) {
    res.render('side-info');
});

module.exports = router;
