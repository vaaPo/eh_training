function Car(make){
    this.make=make
}

const myCar=new Car('Ford')
console.log(myCar instanceof Car)

function Boat(engine){
    this.engine=engine
}
Object.setPrototypeOf(Boat.prototype, Car.prototype)
const myCar2=new Boat('Ford')
console.log(myCar2 instanceof Car) //hox hox
console.log(myCar2 instanceof Boat)

console.log(myCar)
console.log(myCar2)

class Ship {
    constructor(engine){
        this.engine=engine
    }
}
class Lorry {
    constructor(make) {
        this.make=make
    }
}
Object.setPrototypeOf(Ship.prototype, Lorry.prototype)
const myCar3=new Ship('Ford')
console.log(myCar3)
console.log(myCar3 instanceof Ship)
console.log(myCar3 instanceof Lorry)
console.log(myCar3 instanceof Boat)
console.log(myCar3 instanceof Car)



