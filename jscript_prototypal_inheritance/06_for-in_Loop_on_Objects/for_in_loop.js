const obj={
    firstName:'Tyle',
    lastName:'Clark'
}
const protoObj={
    hair: 'brown'
}
Object.setPrototypeOf(obj,protoObj)

let n=0
for (let property in obj){
    n++
}
console.log(n)

let x=0
for (let property in obj){
    if (obj.hasOwnProperty(property)){
        x++
    }
}
console.log(x)


const obj2={
    firstName:'Tyle',
    lastName:'Clark'
}
const protoObj2={
    lastName: 'Pimpom'
}
Object.setPrototypeOf(obj2,protoObj2)
let y=0
for (let property in obj2){
    y++
}
console.log(y)
