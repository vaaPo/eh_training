function sayHi(){
  console.log(`Hi, my name is ${this.firstName}!`)
}
const person={
  firstName: "Simo"
}
console.log(person)
person.sayHi=sayHi
console.log(person)
person.sayHi()

foo.bar.person.sayHi()

