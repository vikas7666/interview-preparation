
// A palindromic number is a number that reads the same forwards and backward. For example, 121, 343, and 1001 are palindromes because they remain the same when their digits are reversed. 

// 11, 22, 121, 343, 1001, 12321, and 1221.

function palindromeCheck(num){
   const numStr = String(num)
    const reverseNum = numStr.split('').reverse().join('');

    if(numStr === reverseNum){
        console.log('Number is palindrome Number');
    }else{
        console.log('Number is not palindrome Number');
    }
}


palindromeCheck(16361)
palindromeCheck('abcba')