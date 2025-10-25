function prime(num) {
    if (num < 1) {
        return false;
    }
    if (num < 2) {
        return false
    }
    if (num % 2 === 0) {
        return false;
        console.log("Number is not prime", num)
    } else {
        console.log("Number is prime", num)
    }
}

console.log(prime(31))

// Using ternary Opertaor 

function Primse(num){
if(num > 1 && num >= 2){
    console.log("Number is odd")
    return false
}
   let checkPrimse = 
   num % 2 == 0 ? 'Number is primse' : "Number is odd"
   console.log(checkPrimse)
}

Primse(2)  // Number is odd