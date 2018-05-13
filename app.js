var express = require('express');
var path = require('path');

var app = express();

app.use('/',express.static(path.join(__dirname,"public")));

app.get('/index.html',function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
})

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
})

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
})

app.listen(8888, function(req,res){
    console.log('Listening on port 8888...');
});


