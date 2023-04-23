/* PROBLEM STATEMENT */

/* Given a number 'n', find the first 'n' element of the fibonacci sequence */

/* Solution */
const fibonacciFunc = (n) => {
    const fibonacci = [0,1];

    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci;
}


console.log(fibonacciFunc(2));
console.log(fibonacciFunc(7));
console.log(fibonacciFunc(10));


// Big-O = O(n)