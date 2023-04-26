/* PROBLEM STATEMENT */

/* Given a positive integer 'n', determine if the number is a power of 2 or not */

/* Solution */
const isPowerOfTwo = (n) => {
    if(n < 1){
        return false;
    }

    return (n & (n-1)) === 0
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));


// Big-O = O(1)