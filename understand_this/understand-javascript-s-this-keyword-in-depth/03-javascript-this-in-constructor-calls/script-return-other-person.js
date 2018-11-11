function Person(firstName, lastName) {
  console.log(this);
  this.firstName = firstName;
  console.log(this);
  this.lastName = lastName;
  console.log(this);
  
  // return trickery
  return {
    firstName:"John",
    lastName:"Turbo"
  }
}

const person = new Person("Jane", "Doe");
console.log(person)
// the newly created object is lost, out of scope and no reference in to it.


