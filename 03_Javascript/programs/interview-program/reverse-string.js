let reverseArray = [];
let reverseletter;
function reverseString1(str){
    for(let i = str.length - 1; i >= 0; i--){
        reverseArray.push(str[i]);
    }
    console.log('reverseArray', reverseArray);
}
// (3) ['c', 'b', 'a']


function reverseString2(str){
   reverseletter =  str.split('').reverse().join('');
   console.log('reverseletter',reverseletter)
    
}
// reverseletter cba
reverseString1('GeeksForGeeks');
reverseString2('GeeksForGeeks');