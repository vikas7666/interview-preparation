/* This is the most efficient method for finding a single missing number in a sequence of[1, N] or[0, N].
 It uses the formula for the sum of first   natural numbers:
 sum  = n*(n+1)/2
 */
function missingNum(arr) {
    let sum = 0;   // as per formula first find sum 
    arr.forEach((item) => {
        sum += item
    })                         // sum = 11
    let n = arr.length + 1;   // here we make as per formula such as n+1  // 4 +1
    let expectedNum = (n * (n + 1) / 2) - sum;
    console.log(expectedNum)  //4  
}
missingNum([5, 2, 3, 1])

// handle repeted Number
function findMissingNumber(num) {
    let total = 0;
    num.forEach((item) => {
        total += item;
    });

    let n = num.length + 1;
    let expectedNum = (n * (n + 1)) / 2;
    return expectedNum - total;
}

let input = [5, 2, 3, 1, 5, 2, 3, 1];
let unique = [...new Set(input)];

console.log(findMissingNumber(unique));  // Output: 4
