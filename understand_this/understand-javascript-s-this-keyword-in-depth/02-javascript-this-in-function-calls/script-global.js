// "use strict";

// Part 1
function func() {
  console.log(this === undefined);
}

func();

// Part 2
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const person = Person("Jane", "Doe");
console.log(person);
//surprisingly this global. works
console.log(global.firstName); 
console.log(global.lastName);
