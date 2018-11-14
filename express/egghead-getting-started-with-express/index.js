var express = require('express');
var app = express();
var fs = require('fs');
var engines = require('consolidate');
var JSONStream = require('JSONStream');
var bodyParser = require('body-parser');

var User = require('./db').User;


app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');

app.use('/profilepics', express.static('images'));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/favicon.ico', function (req, res) {
  res.end();
});

app.get('/', function (req, res) {
  User.find({}, function (err, users) {
    if (err) console.error(err);
    res.render('index', {users: users});
  });
});

app.get('*.json', function (req, res) {
  res.download('./users/' + req.path, 'virus.exe');
});

app.get('/data/:username', function (req, res) {
  var username = req.params.username;
  var readable = fs.createReadStream('./users/' + username + '.json');
  readable.pipe(res);
});

app.get('/users/by/:gender', function (req, res) {
  var gender = req.params.gender;
  var readable = fs.createReadStream('users.json');

  readable
    .pipe(JSONStream.parse('*', function (user) {
      if (user.gender === gender) return user.name;
    }))
    .pipe(JSONStream.stringify('[\n  ', ',\n  ', '\n]\n'))
    .pipe(res);
});

app.get('/error/:username', function (req, res) {
  res.status(404).send('No user named ' + req.params.username + ' found');
});

var userRouter = require('./username');
app.use('/:username', userRouter);

// TODO why these calls are having so minimal set of parameters, so they are too easy to omit, all console.logs could be declaratively dynamic!
var server = app.listen(port=3000, hostname='localhost', callback=function () {
  console.log('Server running at http://localhost:' + server.address().port);
  console.log('         listen port              : '+ server.address().port);
  console.log('         listen address           : '+ server.address().address);

});
