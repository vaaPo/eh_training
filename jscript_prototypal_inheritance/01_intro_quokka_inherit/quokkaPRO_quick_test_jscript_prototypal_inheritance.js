const obj={
    firstName: 'Tyler'
}
function Foo(){
    //..
}
const a=new Foo()
const house={
    set houseColor(color){
        this.color=color
    }
}
const myHouse=0
const myHouse2=Object.create(house)

const human={
    type:'human'
}

const createUser=(character)=>({
    ...character,
    type:'human'
})

const tyler={
    hair:'brown',
    height:'187 cm'
}
const sally={
    hair:'blonde',
    height:'168 cm'
}

const tyler_user=createUser({
    hair:'brown',
    height:'187 cm'
})

const sally_user=createUser({
    hair:'blonde',
    height:'168 cm'
})


Object.setPrototypeOf(tyler,human)
Object.setPrototypeOf(sally,human)
console.log(obj.toString())
console.log(obj.firstName)
console.log(Foo.prototype.constructor)
console.log(a.constructor===Foo)
console.log(myHouse.color)
console.log(myHouse2.color='white')
console.log(myHouse2)
console.log(tyler.type)
console.log(tyler_user.type)
console.log(tyler_user.hair)





