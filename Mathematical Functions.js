//MATHEMATICAL FUNCTIONS

/**
 * @param {Number} num 
 * @returns {Number} Caculate the factorial of a number
 */

function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i
    }
    return fact
}
console.log("Factorial: " + factorial(6))

/**
 * @param {Number} num Must be positive
 * @returns {Boolean}} Tell if a postive integer is prime
 */

function primeNumberCheck(num) {
    let cpt = 0;
    let isPrime = false
    for (let i = 1; i < num / 2; i++) {
        if (num % i === 0) {
            cpt++;
        }
    }

    if (cpt == 1) {
        isPrime = true
    }

    return isPrime;
}
console.log("Prime number: " + primeNumberCheck(7))

/**
 * @param {Number} num The number of terms in the Fibonacci sequence (must be a positive integer).
 * @returns {Array} An array containing the Fibonacci sequence up to the given number of terms.
 *  
 */

function fibonacciSequence(num) {
    let arr = [0, 1];
    if (num == 0) {
        return [0]
    }
    else if (num == 1) {
        return arr;
    }

    for (let i = 1; i < num; i++) {
        let last = arr[arr.length - 1]
        let previous = arr[arr.length - 2]
        arr.push(last + previous)
    }
    return arr;
}

console.log("Suite de Fibonacci: " + fibonacciSequence(15))
