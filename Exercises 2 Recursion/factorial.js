// Write a function factorial which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below.
// Factorial zero (0!) is always 1.

// refactor using recursion:
function factorial(num) {
    if (num === 0) return 1;
    return num*factorialCalculation(num-1);
}

function factorialCalculation(num) {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i;
    }
    return total;
}
