function Foo(){
    //..
}
console.log(Foo.prototype.constructor)

const a= new Foo()
console.log(a.constructor===Foo)

Foo.prototype={} 
//anon object

Object.defineProperty(Foo.prototype,'constructor', {
    enumerable: false,
    writable: true,
    configurable: true,
    value:Foo
})
console.log(Foo.prototype.constructor)

const b = new Foo()
console.log(b.constructor===Foo)
console.log(b.constructor===Object)


