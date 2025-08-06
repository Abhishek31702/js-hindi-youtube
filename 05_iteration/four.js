// higher order


const coding = ['js','python','java',"ruby"]

// coding.forEach((item) => {
//     console.log(item)
// })

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

const myCoding = [
    {
        languageName : "javascript",
        languageFilename : "js"
    },
    {
        languageName : "python",
        languageFilename : "py"
    },
    {
        languageName : "c++",
        languageFilename : "cpp"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFilename)
})