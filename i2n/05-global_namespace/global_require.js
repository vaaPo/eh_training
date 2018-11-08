global
var foo='this is test'
global
var modFoo = require('./globalFoo.js');
modFoo.setFoo(42)
modFoo.returnFoo()
global
