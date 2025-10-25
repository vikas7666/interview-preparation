// Using Set 

 let num1 = [100, 20, 4, 99, 45];

let newSet  = [... new Set(num1)] // remove duplicate
console.log('newSet',newSet)

let sortedNumber  = newSet.sort((a, b) => b - a);
console.log('sortedNumber',sortedNumber)
console.log(sortedNumber[1])

// ###########################################################################################################

// Using -Infinity
let num = [25, 6, 7, 8, 25, 90];

function SecondLargest(num) {
    let num1 = -Infinity, num2 = -Infinity;

    for (let i = 0; i < num.length; i++) {
        if (num[i] > num1) {
            num2 = num1;
            num1 = num[i];
        } else if (num[i] > num2 && num[i] !== num1) {
            num2 = num[i];
        }
    }
    return num2;
}
console.log("Second largest:", SecondLargest(num));


// ###########################################################################################################

// using for Each method
function  getSecondLargest(arr) {
    let num1 = -Infinity;
    let num2 = -Infinity;
    arr.forEach((item) =>{
    if(item > num1){
        num1 =  num2;
        num2 = item;
    }
   else if(item > num2 && num2 <num1){
        num2  = item;
    }
    })
    console.log(num1,num2)
}

getSecondLargest([12, 35, 1, 10, 34, 1])



