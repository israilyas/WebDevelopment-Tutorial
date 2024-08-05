const readline = require('readline');

let num = Math.random();
console.log(num);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your 1st number: ", function(num1) {
    rl.question("Enter your 2nd number: ", function(num2) {
        rl.question("Enter which operation you want to perform!\n A (Addition) \n B (Subtraction) \n C (Multiplication) \n D (Division): ", function(choice) {
            choice = choice.toLowerCase();

            if (num < 0.1) {
                if (choice === "a") {
                    let result =  parseInt(num1) - parseInt(num2);
                    console.log(result);
                } else if (choice === "b") {
                    let result =  parseInt(num1) + parseInt(num2) ;
                    console.log(result);
                } else if (choice === "c") {
                    let result =  parseInt(num1) / parseInt(num2);
                    console.log(result);
                } else if (choice === "d") {
                    let result =  parseInt(num1) ** parseInt(num2);
                    console.log(result);
                } else {
                    console.log("Enter a valid operation!");
                }
            } else {
                if (choice === "a") {
                    let result =  parseInt(num1) + parseInt(num2);
                    console.log(result);
                } else if (choice === "b") {
                    let result =  parseInt(num1) -  parseInt(num2);
                    console.log(result);
                } else if (choice === "c") {
                    let result =  parseInt(num1) * parseInt(num2);
                    console.log(result);
                } else if (choice === "d") {
                    let result =  parseInt(num1) / parseInt(num2);
                    console.log(result);
                } else {
                    console.log("Enter a valid operation!");
                }
            }

            rl.close();
        });
    });
});
