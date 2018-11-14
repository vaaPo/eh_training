var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
console.log('view engine handlebars');

app.get('/', function (req, res) {
    res.render('home');
    console.log('rendering / with express-handlebars with views/layouts/main.handlebars and views/home.handlebars')  //views/layouts/main.handlebars
  });


var server = app.listen(port = 4000, hostname = 'localhost', callback = function () {
    console.log('Server running at http://localhost:' + server.address().port);
    console.log('         listen port              : ' + server.address().port);
    console.log('         listen address           : ' + server.address().address);
  
});
