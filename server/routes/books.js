var express = require('express');
const bodyParser = require("body-parser")
var router = express.Router();
const Book = require("../models/Books")

/* GET users listing. */
router.post('/book', function(req, res, next) {

    Book.create({
        name: req.body.name,
        author: req.body.author,
        pages: req.body.pages
    },(err,ok)=>{
        if(err) throw(err);
        return res.send("ok")
    })

    
});

module.exports = router;
