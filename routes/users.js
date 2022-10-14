var express = require('express');
var router = express.Router();
const finduserService = require("../service/userService")
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/finduser', function (req, res) {
  console.log(req.query)
  const name = finduserService.finduser(req.query.id);
  res.send(name)
})

module.exports = router;
