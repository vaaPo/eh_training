function Person(firstName, lastName) {
  console.log(this);
  this.firstName = firstName;
  console.log(this);
  this.lastName = lastName;
  console.log(this);
  
  return null;  // has no impact, 
}

const person = new Person("Jane", "Doe");
console.log(person)
