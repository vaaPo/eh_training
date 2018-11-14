var express = require('express')
var app = express()
var engines = require('consolidate')

var fs = require('fs')
var _ = require('lodash')
var users = []
var pug = require('pug')
var hbs = require('handlebars')


fs.readFile('users.json', {
  encoding: 'utf8'
}, function (err, data) {
  if (err) throw err

  JSON.parse(data).forEach(function (user) {
    user.name.full = _.startCase(user.name.first + ' ' + user.name.last)
    users.push(user)
  })

})

// no template engine
/**
app.get('/', function (req, res) {
  var buffer = ''

  users.forEach(function (user) {
    buffer += '<a href="/' + user.username + '">' + user.name.full + '</a><br>'
  })
  res.send(buffer)
})
 */


//app.set('view engine','jade');    // lets see if jade still works https://expressjs.com/en/guide/using-template-engines.html

// handlebars template
/**
app.engine('hbs', engines.handlebars);
console.log('hbs magic');

app.set('views', './views');
console.log('views');

app.set('view engine', 'hbs');         // lets see if hbs works
console.log('view engine hbs');

app.get('/', function (req, res) {
  res.render = ('index.hbs', {
    users: users
  })
  console.log('rendering hbs')
})
 */

// pug template

//app.engine('pug', engines.pug);
app.set('views','./views');
app.set('view engine','pug');    // lets see if pug 
app.get('/', function (req, res) {
    res.render=('index.pug', {users:users})
});



app.get('/', function (req, res) {
  //  res.render=('index', {users:users})
  //  res.render=('index.pug', {users:users})
  res.render = ('index.hbs', {
    users: users
  })
})

app.get('/:username', function (req, res) {
  var username = req.params.username
  res.send(username)
})

// TODO why these calls are having so minimal set of parameters, so they are too easy to omit, all console.logs could be declaratively dynamic!
var server = app.listen(port = 4000, hostname = 'localhost', callback = function () {
  console.log('Server running at http://localhost:' + server.address().port);
  console.log('         listen port              : ' + server.address().port);
  console.log('         listen address           : ' + server.address().address);

})