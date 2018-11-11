function Person(firstName, lastName) {
  console.log(this);
  this.firstName = firstName;
  console.log(this);
  this.lastName = lastName;
  console.log(this);
  
  // return this; So note that there is no return statement, so this is returned automatically when new object is constructed
}

const person = new Person("Jane", "Doe");
console.log(person)
