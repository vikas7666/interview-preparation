function missingNum(arr) {
    let total = 0;
    arr.forEach((item) =>{
        total += item
    })
    let n = arr.length+1;
    let expectedNum = (n * (n+1) /2)  - total;
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
