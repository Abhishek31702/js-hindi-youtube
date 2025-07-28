// // function reverseString(str) {
// //     let splitString = str.split("")
// //     let stringReverse = splitString.reverse()
// //     let finalString = stringReverse.join('') 
// //     return finalString
// // }

// // const helloString = "Hello"

// // const finalReversed = reverseString(helloString)
// // console.log(finalReversed)

// function isPalindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;
    
// }

// console.log(isPalindrome('adam'))

// function longestWord(sentence) {
//     const sentenceDog = sentence.split(' ')

//  let comparedValue = "";

// sentenceDog.forEach((item)=>{
//     console.log(item);
// })
    

    
// }

// longestWord("The quick brown fox jumps over the lazy dog")


// function removeDuplicates(arr) {
//     const arrOne = new Set (arr) 
    
// }

// const arrOne = [1,2,2,3,4,4,5]

// console.log(removeDuplicates)


// async function sayHello() {
//   return "Hello!";
// }

// const knowType = sayHello().then(result => console.log(result));  // Output: Hello!

// console.log(typeof(knowType))

// function add(a,b) {
//   return a + b;
// }

// console.log(add(1,2))


// const addTwo = (c, d) => c + d;

// console.log(addTwo(4,5))


// 

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json()) // convert to JSON
//   .then(data => console.log(data))   // show the data
//   .catch(error => console.log("Error:", error));


function longestWord(sentence) {

    console.log(sentence.split(' '))
    let longestWordFound = ''
    
    for (const words of sentence) {
        console.log(words)
    }
}

longestWord("The quick brown fox jumps over the lazy dog")