// function addTwoNumber(num1,num2) {  //parameters
//     console.log(num1 + num2);

// const { use } = require("react");

// }
function addTwoNumber(num1,num2) {  //parameters
    // let result = num1 + num2
    // return result
    // console.log("this function will not execute as it is after return")
    return num1 + num2
}

const result = addTwoNumber(5,6); // arguments

// console.log("Result ",result)


function userLogin (abhishek="avi") {
    if(!abhishek){
        console.log("no user found")
        return
    }
    return `${abhishek} has logged in`
}

userLogin('abhishek');

// console.log(userLogin("abhishek"))

// console.log(userLogin())

function calculatenumber(val1,val2,...num1){
    return num1
}

// console.log(calculatenumber(5,8,9))


const user = {
    username: "abc",
    price: 123,
}

function handleObject(anyObject){
    console.log(`user is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)

// rewatch again fr doubts