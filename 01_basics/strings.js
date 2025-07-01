const name = "jose"
const numberCount = 60


console.log(`hello i am ${name} my count is ${numberCount}!`);

const gameName = new String('i am abhsihek');

console.log(gameName[0])

console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('a'))

const newString = gameName.substring(0,5)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newestString = "     abhishek    "
console.log(newestString.trim())
console.log(newestString)

const url = "abhishek%20solanki.com"

console.log(url.replace('%20','-'))

console.log(gameName.split(' '));