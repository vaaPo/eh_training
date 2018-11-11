const person = {
  firstName: "John",
  sayHi() {
      console.log(`Hi, my name is ${this.firstName}!`);
  }
};

setTimeout(person.sayHi.bind(person), 1000);    //bind 
/**
 * The Function.prototype.bind() method lets us permanently tie 
 * a function's this argument to a specific value. 
 * It creates a new bound function that calls the original function 
 * with the provided this argument, no matter how that bound function is called.
 * 
 */

const greet = person.sayHi.bind(person)
greet();
/**Even if we extract our bound function into a variable, 
 * and invoke that variable as a function, the this argument is still tied to person. 
 * Once the function is bound, it's this argument can no longer be changed, 
 * not even by call or apply.
 * 
 */

 // the bind is not changeable
 const otherPerson={
   firstName:"Lisa"
 }
 greet.call(otherPerson)
 console.log(otherPerson)
 console.log(person)
 console.log(greet)

