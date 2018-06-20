var express = require('express');
var router = express.Router();
var User = require("../model/user")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* save user */
router.post('/saveUser', function(req, res) {
  if(req && !req.body){
    return res.status(403).json({msg: "Please povide proper input"})
  }
  var userObj = new User(req.body)

  userObj.save(function(err, data){
    if(err){
      res.status(403).json({msg: "Something went wrong  "})
    } else {
      res.status(200).json({msg: "User record saved succesfully"})
    }
  })
});

/* Get User List */
router.get('/getUserList', function(req, res, next) {
  User.find({}, function(err, results){
    if(err){
      res.status(403).json({msg: "Something went wrong  "})
    } else {
      res.status(200).json({msg: "User fetched saved succesfully", data: results})
    }
  })
});

module.exports = router;
