In browser console
this===window           //true

when launching from terminal with 
node
this===global           //true

node ./script-global.js //global
false

node ./script.js        //window is not defined
node ./script-works.js  //module.exports
true

In each of these the this refers to different thing

