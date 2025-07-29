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


// function longestWord(sentence) {

//     console.log(sentence.split(' '))
//     let longestWordFound = ''
    
//     for (const words of sentence) {
//         console.log(words)
//     }
// }

// longestWord("The quick brown fox jumps over the lazy dog")


// console.log("Start");

// setTimeout(() => {
//   console.log("This runs after 2 seconds");
// }, 2000);

// console.log("End");

// function greet (name,callback){
//     console.log(`hello ${name}`)
//     callback()
// }

// function sayBye(){
//     console.log("bye");
    
// }

// greet('abhishek',sayBye)


// setTimeout(() => {
//     console.log("10")
// },1000);
// setTimeout(() => {
//     console.log("9")
// },2000);

// function downloadFile(fileName, callback) {
//   console.log(`Downloading ${fileName}...`);

//   setTimeout(() => {
//     console.log(`${fileName} downloaded.`);
//     callback();
//   }, 2000);
// }

// function processFile() {
//   console.log("Processing the downloaded file...");
// }

// // Call the functions
// downloadFile("file1.txt", processFile);
