Important to note that a hard binding can be overwritten by invoking the function with new keyword.
So in other words the order of precedence of this is: 
    implicit, 
    explicit (call, apply), 
    hard binding 
    and the one that overrules them all is new.

//No binding, reference is lost
$$node script.js

//HARD binding
$$node script-bind.js


