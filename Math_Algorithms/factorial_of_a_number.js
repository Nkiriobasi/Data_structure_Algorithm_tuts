/* PROBLEM STATEMENT */

/* Given an integer 'n', find the factorial of that integer */

/* Solution */
const factorial = (n) => {
    let result = 1
    
    for(let i = 2; i <= n; i++){
        result = result * i
    }

    return result;
}

console.log(factorial(0));
console.log(factorial(2));
console.log(factorial(5));


// Big-O = O(n)