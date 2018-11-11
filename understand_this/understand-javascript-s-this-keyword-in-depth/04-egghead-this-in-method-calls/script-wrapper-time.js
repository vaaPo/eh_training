//Part 2
const person = {
  firstName: "John",
  sayHi() {
    console.log(`Hi, my name is ${this.firstName}!`);
  }
};

// we are not in strict mode "use strict"
// having plain function call loses receiver

setTimeout(function () {
  person.sayHi();
}, 1000);

//One solution to this problem is to add a wrapper function. That way, person.sayHi is still invoked as a method, and doesn't lose its intended receiver.
