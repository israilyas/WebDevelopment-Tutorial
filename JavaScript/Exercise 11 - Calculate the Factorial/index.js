let arr = [1,2,3,4,5]

const red =(a,b)=>{
     return a*b
}
console.log(arr.reduce(red))

// Factorial by using FOr Loop
let fact = 1 
for(let i=1; i<=5; i++){
     fact = fact*i
}

console.log(fact)