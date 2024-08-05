let numbers = [1, 2, 3, 4, 5];

const multiply = (a, b) => {
     return a * b;
}

console.log("All numbers multiplied together:", numbers.reduce(multiply));
