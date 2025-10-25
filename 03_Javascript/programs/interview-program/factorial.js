let total = 1;
function factorial(num){
    for(let i = 1 ; i<=num; i++){
        total = total * i;
    }
    console.log('total',total)
}
factorial(7) // 5040

// Other Way 
function factorial(num){
    let result = 1; 
    for(let i = num; i > 1; i--){
       result  *=  i;
    }
   return result;
}

console.log(factorial(5))



