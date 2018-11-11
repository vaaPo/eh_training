//Part 2
 const person = {
   firstName: "John",
   sayHi() {
       console.log(`Hi, my name is ${this.firstName}!`);
   }
 };

 setTimeout(person.sayHi.bind(person), 1000);
 //bind method, which allows us to tie our this to a specific object. 
 