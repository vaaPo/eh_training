const tyler={
    hair:'brown',
    height:'6 foot',
    type: 'human'
}
const sally={
    hair:'blonde',
    height:'5 foot 4',
    type: 'human'
}

const human={
    type: 'human'
}

const phil={
    hair:'dark',
    hieght:'7 foot'
}

Object.setPrototypeOf(phil,human) //messy assign with setproto..
console.log(sally)
console.log(tyler)
console.log(phil)
console.log(phil.type)

const createUser=(character)=>({
    ...character,
    type: 'human'
})

const paula = createUser({
    hair:'black',
    height:'3 foot'
})

const tina = createUser({
    hair:'black',
    height:'2 foot'
})
console.log(paula)
console.log(tina)
console.log(paula.type)
console.log(tina.type)

// object literals for one
// factory functions for many

const createUserNG=(character, smart=true, alien=false)=>({
    smart,          // because before character, allows to override
    ...character,
    type: 'human',
    alien
})

const john=createUserNG({
    hair:'red',
    height:'10 foot',
    alien: true             // cant override because after 
                            // the ...character in the factory function
})
console.log(john)

const josh=createUserNG({
    smart: 'stupid',
    hair:'red',
    height:'10 foot'
})
console.log(josh)





