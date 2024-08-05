// let factorial = 1
// let num = prompt("Enter a number")
// num = Number.parseInt(num)
// for (let i = 1; i <= num; i++) {
//      factorial = factorial*i
// }

// console.log("Factorial calculated using a for loop:", factorial)

// //PROGRAM TO ADD FIRST 'N' NATURAL NUMBERS

// let sum = 0
// let n = prompt("Enter the value of n ")
// n = Number.parseInt(n)

// for(let i=0; i<=n; i++){
//     sum = sum+i
// }

// console.log(`The sum of first ${n} natural numbers is: ${sum}`)


// FOR_IN LOOP
// note -> for-in loops also works with array
// we use fo-in loop when we want to access key  in object

let obj = {
    marks:100,
    name:"ISRA",
    Sec:"A"
}
let obj2 = {
    Isra:90,
    maryam:80,
    haris:70,
    fiza:75,
    dania:78
}

for(let a in obj2){
    console.log(`Marks of ${a} is ${obj2[a]}`)
}

// FOR_OF LOOP
// Gives value
// use in iteable datastructure i,e Array,String 
// not with object
for(let a of "ISRA ILYAS"){
    console.log(a)
}