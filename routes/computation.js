var express = require('express');
var router = express.Router();
var rand1 = Math.floor(Math.random()*100)
var rand2= Math.random()
var val1="Math.pow() applied to "+ rand1 + " is "+ Math.pow(rand1,rand1)
var val2="Math.sign()  applied to "+ rand2 + " is "+ Math.sign(rand2)
var val3= "Math.tanh() applied to "+ rand1 + " is "+ Math.tanh(rand1);
var val4= "Math.trunc() applied to "+ rand1 + " is "+ Math.trunc(rand1);
console.log(val1)


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('computation', { title:'Nikhil Varma Bonus',value1: val1, value2:val2, value3:val3, value4:val4 });
});



module.exports = router;