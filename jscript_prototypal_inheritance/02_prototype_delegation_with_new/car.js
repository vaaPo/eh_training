function Car(make) {
    this.make = make
    this.wheels = 1
}
Car.prototype.color='black'
Car.prototype.wheels=4

console.log(Car.prototype)
const myCar =new Car('Ford')
console.log(myCar.color)
