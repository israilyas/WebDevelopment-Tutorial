
let numbers = []
var sum=0
for(let i=1; i<=5; i++){
    let num = prompt("Enter a number! ")
    num = parseInt(num)
    numbers.push(num)
    sum = sum+num
}
console.log(numbers)
console.log(sum)