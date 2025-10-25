// Write a JavaScript program to find the maximum number in an array. 

let number = [0,3,4,7,-1,0,4,3,5];

// Brute force technique - approch 1
let max = number[0];
for(let i = 1; i<number.length;i++){
    if(max < number[i]){
        max = number[i];
    }
}
// console.log(max)  // 7


let arr = [10,3,51,1,5];

let max2 = arr[0]; 
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);



/* If we want return statement, then this only possible with function not any other things */

function checkMaxNumber(){
    let num = [0,3,4,7,-1,0,4,3,5];
    let max = num[0];

    for(let i = 1; i<num.length;i++){
        if(max < num[i]){
            max = num[i];
        }
    }
    return max
}
checkMaxNumber()
