var express = require('express');
var router = express.Router();
const joi = require("joi");

const { db } = require("../services/db.js");

router.get('/signin', function(req, res, next) {
  res.render('users/signin');
});
const signinschema = joi.object({
  email: joi.string().email().max(50).required(),
  password: joi.string().min(3).max(50).required()
});

router.post('/signin', function(req, res, next) {
  const result = signinschema.validate(req.body);
  if (result.error){
    res.sendStatus(400);
  }

  const email = request.body.email;
  const password = request.body.password;
  
  const stmt = db.prepare("SELECT * FROM users WHERE email = ? AND password = ?");
  const dbresult=stmt.get(email, password);
  console.log("DB kaže", dbResult);

  res.render('users/signin');
});
module.exports = router;
