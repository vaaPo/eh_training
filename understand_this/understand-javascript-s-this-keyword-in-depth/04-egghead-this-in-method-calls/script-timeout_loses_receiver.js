//Part 2
 const person = {
   firstName: "John",
   sayHi() {
       console.log(`Hi, my name is ${this.firstName}!`);
   }
 };

 // we are not in strict mode "use strict"
 // having plain function call loses receiver
 //setTimeout will call our function with this set to the global object, which is probably not what we intended here. 
 
 setTimeout(person.sayHi, 1000);
 