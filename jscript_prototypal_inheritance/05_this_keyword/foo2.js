'use strict'
function Foo(name){
    this.name=name
}
Foo.prototype.myName=function(){
    return this.name
}

function Bar(name){
    Foo.call(this,name)
}
Bar.prototype=Object.create(Foo.prototype)

const a=new Bar('tyler')

console.log(a.myName())
console.log(a)


