// singleton
//object.create
// object liberals

const mySym = Symbol("key1")

const jsUser = {
    name : "Abhishek",
    "full name" : "abhsiehk soalanki",
    [mySym] : "mykey1",
    age : 22,
    location : "Mumbai",
    email : "abhishek123@gmail.com",
    isLoggedIn : false,
    lastLoginDate : ["monday","friday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

jsUser.email = "avi@gmail.com"
// Object.freeze(jsUser)

jsUser.email = "abhsihek@andesoft.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello world");
}

jsUser.greetingTwo = function(){
    console.log(`Hello world, ${this.name}`);
}


console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());