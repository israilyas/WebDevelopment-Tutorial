function nice(name) {
    console.log("hello "+ name + " you are good")
    console.log("hello "+ name + " you are nice")
    console.log("hello "+ name + " you are hard working")
    console.log("hello "+ name + " you are gentle man")
}

// Parametric function
function sum(a,b){
    console.log(a + b)
}

// Return Function
function sum2(a,b){
   return a + b
}

// console.log("hello , you are good")

// nice("Maaz")
// sum(6,12)
// result=sum2(23,5)
result=sum2(23,5.5)
console.log("The sum is " +result)

// Arrow Funtion

const funct1 = (x)=>{
    console.log("I am an arrow function ",+x )
}

funct1(4)
funct1(8)
funct1(123)