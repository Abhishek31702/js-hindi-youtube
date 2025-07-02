const marvel = ["thor","hulk","sentry"]
const dc = ["batman","robin","scarface"]

// marvel.push(dc)

// console.log(marvel)
// console.log(marvel[3][1])

const allHeros = marvel.concat(dc)
// console.log(allHeros);

const messedArray = [1,2,[3,4,5],[6,7,[8,9]]]

const fixArray = messedArray.flat(2)
console.log(fixArray);

console.log(Array.isArray("abhishek"));
console.log(Array.from("abhishek"));

console.log(Array.from({name:"abhishek"})); //interesting concept

let rollno1 = 19
let rollno2 = 20
let rollno3 = 40

console.log(Array.of(rollno1,rollno2,rollno3))