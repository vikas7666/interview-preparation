/* Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.  
    e.g sum of 2 number to 3rd number 
    0 + 1 = 1
    1 + 1 = 2
    2 + 1 = 3
*/

function fibonacciSeries(num){
    if(num < 0){
        console.log('Number is less than 0 ')
        return
    }else if(num == 1){
        return [0]
    }else if(num == 2){
        return [0,1]
    }
    let fibonacciSeries = [0,1];

    for( let i = 2; i<num; i++){
        fibonacciSeries.push(fibonacciSeries [ i - 1] + fibonacciSeries[ i - 2] )
    }
    return fibonacciSeries;
}
 
console.log(fibonacciSeries(10));  // [0, 1,  1,  2,  3, 5, 8, 13, 21, 34]