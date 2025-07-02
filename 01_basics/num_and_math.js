const score = 100
// console.log(score);

const balance = new Number(200)
// console.log(balance);

// console.log(balance.toFixed(4))

// console.log(balance.toPrecision(2))


const hundred = 100000000000000

// console.log(hundred.toLocaleString('en-IN'))

//*********************maths************************* */

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(5.7))
// console.log(Math.ceil(6.1));
// console.log(Math.floor(8.9))
// console.log(Math.max(1,2,3,4,5))

console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1))+min)

function rollDice() {
  // Generates a number between 1 and 6
  return Math.floor(Math.random() * 6) + 1;
}

// Example usage
console.log("You rolled a", rollDice());
