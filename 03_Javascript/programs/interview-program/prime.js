//  Write a JavaScript function to check if a given number is prime.

function primeNumber(num){
    if(num < 0){
        console.log('Negetive Number is not Prime ')
    }
    if(num < 2){
        console.log('Number less than 2 is not prime Number  ')
    }
    for(let i = 2; i<num; i++){
        if(num % 2 == 0 ){
            console.log('Number is not Prime')
            return false;
        }
    }
   console.log(num)
}
primeNumber(1)
