console.table([a,b,c]) will take value in array format and it will print in tabular format.
Note :  Prefer not to use  var bcz of issue in block scope and functional scope
-------------------------------------------------------------------------------------------------------------
DataType : number, string, boolean, null, undefined, object, bigint, symbol (for uniqueness)
console.log(typeof "");         // To check typeof variable
console.log(typeof null);      //  Object   
console.log(typeof undefined) // Object
--------------------------------------------------------------------------------------------------------------
Value Conversion  
let score = "33abc" 
let valueInNumber = Number(score); 
console.log(valueInNumber)         // number
console.log(typeof valueInNumber)  // NaN
If we try to convert Number such as string then it will return Nan and boolean will return 1 or 0
Note : anything we add with string will always return string 
e.g console.log( "1" + 2); // string   console.log( 1 + "2");  // string
---------------------------------------------------------------------------------------------------------
comparison
console.log(null >= 0); // true 
console.log(null == 0)  // false

