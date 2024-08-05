console.log("Solution.js is initialzed")

// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children
console.log(boxes)

function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()*255)
    let val2 = Math.ceil(0 + Math.random()*255)
    let val3 = Math.ceil(0 + Math.random()*255)
    return `rgb(${val1}, ${val2}, ${val3})`

}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})