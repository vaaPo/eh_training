function sayHi() {
  console.log(`Hi, my name is ${this.firstName}!`);
}

const person = {
  firstName: "Jane",
  lastName: "Doe"
};

sayHi.call(person);