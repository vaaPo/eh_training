// Part 2

// class 
/**
 * My Node version doesn't support class fields yet, so I'm first going to compile my code using 'Babel', 
 * npm run babel in the terminal. As you can see, the class field has been transformed
 *  into a property assignment in the constructor. 
 * I can now pipe that code into Node. Everything works as intended.
 * 
 *  */

class Person {
   sayHi = () => {
       console.log(`Hi, my name is ${this.firstName} ${this.lastName}!`);
   };

   constructor(firstName, lastName) {
       this.firstName = firstName;
       this.lastName = lastName;
   }
}

const person = new Person("John", "Doe");
const greet = person.sayHi;
greet();