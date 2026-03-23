# Javascript is Synchronous or Asynchronous? 

## By default javascript is Synchronous JavaScript
By default, JavaScript code is executed synchronously, meaning each statement is executed one after the other, in the order in which it appears.

## Asynchronous JavaScript
Callbacks , Promises , Async/Await

## How Asynchronous JavaScript Works ?
JavaScript uses the **event loop**  to handle asynchronous tasks. The event loop allows JavaScript to handle asynchronous operations without blocking the main thread.

**Non-blocking I/O**   
**Callbacks**, **Promises**, and **Async/Await**:

**Callbacks** : Functions passed as arguments to other functions and executed after the task completes (commonly used in older code). </br>
**Promises** : Provide a more structured way of handling asynchronous operations, allowing you to chain then() and catch() methods.</br>
**Async/Await** :  Provides a cleaner syntax for working with promises by using async functions and await expressions, making asynchronous code look synchronous.

## What is the difference between null and undefined
Null : An assignment value that explicitly indicates an empty or non-existent value.</br>
Undefined : A variable that has been declared but has not yet been assigned a value. 

## What are undeclared and undefined variables?
Undeclared : A variable that has not been created.</br>
Undefined : A variable that has been declared but has not yet been assigned a value. 

## What are global variables?
In JavaScript, a global variable is a variable that is declared outside of any function or block scope. A variable that can be accessed from any part of a program.

## Difference between var, let and const?

### var : 
The scope of a var variable is functional or global scope.</br>
It can be updated and re-declared in the same scope.</br>
It can be declared without initialization.</br>
It can be accessed without initialization as its default value is “undefined”.</br>
These variables are hoisted.

### let :
The scope of a let variable is block scope.</br>
It can be updated but cannot be re-declared in the same scope.</br>
It can be declared without initialization. </br>
It cannot be accessed without initialization otherwise it will give ‘referenceError’.</br>
These variables are hoisted but stay in the temporal dead zone untill the initialization.

### const :
The scope of a const variable is block scope.</br>
It can neither be updated or re-declared in any scope.</br>
It cannot be declared without initialization.</br>
It cannot be accessed without initialization, as it cannot be declared without initialization.</br>
These variables are hoisted but stays in the temporal dead zone until the initialization.

###  What is 'this' keyword in JavaScript?
In JavaScript, this keyword refers to the object that is currently executing a function or method.</br>
When used within a method of an object, this points to that object.</br>
When used by itself, this points to the global object.</br>
Within a function, this typically points to the global object.</br>
In a function under strict mode, this becomes undefined.</br>
During an event, this points to the element that triggered the event.</br>
Methods such as call(), apply(), and bind() can reassign this to any desired object.</br>

console.log(this); // In a browser, this refers to the window object

###  Inside a Method: 
```js
const person = {
  name: 'Alice',
  greet() {
    console.log(this.name); // this refers to the person object
  }
};
person.greet(); // Output: Alice
```
###  Inside a Function 
```
function show() {
  console.log(this); // In non-strict mode, this refers to the window object
}
show();
```
###  Arrow Functions: Arrow functions do not have their own this value. Instead, they inherit this from the surrounding lexical context.

```
const obj = {
  name: 'Bob',
  greet: () => {
    console.log(this.name); // this refers to the surrounding context (window, in this case)
  }
};
obj.greet(); // Output: undefined (if in a browser environment)
```

###  Arrow fucntion handle this keyword 
```
const obj = {
  name: 'Bob'
};
obj.greet = () => {
  console.log(obj.name); // directly reference 'obj'
};
obj.greet(); // Output: Bob
```

###  function and method 

# function

```
function greet() {
  console.log('Hello, world!');
}

greet();
```

## Functions can also be assigned to variables  

```
const greet = function() {
  console.log('Hello!');
};

greet(); 
``` 

## Method

```
A method is a function that is associated with an object.
Methods are functions that are properties of an object and are typically invoked through that object.
const person = {
  name: 'Alice',
  greet: function() {
    console.log(`Hello, ${this.name}!`);
  }
};

person.greet(); // Output: Hello, Alice!
```

## Which keywords are used to handle exceptions in Javascript?
JavaScript, exceptions are handled using the try, catch, finally, and throw keywords.

```
try {
  // Code that may throw an error
  let result = riskyOperation();
}
```

## == and === difference

## What is JavaScript Hoisting and understand the examples?
Hoisting is a behavior in JavaScript where **variable and function declarations** are moved to the top of their containing scope during the compile phase, before the code is executed. 
This means that variables and functions can be referenced before they are declared in the code, but their values (for variables) are not hoisted—only their declarations are.

## Variable Hoisting:
basically means variable is decalred below but still we get undefined due to hoisting this is applicable to variable and function
console.log(x); // Output: undefined here means variable is hoisted but their value not hoisted 
```
var x = 5;
console.log(x); // Output: 5
```

## Variable Hoisting (with let and const)
let and const also hoisted but do not allow accessing the variable before its declaration.
```
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
```

## Function Hoisting:
Function declarations (using the function keyword) are hoisted in their entirely, meaning both the function's definition and its body are moved to the top.

## Function Hoisting (with Function Declaration)
```
console.log(greet()); // Output: "Hello!"
function greet() {
  return "Hello!";
}
```

## Function Hoisting (with Function Expression)
```
console.log(sayHello()); // TypeError: sayHello is not a function
var sayHello = function() {
  return "Hello!";
};
```

## Hoisting with let and const in Functions
```
function test() {
  console.log(a); // Output: ReferenceError: Cannot access 'a' before initialization
  let a = 20;
}
test();
```

## What is Callback
A callback function is simply a function passed as an argument to another function.
The callback function is executed after the outer function finishes its execution.
Used for asynchronous operations and events.
```
function greeting(name , callback){
    console.log(name);
    callback()
}
function checkGreeting(){
    console.log("Thank for greeting");
}
greeting("vikas",checkGreeting)  
vikas
Thank for greeting
```

## What is meant by promises?

In JavaScript, a promise is an **object** that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. </br>
Promises provide a cleaner and more structured way to handle asynchronous operations compared to traditional callbacks, addressing issues like callback hell and improving error handling.

### A promise has three states:
* Pending: The initial state; the operation is still ongoing.
* Fulfilled: The operation was successful, and the promise is resolved with a value.
* Rejected: The operation failed, and the promise is rejected with a reason (error).

A promise is **created using the Promise constructor**, which takes a **single argument: a function called the executor**. 
The executor function has two parameters:

**resolve** : A function to be called when the asynchronous operation is successful. </br>
**reject**  : A function to be called when the asynchronous operation fails.

conculasion: 
Promise is Object => represents eventual completion of asynchronous operation and resulting value. 
Promise is created using the Promise constructor which takes a single argument: a function called the executor.
executor has parameter => resolve, reject

```
 const myPromise = new Promise((resolve, reject) => {   // created using the Promise constructor and functtion called with resolve and reject 
  let success = true; // Simulating success or failure

  if (success) {
    resolve('Operation was successful!');
  } else {
    reject('Operation failed.');
  }
}); 

```
```
// Basic Program
let checkEven = new Promise((resolve, reject) => {
    let num = 4;

    if (num % 2 === 0) {
        resolve('Number is even');
    } else {
        reject('Number is odd');
    }
});

checkEven
  .then((res) => console.log("res:", res))
  .catch((err) => console.log("Error:", err));

  // res: Number is even

```

## Using Promises: then, catch, and finally
then(): Handles the resolved value of the promise (success case).
catch(): Handles errors (rejected promise).
finally(): Executes code regardless of whether the promise was fulfilled or rejected.

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((res)=>{
   if (!res.ok) {
    console.log('res',res)
      throw new Error('Network response was not ok');
    }
    return res.json(); // Returns a promise
})
.then((data) =>{
    console.log('data',data) // actual data 
})
.catch((err)=>{
    console.log('err',err)
})

<!-- 
// internally how fetch method used 
function fetch(url) {
  return new Promise((resolve, reject) => {
    // Step 1: Create HTTP request
    // Step 2: Send request over network

    // Step 3: When response arrives
    resolve(response);

    // Step 4: If network fails
    reject(error);
  });

  // So internally it USES:
  Promise constructor
  resolve
  reject
} -->

### Difference between callback and promises

# Comparison Between Callbacks and Promises

### Callbacks
Definition     : A function passed as an argument to another function and executed after a task is completed.
Readability    : Can lead to callback hell (nested, hard-to-read code).
Error Handling : Errors must be handled manually in each callback, making the code harder to manage.
Chaining       : Difficult to chain multiple asynchronous operations due to nested callbacks.
Code Flow	     : Execution flow can become hard to trace due to nested callbacks.
Flexibility	   : Limited flexibility; you often need to define error handling for every callback. 
Return Value   : Callbacks do not return values; you work within the callback function.

### Promise
Definition     : An object representing the eventual success or failure of an asynchronous operation.
Readability    : Provides a cleaner and more structured way to handle asynchronous code.
Error Handling : Errors are caught centrally using .catch(), improving error management.
Chaining       : Easily chain operations using .then() for success and .catch() for errors.
Code Flow	     : Promises are linear and easier to follow.
Flexibility	   : More powerful, with methods like Promise.all(), Promise.race(), and chaining
Return Value   : Promises return another promise, enabling chaining of .then() and .catch().


function fetchData(callback) {
  setTimeout(() => {
    const data = 'Fetched data';
    callback(null, data); // Callback pattern => passed function as a argument 
  }, 1000);
}

fetchData((error, data) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log(data); // Output: Fetched data
  }
});


### Issues with Callbacks:** Callback hell

fetchData((error, data) => {
  if (error) return console.error(error);
  processData(data, (err, result) => {
    if (err) return console.error(err);
    saveData(result, (saveErr) => {
      if (saveErr) return console.error(saveErr);
      console.log('Data saved successfully');
    });
  });
});

### Promsie 
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Fetched data';
      resolve(data); // Resolving the promise
    }, 1000);
  });
}

fetchData()
  .then((data) => {
    console.log(data); // Output: Fetched data
  })
  .catch((error) => {
    console.error('Error:', error);
  });

### Advantages of Promises: Chaining

fetchData()
  .then((data) => processData(data))
  .then((result) => saveData(result))
  .then(() => console.log('Data saved successfully'))
  .catch((error) => console.error('Error:', error));

// async function
async function fetchdata(){
		const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
		const data = await response.json();
		console.log(data)
}
fetchdata()

### What are closures and understand the examples?
A closure is a function that remembers the variables from its outer scope even after the outer function has finished executing. 
In other words, a closure allows a function to "close over" its environment and retain access to variables from the outer function.
When a function is created inside another function, it forms a closure. 
The inner function "remembers" the variables declared in its outer function, even after the outer function has returned.

Why Are Closures Useful?
* Data encapsulation:  Protecting data from being accessed or modified directly.
* Creating private variables.
* Building factories or currying.
* Event handling or asynchronous programming.

```
function outerFunction() {
  let outerVariable = "I'm from outer scope";

  function innerFunction() {
    console.log(outerVariable); // Accessing outerVariable from inner function
  }

  return innerFunction;
}

const myClosure = outerFunction(); // outerFunction executes and returns innerFunction
myClosure(); // Output: "I'm from outer scope"
```

### Inbuilt methods of arrays and strings?

 ## Array method

 ## Mutator Methods (Modify the Original Array)

 push()        : Adds one or more elements to the end of the array.           [a,b,newElement]
 pop()	       : Removes and returns the last element of the array.           [a,b,*]
 unshift()     : Adds one or more elements to the beginning of the array.     [newElement]
 shift()	     : Removes and returns the first element of the array.          [newElement]
 splice()	     : Adds, removes, or replaces elements in an array.
 reverse()	   : Reverses the order of the elements in the array.
 sort()        : Sorts the elements of the array (default is string comparison).

 ## Accessor Methods (Do Not Modify the Original Array)
 concat()	     : Combines two or more arrays into one.
 slice()	     : Returns a shallow copy of a portion of the array.
 includes()	   : Checks if an element exists in the array.
 indexOf()	   : Returns the first index of an element in the array.
 lastIndexOf() : Returns the last index of an element in the array.
 join()	       : Joins all elements of an array into a string.

 # Iteration Methods
 forEach()     : Executes a function for **each** array element.                                     => arr.forEach((x) => console.log(x)) prints all elements.
 map()         : Creates a **new array** with results of a function applied to **each** element.     => arr.map((x) => x * 2)  doubles all elements.
 filter()      : Creates a **new array** with elements **that** pass the test in a function.             => arr.filter((x) => x > 2) returns elements greater than 2       
 reduce()      : Reduces the array to a **single** value by applying a function.                     => arr.reduce((sum, x) => sum + x) sums the elements.
 some()        : Tests if **at least one** element passes the test in a function.                    => arr.some((x) => x > 2) checks if any element is > 2.
 every()       : Tests if **all elements pass the test** in a function.                              => arr.every((x) => x > 0) checks if all elements are > 0.
 find()        : Returns the **first** element that satisfies a condition.                           => arr.find((x) => x > 2) finds the first element > 2.
 findIndex()   : Returns the **index of the first element** that satisfies a condition.              => arr.findIndex((x) => x > 2) returns index of first > 2

 ## Other Utility Methods
 length()      : Returns the **number of elements** in an array.	               => arr.length gives the array size.
 flat()        : Flattens a nested array into a single array.                    => [1, [2, [3]]].flat(2) returns [1, 2, 3].
 flatMap()     : Maps each element, then flattens the result by one level.       => arr.flatMap(x => [x, x*2]).


 # String Methods
length	       : Returns the number of characters in a string.	                   => 'hello'.length returns 5.
includes()	   : Checks if a string **contains** a specified substring.	           => 'hello'.includes('ll') returns true.
startsWith()   : Checks if a string starts with a specified substring.             => 'hello'.startsWith('he') returns true.
endsWith()	   : Checks if a string ends with a specified substring.	             => 'hello'.endsWith('lo') returns true.
indexOf()	     : Returns the **first index** of a specified substring.	           => 'hello'.indexOf('l') returns 2.
lastIndexOf()  : Returns the last index of a specified substring.	                 => 'hello'.lastIndexOf('l') returns 3.

# Transformation Methods
toUpperCase()	  : Converts the string to uppercase.	                             =>'hello'.toUpperCase() returns 'HELLO'.
toLowerCase()	  : Converts the string to lowercase.	                             =>'HELLO'.toLowerCase() returns 'hello'.
trim()	        : Removes whitespace from both ends of the string.	             =>' hello '.trim() returns 'hello'.
replace()	      : Replaces a specified substring with another string.            =>'hello'.replace('l', 'x') returns 'hexlo'.
replaceAll()	  : Replaces all occurrences of a substring.	                     =>'hello'.replaceAll('l', 'x') returns 'hexxo'.
padStart()	    : Pads the beginning of a string to reach a specified length.    =>'5'.padStart(3, '0') returns '005'.
padEnd()	      : Pads the end of a string to reach a specified length.	         =>'5'.padEnd(3, '0') returns '500'.

# Extraction Methods
slice()       : Extracts a ****portion** of the string.	                                          =>'hello'.slice(1, 3) returns 'el'.
substring()	  : Similar to slice(), but does not accept negative indices.	                        =>'hello'.substring(1, 3) returns 'el'.
substr()	    : Extracts a portion of the string, starting at a position and for a given length.  =>'hello'.substr(1, 3) returns 'ell'.
charAt()	    : Returns the character at a specified index.	                                      =>'hello'.charAt(1) returns 'e'.
charCodeAt()  : Returns the Unicode value of the character at a specified index.	                =>'hello'.charCodeAt(1) returns 101.
split()	      : Splits a string into an array of substrings.	                                    =>'a,b,c'.split(',') returns ['a', 'b', 'c'].

## Difference between slice and splice with working examples?
Both slice() and splice() are methods used to manipulate arrays, but they are quite different in their functionality and use cases.

slice()
**Does not modify the original array** (non-destructive).
Returns a **shallow copy** of a portion of the array.
Accepts two arguments: start (inclusive) and end (exclusive). If the end is omitted, it slices up to the end of the array.
Can handle negative indices (counts from the end of the array).

array.slice(start, end);

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

const sliced = fruits.slice(1, 3); // Extracts elements from index 1 to 2
console.log(sliced); // Output: ['banana', 'cherry']
console.log(fruits); // Original array is unchanged: ['apple', 'banana', 'cherry', 'date', 'elderberry']

With Negative Indices:
const slicedNegative = fruits.slice(-3, -1); // Extracts from the 3rd-last to 2nd-last element
console.log(slicedNegative); // Output: ['cherry', 'date']

splice()
**Modifies the original array** (destructive)
Used to add, remove, or replace elements in an array.
array.splice(start, deleteCount, ...itemsToAdd);
Accepts three arguments: start, deleteCount, itemsToAdd

array.splice(start, deleteCount, ...itemsToAdd);

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const removed = fruits.splice(1, 2); // Removes 2 elements starting at index 1
console.log(removed); // Output: ['banana', 'cherry']
console.log(fruits); // Modified array: ['apple', 'date', 'elderberry']

## What are higher order functions?
Takes one or more functions as arguments, or Returns a function as its result.
This capability allows functions to be treated as first-class citizens in JavaScript, meaning functions can be passed around like any other value.

# Functions Taking Other Functions as Arguments  // Using a callback with forEach()
const numbers = [1, 2, 3, 4];  
numbers.forEach((item) =>{
    console.log(item)
})

# Functions Returning Functions

function createMultiplier(multiplier) {
  return function (num) {
    return num * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(5));  // 

# Common Built-In Higher-Order Functions in JavaScript
const numbers = [1, 2, 3, 4];
map()     => const squared = numbers.map((num) => num * num);
filter()  => const even = numbers.filter((num) => num % 2 === 0);
reduce()  => const sum = numbers.reduce((total, num) => total + num, 0);
sort()    => const sorted = numbers.sort((a, b) => a - b);

Benefits of Higher-Order Functions
Code Reusability: They promote writing reusable, modular code.
Abstraction: Simplifies complex logic by abstracting repetitive tasks.
Improves Readability: Functional programming patterns like map, filter, and reduce make code concise and expressive.

# How to empty an array?

Assign a New Empty Array
let arr = [1, 2, 3, 4];
arr = [];

Set the Array's Length to 0
arr.length = 0;

Use splice() to Remove All Elements
arr.splice(0, arr.length);

Use a Loop to Pop Elements
while (arr.length > 0) {
  arr.pop();
}

Use shift() in a Loop
while (arr.length > 0) {
  arr.shift();
}

# Rest parameters and spread operators?

# Rest parameters
Rest parameters allow you to collect **multiple arguments** into a **single array**. It is useful when a function takes a variable number of arguments.

The rest parameter syntax allows a **function to accept an indefinite number of arguments** as an array

function sum(...theArgs) {  // here theArgs can collect n number of arguments
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
// Expected output: 6

# Spread Operator (... for unpacking)

The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

const array = [...iterable];
const object = {...iterable};

// coping array 
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // Output: [1, 2, 3, 4, 5]

const word = 'hello';
const letters = [...word];
console.log(letters); // Output: ['h', 'e', 'l', 'l', 'o']

## When to Use
Use rest parameters when you want to handle a dynamic number of arguments in a function.
Use spread operators when you want to combine, clone, or pass elements of an iterable into another context.

## Destructuring

Destructuring Assignment is a JavaScript expression that allows to unpack of values from arrays, or properties from objects, into distinct variables data can be extracted from arrays, objects, and nested objects, and assigned to variables.

const vehicles = ['mustang', 'f-150', 'expedition'];

// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

<!-- With destructuring: -->

const vehicles = ['mustang', 'f-150', 'expedition'];
const [car, truck, suv] = vehicles;

let marks = { x: 21, y: -34, z: 47 };
const { x, y, z } = marks;

console.log(x); // 21
console.log(y);  // 22
console.log(z); // 47

// Object 
({ x, y} = { x: 10, y: 20 });
console.log(x); // 10
console.log(y); // 20

## Difference between call and apply

# Call
The call() method allows you to call a function with a specified this value and arguments provided individually.
The **first argument to call() sets the this value for the function** being called, and the **remaining arguments are passed to the function as arguments**.

// one line 
call() lets you run a function with a custom this and pass arguments directly.

function greet(name){
    console.log(`Hello ${name} ! My name is ${this.name}`)
}
let person = {
  name: "John"
};
greet.call(person, "Alice"); // Output: Hello, Alice! My name is John.

# apply()
The apply() method is similar to the call() method, but it takes an array of arguments instead of individual arguments. 
The **first argument to apply() sets the this value for the function being called**, and the **second argument is an array of arguments to pass to the function**.

function add(a, b) {
  return a + b;
}
let numbers = [1, 2];
console.log(add.apply(null, numbers)); // Output: 3

# bind(); (Bind Method)
The bind() method returns a new function with a specified this value and any arguments that are passed to it.
The bind() method does not call the function immediately but instead returns a new function that can be called later.

let person = {
  name: "John",
  greet: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

let greetPerson = person.greet.bind(person);

greetPerson(); // Output: Hello, my name is John.

# Difference between pass by value and pass by reference

# Pass by Value 
Definition: A copy of the value is passed. Changes made to the copied value do not affect the original variable.
Applies To: Primitive types (e.g., Number, String, Boolean, Undefined, Null, Symbol, BigInt

let a = 10;
let b = a; // Copy of 'a' is assigned to 'b'

b = 20;    // Changing 'b' does not affect 'a'
console.log(a); // Output: 10
console.log(b); // Output: 20

# Pass by Reference
Definition: A reference to the original value is passed. Changes made to the reference affect the original object.
Applies To: Non-primitive types (Objects, Arrays, Functions).

let obj1 = { name: "Alice" };
let obj2 = obj1; // Reference to 'obj1' is assigned to 'obj2'

obj2.name = "Bob"; // Changing 'obj2' affects 'obj1'
console.log(obj1.name); // Output: Bob
console.log(obj2.name); // Output: Bob

# Feature Pass by Value
Applies               : To Primitive types	
Effect on Original    : Original value is unaffected.	
Memory	              : Value is copied to a new location.
Mutability	Immutable :  (original data is protected).	

Applies               : Objects, Arrays, Functions
Effect on Original    : Original value is unaffected.	
Memory	              : Value is copied to a new location.
Mutability	Immutable :  (original data is protected).	

# Shallow Copy vs Deep Copy of an Object
https://www.geeksforgeeks.org/javascript/what-is-shallow-copy-and-deep-copy-in-javascript/

In JavaScript, when copying an object, we can either create a shallow copy or a deep copy.The difference lies in how deeply the copying process goes into the nested structure of the object.

# shallow Copy 
A shallow copy only duplicates the top-level properties of an object. If the object contains nested objects or arrays, only their references are copied, not the actual nested data.

Example: Shallow Copy
const original = { name: "Alice", details: { age: 25 } };
Ways to Create a Shallow Copy

## Using the Spread Operator (...)
const copy = { ...original };

## Using Object.assign():
const copy = Object.assign({}, original);

## Using Array.slice() or Array.from() for Arrays
const arr = [1, 2, 3];
const copy = arr.slice();

### A deep copy duplicates all levels of an object. Any nested objects or arrays are fully copied, and the new copy has no references to the original object.

const original = { name: "Alice", details: { age: 25 } };
const deepCopy = JSON.parse(JSON.stringify(original)); // Deep copy

deepCopy.details.age = 30; // Modifying the nested object
console.log(original.details.age); // Output: 25 (original is unaffected) 

// Lodash Method

## Local storage and session storage
Web storage objects localStorage and sessionStorage allow to save key/value pairs in the browser.
data survives a page refresh (for sessionStorage) and even a full browser restart (for localStorage).

Both storage objects provide the same methods and properties:

setItem(key, value) – store key/value pair.
getItem(key) – get the value by key.
removeItem(key) – remove the key with its value.
clear() – delete everything.
key(index) – get the key on a given position.
length – the number of stored items.

localStorage
localStorage.setItem('test', 1); alert( localStorage.getItem('test') );

Object-like access
localStorage.test = 2;

// remove key 
delete localStorage.test;

# Why we use promise, async and await?

