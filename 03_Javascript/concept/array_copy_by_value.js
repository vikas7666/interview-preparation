// How to Copy Array by Value in JavaScript ?

const a = [ 10, 20, 30, 40, 50 ];

// Using Spread Operator
/* 
The JavaScript spread operator is a concise and easy method to copy an array by value.
The spread operator allows you to expand an array into individual elements, which can then be used to create a new array.
*/
const spreadOperator  = [...a];

console.log("New Array: ", a1); // New Array:  [ 10, 20, 30, 40, 50 ] 
console.log("Is Both Arrays has Same Reference: ", a === a1); // false

//  Using array.from() Method
/* 
The Array.from() method is another way to copy an array by its value in JavaScript.
This method creates a new array from an existing array, using an optional mapping function to transform the values in the new array.
*/
const ArrayFrom = Array.from(a);

console.log("New Array: ", a1);  // New Array:  [ 10, 20, 30, 40, 50 ]
console.log("Is Both Arrays has Same Reference: ", a === a1); // false

// Using array.slice() Method
/* 
The slice() method creates a copy of an array by its value in JavaScript. This method creates a new array with a subset of the elements from the original array.
*/

const sliceMethod  = a.slice();
console.log('spreadOperator',spreadOperator)

console.log("New Array: ", a1);  // New Array:  [ 10, 20, 30, 40, 50 ]
console.log("Is Both Arrays has Same Reference: ", a === a1); // false

// Using array.map() Method
/* 
The JavaScript array.map() method copy an array in JavaScript involves creating a new array by applying a function to each element of the original array. This method is useful for creating a shallow copy or transforming elements during the copying process:
*/
const mapMethod  =  a.map((item) => item);
console.log('mapMethod',mapMethod)

console.log("New Array: ", a1);  // New Array:  [ 10, 20, 30, 40, 50 ]
console.log("Is Both Arrays has Same Reference: ", a === a1); // false


// Using JSON parse() and stringify() Methods
/* 
The JSON methods to copy an array involves serializing the original array to a JSON string with JSON.stringify(), then deserializing it back to a new array with JSON.parse(). This method creates a deep copy, including nested objects.

*/
const JSONPARSE_JSONSTRINGIFY = JSON.parse(JSON.stringify(a));

console.log('JSONPARSE_JSONSTRINGIFY',JSONPARSE_JSONSTRINGIFY)