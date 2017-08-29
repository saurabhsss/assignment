var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var oneDay = 24*60*60*1000;
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use('/form',express.static(__dirname+'/index.html'));

app.use('/assets/form',express.static(__dirname+'/index.html'));

app.post('/submit',urlencodedParser,function (req,res) {
    if (!req.body) return res.sendStatus(404)
    var second_date = new Date();

    var dob=req.body.DOB;
    var f=new Date(dob);
    var diff = Math.round(Math.abs((second_date.getTime()-f.getTime())/(oneDay)));
    res.send("hey "+req.body.name +' you lived on this planet for '+ diff +' days');
})
app.listen(3010,'127.0.0.1');