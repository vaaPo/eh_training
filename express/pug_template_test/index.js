var express = require('express')
var app = express()

app.set('view engine', 'pug')
app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })
  var server = app.listen(port = 4000, hostname = 'localhost', callback = function () {
    console.log('Server running at http://localhost:' + server.address().port);
    console.log('         listen port              : ' + server.address().port);
    console.log('         listen address           : ' + server.address().address);
  
  })
