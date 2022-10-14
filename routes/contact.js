var express = require('express');
var router = express.Router();


router.get('/email', function(req, res, next) {
  res.send("aaaaaa");
});

module.exports = router;