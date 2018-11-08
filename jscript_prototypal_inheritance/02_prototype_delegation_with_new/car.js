function Car(make) {
    this.make = make
    this.wheels = 1
}
Car.wheels=5
Car.prototype.color='black'
Car.prototype.wheels=4

console.log(Car.prototype)
const myCar =new Car('Ford')
console.log(myCar.color)
console.log(myCar.wheels)
console.log(Car.wheels)
console.log(Car.prototype.wheels)
