let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())

let myCreateddate = new Date(2023,6,31,5,7)
// console.log(myCreateddate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myCreateddate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth());
console.log(newDate.getDay())

// `${newDate.getMonth()} months are complete in 2025`
