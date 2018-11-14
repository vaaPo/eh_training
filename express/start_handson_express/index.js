var express=require('express');
var app=express();

app.get('/', function(req, res) {
    res.send('Hello, world!!!!');
});

app.get('/yo', function(req, res) {
    res.send('Yo!!!!');
});

var server=app.listen(port=3000, hostname='localhost',callback=function(){
    console.log('listen port              : '+ server.address().port);
    console.log('listen backlog           : '+ server.address().backlog);   // TODO what is this
    console.log('listen address           : '+ server.address().address);
//    console.log('listen callback function : '+ server.address().callback.callback);
});
