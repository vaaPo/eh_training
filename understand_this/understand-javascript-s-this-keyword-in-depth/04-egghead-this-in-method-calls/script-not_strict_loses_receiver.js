//Part 2
 const person = {
   firstName: "John",
   sayHi() {
       console.log(`Hi, my name is ${this.firstName}!`);
   }
 };

 // we are not in strict mode "use strict"
 // having plain function call loses receiver
 
 const greet = person.sayHi;
 greet();