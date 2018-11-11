node ./script.js
node ./script-return-other-person.js    // the newly-created object that we previously initialized is lost because it's out of scope and nobody has a reference to it anymore
node ./script-return_null.js            // if we try to return anything else than an object, the JavaScript engine will simply ignore the value we provided and return the newly-created object instead

During development developer could return proxy, see course: 
https://egghead.io/lessons/javascript-use-es6-proxies
It's not a very common use case to return a different object from its constructor function, 
but it might make sense in certain scenarios. For example, in a development environment, 
we could wrap the returned object in a proxy and alert developers whenever they use that object incorrectly.
