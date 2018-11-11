$$ node script.js                       //sayHi.apply(person);
Hi, my name is Jane!

$$ node script-call.js                  //sayHi.call(person);
Hi, my name is Jane!

$$ node apply_vs_call.js
[ 20, 30, 40 ]
[ 20, 30, 40 ]
[ 20, 30, 40 ]


/**
*  call starts with the 'C', and therefore wants a 'comma' separated list. 
*  apply starts with an 'A', and therefore wants an 'array'. 
* if you are using call or apply outside of strict mode. 
* If you set the this arg to null or undefined, 
* the JavaScript engine will ignore that value and use the global object instead.
* In strict mode, that doesn't happen. I recommend you write all of your code in strict mode.
*/
$$$ node apply_vs_call_strict_mode.js
func tells now is this===global : false             // this is good, use strict
func tells now is this===global : false
func tells now is this===global : false
func tells now is this===global : false

$$$ node apply_vs_call_not_strict.js
not strict func tells now is this===global : true   // this is dangerous, this refers now to global
not strict func tells now is this===global : true
not strict func tells now is this===global : true
not strict func tells now is this===global : true