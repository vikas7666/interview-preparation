// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
function evenNumber(...arr){
    let result  = []
    for(let i = 0; i<arr.length; i++){
     if(arr[i] % 2 === 0){
        result.push(arr[i])
     }
    } 
    return result
 }
 
 console.log(evenNumber(2,4,5,7,-1,0,-2,-4))  // [ 2, 4, 0, -2, -4 ]

// 
 function evenNumber(num){
    let result = []
    for(let item of num){
        item % 2 == 0 ? result.push(item) : 'Odd Number'
    }
    return result
}

console.log(evenNumber([10,2,34,5,67,89])) // [ 10, 2, 34 ]





