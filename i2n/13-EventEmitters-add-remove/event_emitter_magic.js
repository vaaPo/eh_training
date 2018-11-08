var sayHello=function(){console.log('Hello to you!')}
var sayGoodbye=function(){console.log('Goodbye then!')}
var EventEmitter=require('events').EventEmitter;
emitter=new EventEmitter();
emitter.on('hello',sayHello)
emitter.on('goodbye',sayGoodbye)
emitter.emit('hello')
emitter.emit('goodbye')
global.emitter._events
emitter.on('hello',sayHello)
emitter.on('hello',sayHello)
global.emitter._events
global.emitter._events.hello.toString()
emitter.removeListener('hello', sayHello)
global.emitter._events
emitter.removeAllListeners('hello')
global.emitter._events
emitter.emit('goodbye')
emitter.emit('hello')
global.emitter._events
emitter.setMaxListeners(0)
