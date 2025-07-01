// primitive
// string,NUMBER,BOOLEAN,null,undefined , bigint,symbol


const id = Symbol("123")
const idTwo = Symbol("123")

// console.log(id === idTwo)
let myMoney = null

// let bignumber = 2345n;

// non primitive
// array , object , function

const friends = ["john","don","jose"]


let myObject = {
    name: "abhishek",
    age : 22,
}

const myFunction = function() {
    // console.log("hello world")
}

// console.log(typeof bignumber)

// console.log (typeof myFunction)
// console.log (typeof friends)
// console.log (typeof myObject)

// ********************************************

//stack (primitive) & heap (non-primitive)

let myyoutubename = "abhishek"
let anothername = myyoutubename;
anothername = "rahul"

// console.log(anothername)
// console.log(myyoutubename)

let userOne = {
    email :"abhsihek31@gmail.com",
    number : "23",

}
let userTwo = userOne

userTwo.email = "raj123@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
