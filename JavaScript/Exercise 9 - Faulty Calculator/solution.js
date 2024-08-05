let random_num = Math.random()


let a = prompt("Enter your 1st number")
let b = prompt("Enter your 2nd number")
let opr = prompt("Enter the operation")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

console.log(random_num)

if (random_num > 0.1){
    // perform correct calcultion
   alert(`The resullt is ${eval(`${a} ${opr} ${b}`)}`)
} 
else{``
    // perform wrong calculation
   opr = obj[opr]
   alert(`The resullt is ${eval(`${a} ${opr} ${b}`)}`)
}