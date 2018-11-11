"use strict";

// Part 1
function func() {
  console.log(this === undefined);
}

func();

// Part 2
// use strict prevents us to create global properties accidentally
// the capita P in Person is a hint

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// use new operator
const person = new Person("Jane", "Doe");
console.log(person);
console.log(global.firstName);
console.log(global.lastName);
console.log(person.firstName)
console.log(person.lastName)

