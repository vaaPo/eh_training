'use strict'        // this code fails due strict in zy.name='paula' 

const foo={
    name:'tyler'
}
const bar={
    lastname:'clark'
}
Object.setPrototypeOf(bar,foo)
console.log(bar)
console.log(foo)
console.log(foo.name)
console.log(foo.lastname)
console.log(bar.name)
console.log(bar.lastname)

bar.name='james'
console.log(bar)
console.log(foo)
console.log(foo.name)
console.log(foo.lastname)
console.log(bar.name)
console.log(bar.lastname)

//const xyz={
    //
//}

const xyz={
    set name(){
        this.currentName=name
    }
}

//Object.defineProperty(xyz,'name',{
//    value: 'tyler',
//    writable: false
//})

const zy={
    lastname:'clark'
}
Object.setPrototypeOf(zy,xyz)
zy.name='paula' //doesnt change due writable is false
console.log(zy)
console.log(xyz)
console.log(xyz.name)
console.log(xyz.lastname)
console.log(zy.name) // this is tyler because writable is false
console.log(zy.lastname)




