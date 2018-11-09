const parent={
    hair: 'brown',
    heightInInches(){
        return this.height*12
    }
}
const child=Object.create(parent)
child.height=6
console.log(parent)
console.log(child)
console.log(child.heightInInches())

parent.heightInInches=()=>true
console.log(parent)
console.log(child)
console.log(child.heightInInches())

// but with assign
const parent2={
    hair: 'brown',
    heightInInches(){
        return this.height*12
    }
}
console.log(parent2)
const child2=Object.assign({height:6}, parent2) //copies parent2 to child2

console.log(parent2)
console.log(child2)
console.log(child2.heightInInches())

parent2.heightInInches=()=>true //doesnt touch child2
console.log(child2.heightInInches())
console.log(parent2)
console.log(child2)



