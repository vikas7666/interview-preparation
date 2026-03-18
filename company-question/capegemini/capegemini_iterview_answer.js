// Spread Operator
// https://medium.com/@pallavi8khedle/difference-between-spread-and-rest-operator-dc43a86a8991


// Spread Opertor is nothing but takes a group arguments and try to spread into indivisual

/* 
Spread Operator(`…`): The spread operator(…) is used to expand or spread elements from an iterable (such as an array, string, or object) into individual elements.

uses of Spread operator
  copying an array 
  merging an array
  passing multiple Argument into function 
*/

// e.g 
const array = [1, 2, 3] // takes a group arguments 
console.log(...array)  // 1,2,3 and try to spread into indivisual

// copying an array 
const originalArray = [1, 2, 3]
const copiedArray = [...originalArray];
console.log(copiedArray)

//merging an array
const myArray1 = [1, 2, 3]
const myArray2 = [4, 5]

const mergeArray = [...myArray1, ...myArray2]
console.log('mergeArray', mergeArray)

//passing multiple Argument into function 
const number1 = [1, 2, 3, 4, 5]
sum(...number1)

function sum(a, b, c, d, e) {
  console.log(a + b + c + d + e)
}

// why spread occour 
//function defination
function sumOne(a, b) {
  return a + b;
}

let myarr = [9, 5];
console.log(sumOne(myarr)); // 9,5undefined

// To deal with such issue
console.log(sumOne(...myarr)); // 14

/*  Rest Operator    */

// Menas it can takes indivisual value and bunch them together into array

// Rest operator(`…`): The rest operator(…) is used in function parameters to collect all remaining arguments into an array.

/* 
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.
It collects all remaining arguments into an array, which can be accessed from inside the function.
The rest of the parameters(…restArguments) must be the last parameter in a function declaration.
*/

function sumTwo(...args) {
  let sum = 0;
  for (let i of args) {
    sum += i;
  }
  return sum;
}

console.log(sumTwo(1, 2, 3, 3, 5, 6, 7));  //27

const [first, second, ...remaining] = [1, 2, 3, 4, 5];
console.log(remaining); // [3, 4, 5]

/* ------------------------------------------------------------------------------------------------------------------------- */

/*   what is use of Object.assign  */
// From Object assign we can copy one obj into another object
let obj = {};
console.log(Object.assign(obj, { a: 1, b: 2 }, { c: 1, d: 2 }));
// {a: 1, b: 2, c: 1, d: 2}
