/*Create a faulty calculator using javascript..
This faulty calculator does following..
1. It takes two numbers as input from user
2. it perform wrong operation as follow
+ --> -
* --> +
- --> /
/ --> **

it perform wrong opeations 10% of the time

*/
let num = Math.random()
console.log(num)

let num1 = prompt("Enter your 1st number");
let num2 = prompt("Enter your 2nd number");

let choice = prompt("Enter which operation you want to perform!\n A (Addition) \n B (Subtraction) \n C (Multiplication) \n D (Division)"
).toLowerCase()

if (num <= 0.1){
    if (choice == "a"){
        let result =  num1 - num2
        console.log(result)
    }
    else if (choice == "b"){
        let result =  num1 /  num2
        console.log(result)
    }
    else if (choice == "c"){
        let result =  num1 - num2
        console.log(result)
    }
    else if (choice == "a"){
        let result =  num1 - num2
        console.log(result)
    }
    else{
        console.log("Enter a valid operation!")
    }
}
else{
    if (choice =="a"){
        let result =  num1 + num2
        console.log(result)
    }
    else if (choice == "b"){
        let result =  num1 -  num2
        console.log(result)
    }
    else if (choice == "c"){
        let result =  num1 * num2
        console.log(result)
    }
    else if (choice == "d"){
        let result =  num1 / num2
        console.log(result)
    }
    else{
        console.log("Enter a valid operation!")
    }
}


