var express = require('express')
var app = express()

var fs = require('fs')
var _ = require('lodash')
var users = []

fs.readFile('users.json', {encoding: 'utf8'}, function (err, data) {
  if (err) throw err

  JSON.parse(data).forEach(function (user) {
    user.name.full = _.startCase(user.name.first + ' ' + user.name.last)
    users.push(user)
  })

})

app.get('/', function (req, res) {
  var buffer = ''

  users.forEach(function (user) {
    buffer += '<a href="/' + user.username + '">' + user.name.full + '</a><br>'
  })
  res.send(buffer)
})

app.get(/big.*/, function (req, res, next) {
  console.log('BIG USER ACCESS')
  next()
})

app.get(/.*dog.*/, function (req, res, next) {
  console.log('DOGS GO WOOF')
  next()
})

app.get('/:username', function (req, res) {
  var username = req.params.username
  res.send(username)
})

// TODO why these calls are having so minimal set of parameters, so they are too easy to omit, all console.logs could be declaratively dynamic!
var server = app.listen(port=3000, hostname='localhost', callback=function () {
    console.log('Server running at http://localhost:' + server.address().port);
    console.log('         listen port              : '+ server.address().port);
    console.log('         listen address           : '+ server.address().address);
  
  })
