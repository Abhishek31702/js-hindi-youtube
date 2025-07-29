// for of


// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     // console.log(num);
    
// }


// const string = "helloworld"

// for (const element of string) {
//     // console.log(element);
    
// }

// const greeting = "hello world"
// for (const greet of greeting) {
//     console.log(greet)
// }


const map = new Map()
map.set('IND','INDIA')
map.set('FR','FRANCE')

// console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value)
}
