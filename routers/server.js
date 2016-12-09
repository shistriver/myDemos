/**
 * Created by xinyi on 2016/12/9.
 */

var express = require('express');
var router = express.Router();
var app = express();

router.get('/', function(req,res,next){
    res.render('index')
});

module.exports = router;