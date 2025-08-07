let greyButton = document.querySelector("#grey")
let whiteButton = document.querySelector("#white")
let blueButton = document.querySelector("#blue")
let yellowButton = document.querySelector("#yellow")

let body = document.querySelector("body")

greyButton.addEventListener("click",function(){
    body.style.background = "grey"
})

whiteButton.addEventListener("click",function(){
    body.style.background = "white"
})

blueButton.addEventListener("click",function(){
    body.style.background = "blue"
})

yellowButton.addEventListener("click",function(){
    body.style.background = "yellow"
})