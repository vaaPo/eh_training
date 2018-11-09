class Vehicle{
    isLegal(){
        return true
    }
}
class Car extends Vehicle {
    canBeUsed(){
        return this.isLegal()
    }
}

console.log(typeof Vehicle)
console.log(typeof Vehicle.prototype)

console.log(new Car().canBeUsed())

//compare - is this syntactic sugar due ES6?

const myCar=new Car()
console.log(Object.getPrototypeOf(myCar)===Car.prototype)

console.log(
    Object.getPrototypeOf(Car.prototype)===Vehicle.prototype
)

console.log(Vehicle.prototype.isLegal())
console.log(myCar.canBeUsed())
console.log(myCar.isLegal())
console.log(Vehicle.isLegal())

//classes use the prototype delegation model. 
//That prototype's going to be in an object.

