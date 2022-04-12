const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');


router.post('/createuser',[
    body('email','Enter a valid Email').isEmail(),
    body('name','Enter a valid Name').isLength({ min: 3 }),
    body('password','Enter a valid Password').isLength({ min: 5 }),
],(req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
      }).then(user => res.json(user));
    
})

module.exports = router