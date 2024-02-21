const express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('Start Server');
});

app.get('/form/',function(req,res){
    res.sendFile(__dirname+'/form.html');
});

var bodyParser = require('body-parser');
var urlEncoded = bodyParser.urlencoded({extended:false});

app.post('/submitform/',urlEncoded,function(req,res){
    res.send("Data submitted: "+req.body.email+" , "+req.body.password);
});

var server = app.listen(3355,function(){
    var host = server.address().address;
    var port = server.address().port;
});
