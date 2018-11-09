
function House(color){
    this.color=color
}
const myHouse=new House('white')
console.log(myHouse)

const building={
    set buildingColor(color){
        this.color=color
    }
}

const myBuild = Object.create(building)

//    building('blue')
console.log(myBuild)
console.log(myBuild.buildingColor='green')
console.log(myBuild)
// no OOLO objects linkking to Objects, no worry about functions


