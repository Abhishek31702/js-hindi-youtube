// const faceUser = new Object()

const faceUser = {}

faceUser.id = "45"
faceUser.name = "ram"

// console.log(faceUser);

const regularUser = {
    name : "jose",
    function : {
        innerfunction : {
            firstName : "peter"
        }
    }

}

// console.log(regularUser.function.innerfunction)


const objectOne = {1:"A",2:"B"}
const objectTwo = {3:"C",4:"D"}

// const objectThree = {objectOne,objectTwo}

// const objectThree = Object.assign(objectOne,objectTwo)
// console.log(objectOne)
const objectThree = {...objectOne,...objectTwo}

// console.log(objectThree)
// console.log(objectOne)


const user = [
    {
        id : 1,
        email : "nomail@gmail.com"
    },
    {
        id : 1,
        email : "nomail@gmail.com"
    },
    {
        id : 1,
        email : "nomail@gmail.com"
    },
    {
        id : 1,
        email : "nomail@gmail.com"
    }
]

console.log(user[1])

console.log(faceUser)


console.log(Object.keys(faceUser))
console.log(Object.values(faceUser))
console.log(Object.entries(faceUser))

// 5 MIN PENDING