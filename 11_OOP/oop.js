
const userDetails = {
  username : "abhishek",
  getUser : function () {
    // console.log("hello");
    // console.log(`Username: ${this.username}`)
    console.log(this);
  }
}
// console.log(userDetails.username);
// console.log(userDetails.getUser());


function User(username,loginCount,isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  return this
}

let userOne = User("abhshek",44,true);
let userTwo = User("solanki",55,false);
console.log(userOne);