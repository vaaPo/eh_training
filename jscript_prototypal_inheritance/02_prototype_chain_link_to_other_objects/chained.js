const obj={
    firstName:'Tyler'
}
const protoObj={
    lastName:'Clark'
}
Object.setPrototypeOf(obj,protoObj)
console.log(obj.lastName)