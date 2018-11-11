// Part 1
class Person {
  constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
  }
  sayHi() {
    console.log(this)
    console.log(`Hi, my name is ${this.firstName} ${this.lastName}!`);
  }
}

const person = new Person("John", "Doe");
console.log(person.firstName)

person.sayHi();
console.log(person.firstName)

const greet = person.sayHi;
console.log(greet)

const bark=person.sayHi.bind(person);
console.log(bark)
bark();
greet();
//The this argument within sayHi() is now set to undefined. This is because class bodies are implicitly in strict mode. We're invoking greet() as an ordinary function. We've seen that no autobinding is happening, but we could manually call bind() to tie this sayHi() function to person.

