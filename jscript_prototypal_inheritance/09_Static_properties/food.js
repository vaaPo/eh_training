class Food {
    isHealthy() {
        return true
    }
}

class Drink {
    static isHealthy() { // static keyword assigns to Class 
        return true // not to prototype of the class
    }
}

function Bread() {
    //
}
Bread.isHealthy = () => true // assign property "function which returns true"

class Meal {
    static isHealthy() { // static keyword assigns to Class 
        return true // not to prototype of the class
    }
    static canBeEaten() { // static keyword assigns to Class 
        return Meal.isHealthy()
    }
}

class Dish {
    static isHealthy() { // static keyword assigns to Class 
        return true // not to prototype of the class
    }
    static canBeEaten() { // static keyword assigns to Class 
        return this.isHealthy() // this is referencing Dish
    }
}

console.log(Dish.isHealthy())
console.log(Meal.isHealthy())
console.log(Bread.isHealthy())
console.log(Drink.isHealthy())

//this wont compute because
// isHealthy is written to Food's prototype, its not in the Class
console.log(Food.isHealthy())