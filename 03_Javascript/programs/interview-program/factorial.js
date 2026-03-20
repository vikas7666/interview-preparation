function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result = result * i;
    }
    return result;
}
console.log(factorial(7))

// Other Way 
function factorial(num) {
    let result = 1;
    for (let i = num; i > 1; i--) {
        result *= i;
    }
    return result;
}

console.log(factorial(5))



