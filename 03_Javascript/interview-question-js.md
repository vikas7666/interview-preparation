# Javascript is Synchronous or Asynchronous? 

## By default javascript is Synchronous JavaScript
By default, JavaScript code is executed synchronously, meaning each statement is executed one after the other, in the order in which it appears.

## Asynchronous JavaScript
* Callbacks
*  Promises 
*  Async/Await

## How Asynchronous JavaScript Works ?
JavaScript uses the ***event loop***  to handle asynchronous tasks. The event loop allows JavaScript to handle asynchronous operations without blocking the main thread.

* Non-blocking I/O
* Callbacks
* Promises
* Async/Await

**Callbacks** : Functions passed as arguments to other functions and executed after the task completes (commonly used in older code). </br>
**Promises** : Provide a more structured way of handling asynchronous operations, allowing you to chain then() and catch() methods.</br>
**Async/Await** :  Provides a cleaner syntax for working with promises by using async functions and await expressions, making asynchronous code look synchronous.

## What is the difference between null and undefined
**Null** : An assignment value that explicitly indicates an empty or non-existent value.</br>
**Undefined** : A variable that has been declared but has not yet been assigned a value. 

## What are undeclared and undefined variables?
Undeclared : A variable that has not been created.</br>
Undefined : A variable that has been declared but has not yet been assigned a value. 

## What are global variables?
In JavaScript, a global variable is a variable that is declared outside of any **function or block scope**. A variable that can be accessed from any part of a program.

## Difference between var, let and const?

### var : 
* The scope of a var variable is functional or global scope.</br>
* It can be updated and re-declared in the same scope.</br>
* It can be declared without initialization.</br>
* It can be accessed without initialization as its default value is “undefined”.</br>
* These variables are hoisted.

### let :
The scope of a let variable is block scope.</br>
* It can be updated but cannot be re-declared in the same scope.</br>
* It can be declared without initialization. </br>
* It cannot be accessed without initialization otherwise it will give ‘referenceError’.</br>
* These variables are hoisted but stay in the temporal dead zone untill the initialization.

### const :
The scope of a const variable is block scope.</br>
* It can neither be updated or re-declared in any scope.</br>
* It cannot be declared without initialization.</br>
* It cannot be accessed without initialization, as it cannot be declared without initialization.</br>
* These variables are hoisted but stays in the temporal dead zone until the initialization.

###  What is 'this' keyword in JavaScript?
*  In JavaScript, this keyword refers to the object that is currently executing a function or method.</br>
*  When used within a method of an object, this points to that object.</br>
*  When used by itself, this points to the global object.</br>
*  Within a function, this typically points to the global object.</br>
*  In a function under strict mode, this becomes undefined.</br>
*  During an event, this points to the element that triggered the event.</br>
*  Methods such as call(), apply(), and bind() can reassign this to any desired object.</br>
```js
console.log(this); // In a browser, this refers to the window object
```
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
```js
function show() {
  console.log(this); // In non-strict mode, this refers to the window object
}
show();
```
###  **Arrow Functions**
Arrow functions do not have their own this value. Instead, they inherit this from the surrounding lexical context.

```js
const obj = {
  name: 'Bob',
  greet: () => {
    console.log(this.name); // this refers to the surrounding context (window, in this case)
  }
};
obj.greet(); // Output: undefined (if in a browser environment)
```

###  Arrow fucntion handle this keyword 
```js
const obj = {
  name: 'Bob'
};
obj.greet = () => {
  console.log(obj.name); // directly reference 'obj'
};
obj.greet(); // Output: Bob
```

##  function and method 

### Functions ###

```js
function greet() {
  console.log('Hello, world!');
}

greet();
```

### Functions can also be assigned to variables  

```js
const greet = function() {
  console.log('Hello!');
};

greet(); 
``` 

## Method


A method is a function that is associated with an object.
Methods are functions that are properties of an object and are typically invoked through that object.

```js
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

```js
try {
  // Code that may throw an error
  let result = riskyOperation();
}
```

## == and === difference

## What is JavaScript Hoisting and understand the examples?
Hoisting is a behavior in JavaScript where <span style="color:#E02d75;font-weight:bold">variable and function declarations</span> are moved to the top of their containing scope during the compile phase, before the code is executed. </br>
This means that variables and functions can be referenced before they are declared in the code, but their <span style="color:#E02d75;font-weight:bold">values (for variables) are not hoisted—only their declarations are.</span>

## Variable Hoisting:
Basically means variable is decalred below but still we get undefined due to hoisting this is applicable to variable and function
```js
console.log(x); // Output: undefined here means variable is hoisted but their value not hoisted 

var x = 5;
console.log(x); // Output: 5
```

## Variable Hoisting (with let and const)
let and const also hoisted but do not allow accessing the variable before its declaration.

```js
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
```

## Function Hoisting:
Function declarations (using the function keyword) are hoisted in their entirely, meaning both the function's definition and its body are moved to the top.

## Function Hoisting (with Function Declaration)
```js
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
```js
function test() {
  console.log(a); // Output: ReferenceError: Cannot access 'a' before initialization
  let a = 20;
}
test();
```

## What is Callback
A callback function is simply a <span style="color:#E02d75;font-weight:bold">function passed as an argument to another function.</span>
The callback function is executed after the outer function finishes its execution.
Used for asynchronous operations and events.

```js
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

In JavaScript, a promise is an <span style="color:#E02d75;font-weight:700">object</span> that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. </br>
Promises provide a cleaner and more structured way to handle asynchronous operations compared to traditional callbacks, addressing issues like callback hell and improving error handling.

### A promise has three states:
* Pending: The initial state; the operation is still ongoing.
* Fulfilled: The operation was successful, and the promise is resolved with a value.
* Rejected: The operation failed, and the promise is rejected with a reason (error).

A promise is <span style="color:#E02d75;font-weight:bold">created using the Promise constructor</span> which takes a <span style="color:#E02d75;font-weight:bold">single argument: a function called the executor</span>

<span style="color:#E02d75;font-weight:bold">The executor function has two parameters:</span>

<span style="color:#ff6a00;font-weight:bold">resolve</span>: A function to be called when the asynchronous operation is successful. </br>
<span style="color:#ff6a00;font-weight:bold">reject</span>  : A function to be called when the asynchronous operation fails.

<span style="color:#ff6a00;font-weight:bold">Conculasion </span>
Promise is Object => represents eventual completion of asynchronous operation and resulting value. 
Promise is created using the Promise constructor which takes a single argument: a function called the executor.
executor has parameter => resolve, reject

Promise takes ONE function,
that function receives TWO arguments (resolve, reject)

new Promise(function(resolve, reject) {
  // your async work
});

```js
 const myPromise = new Promise((resolve, reject) => {   // created using the Promise constructor and functtion called with resolve and reject 
  let success = true; // Simulating success or failure

  if (success) {
    resolve('Operation was successful!');
  } else {
    reject('Operation failed.');
  }
});

```

### Basic Program

```js
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
<span style="color:#E02d75;font-weight:bold">then()</span>: Handles the resolved value of the promise (success case).</br>
<span style="color:#E02d75;font-weight:bold">catch()</span>: Handles errors (rejected promise).</br>
<span style="color:#E02d75;font-weight:bold">finally()</span>: Executes code regardless of whether the promise was fulfilled or rejected.</br>

## Fetch Method
```js
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

```
### Internally how fetch method used 

```js
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
} 
```

### Difference between callback and promises

### Callbacks
Definition     : A function passed as an argument to another function and executed after a task is completed.</br>
Readability    : Can lead to callback hell (nested, hard-to-read code).</br>
Error Handling : Errors must be handled manually in each callback, making the code harder to manage.</br>
Chaining       : Difficult to chain multiple asynchronous operations due to nested callbacks.</br>
Code Flow	     : Execution flow can become hard to trace due to nested callbacks.</br>
Flexibility	   : Limited flexibility; you often need to define error handling for every callback. </br>
Return Value   : Callbacks do not return values; you work within the callback function.

### Promise
Definition     : An object representing the eventual success or failure of an asynchronous operation.</br>
Readability    : Provides a cleaner and more structured way to handle asynchronous code.</br>
Error Handling : Errors are caught centrally using .catch(), improving error management.</br>
Chaining       : Easily chain operations using .then() for success and .catch() for errors.</br>
Code Flow	     : Promises are linear and easier to follow.</br>
Flexibility	   : More powerful, with methods like Promise.all(), Promise.race(), and chaining</br>
Return Value   : Promises return another promise, enabling chaining of .then() and .catch().

```js
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
```

### Issues with Callbacks:** Callback hell
```js
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
```
### Promsie 
```
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

```

### Advantages of Promises: Chaining

```js
fetchData()
  .then((data) => processData(data))
  .then((result) => saveData(result))
  .then(() => console.log('Data saved successfully'))
  .catch((error) => console.error('Error:', error));
```
### async function

```js
async function fetchdata(){
		const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
		const data = await response.json();
		console.log(data)
}
fetchdata()

``` 
### What are closures and understand the examples?
* A closure is a function that remembers the variables from its outer scope even after the outer function has finished executing. </br>
* In other words, a closure allows a function to "close over" its environment and retain access to variables from the outer function.</br>
* When a function is created inside another function, it forms a closure. </br>
* The inner function "remembers" the variables declared in its outer * function, even after the outer function has returned.</br>

### Why Are Closures Useful?
* Data encapsulation:  Protecting data from being accessed or modified directly.
* Creating private variables.
* Building factories or currying.
* Event handling or asynchronous programming.

```js
function outerFunction() {
  let outerVariable = "I'm from outer scope";

  function innerFunction() {
    outerVariable = 'hello'
    console.log(outerVariable); // Accessing outerVariable from inner function
  }

  return innerFunction;
}

const myClosure = outerFunction(); // outerFunction executes and returns innerFunction
myClosure(); // Output: "I'm from outer scope"
```

### Inbuilt methods of arrays and strings?

 ## Array method

 ### Mutator Methods (Modify the Original Array)

 push()        : Adds one or more elements to the end of the array.           [a,b,newElement] </br>
 pop()	       : Removes and returns the last element of the array.           [a,b,*]            </br>
 unshift()     : Adds one or more elements to the beginning of the array.     [newElement]   </br>
 shift()	     : Removes and returns the first element of the array.          [newElement]</br>
 splice()	     : Adds, removes, or replaces elements in an array.</br>
 reverse()	   : Reverses the order of the elements in the array.</br>
 sort()        : Sorts the elements of the array (default is string comparison).</br>

 ## Accessor Methods (Do Not Modify the Original Array)
 concat()	     : Combines two or more arrays into one.</br>
 slice()	     : Returns a shallow copy of a portion of the array.</br>
 includes()	   : Checks if an element exists in the array.</br>
 indexOf()	   : Returns the first index of an element in the array.</br>
 lastIndexOf() : Returns the last index of an element in the array.</br>
 join()	       : Joins all elements of an array into a string.</br>

# Iteration Methods

# Iteration Methods

<span style="color:#E02d75;font-weight:bold">forEach()</span> : Executes a function for **each** array element.  
```js
arr.forEach((x) => console.log(x)) // prints all elements.
```

<span style="color:#E02d75;font-weight:bold">map()</span> : Creates a **new array** with results of a function applied to **each** element.  
```js
arr.map((x) => x * 2) // doubles all elements.
```

<span style="color:#E02d75;font-weight:bold">filter()</span> : Creates a **new array** with elements **that** pass the test in a function.  
```js
arr.filter((x) => x > 2) // returns elements greater than 2.
```

<span style="color:#E02d75;font-weight:bold">reduce()</span> : Reduces the array to a **single** value by applying a function.  
```js
arr.reduce((sum, x) => sum + x) // sums the elements.
```

<span style="color:#E02d75;font-weight:bold">some()</span> : Tests if **at least one** element passes the test in a function.  
```js
arr.some((x) => x > 2) // checks if any element is > 2.
```

<span style="color:#E02d75;font-weight:bold">every()</span> : Tests if **all elements pass the test** in a function.  
```js
arr.every((x) => x > 0) // checks if all elements are > 0.
```

<span style="color:#E02d75;font-weight:bold">find()</span> : Returns the **first** element that satisfies a condition.  
```js
arr.find((x) => x > 2) // finds the first element > 2.
```

<span style="color:#E02d75;font-weight:bold">findIndex()</span> : Returns the **index of the first element** that satisfies a condition.  
```js
arr.findIndex((x) => x > 2) // returns index of first > 2.
```

---

## Other Utility Methods

<span style="color:#E02d75;font-weight:bold">length</span> : Returns the **number of elements** in an array.  
```js
arr.length // gives the array size.
```

<span style="color:#E02d75;font-weight:bold">flat()</span> : Flattens a nested array into a single array.  
```js
[1, [2, [3]]].flat(2) // returns [1, 2, 3].
```

<span style="color:#E02d75;font-weight:bold">flatMap()</span> : Maps each element, then flattens the result by one level.  
```js
arr.flatMap(x => [x, x * 2])
```

---

# String Methods

<span style="color:#E02d75;font-weight:bold">length</span> : Returns the number of characters in a string.  
```js
'hello'.length // returns 5.
```

<span style="color:#E02d75;font-weight:bold">includes()</span> : Checks if a string **contains** a specified substring.  
```js
'hello'.includes('ll') // returns true.
```

<span style="color:#E02d75;font-weight:bold">startsWith()</span> : Checks if a string starts with a specified substring.  
```js
'hello'.startsWith('he') // returns true.
```

<span style="color:#E02d75;font-weight:bold">endsWith()</span> : Checks if a string ends with a specified substring.  
```js
'hello'.endsWith('lo') // returns true.
```

<span style="color:#E02d75;font-weight:bold">indexOf()</span> : Returns the **first index** of a specified substring.  
```js
'hello'.indexOf('l') // returns 2.
```

<span style="color:#E02d75;font-weight:bold">lastIndexOf()</span> : Returns the last index of a specified substring.  
```js
'hello'.lastIndexOf('l') // returns 3.
```

# Transformation Methods

<span style="color:#E02d75;font-weight:bold">toUpperCase()</span> : Converts the string to uppercase.  
```js
'hello'.toUpperCase() // returns 'HELLO'.
```

<span style="color:#E02d75;font-weight:bold">toLowerCase()</span> : Converts the string to lowercase.  
```js
'HELLO'.toLowerCase() // returns 'hello'.
```

<span style="color:#E02d75;font-weight:bold">trim()</span> : Removes whitespace from both ends of the string.  
```js
' hello '.trim() // returns 'hello'.
```

<span style="color:#E02d75;font-weight:bold">replace()</span> : Replaces a specified substring with another string.  
```js
'hello'.replace('l', 'x') // returns 'hexlo'.
```

<span style="color:#E02d75;font-weight:bold">replaceAll()</span> : Replaces all occurrences of a substring.  
```js
'hello'.replaceAll('l', 'x') // returns 'hexxo'.
```

<span style="color:#E02d75;font-weight:bold">padStart()</span> : Pads the beginning of a string to reach a specified length.  
```js
'5'.padStart(3, '0') // returns '005'.
```

<span style="color:#E02d75;font-weight:bold">padEnd()</span> : Pads the end of a string to reach a specified length.  
```js
'5'.padEnd(3, '0') // returns '500'.
```

---

# Extraction Methods

<span style="color:#E02d75;font-weight:bold">slice()</span> : Extracts a **portion** of the string.  
```js
'hello'.slice(1, 3) // returns 'el'.
```

<span style="color:#E02d75;font-weight:bold">substring()</span> : Similar to slice(), but does not accept negative indices.  
```js
'hello'.substring(1, 3) // returns 'el'.
```

<span style="color:#E02d75;font-weight:bold">substr()</span> : Extracts a portion of the string, starting at a position and for a given length.  
```js
'hello'.substr(1, 3) // returns 'ell'.
```

<span style="color:#E02d75;font-weight:bold">charAt()</span> : Returns the character at a specified index.  
```js
'hello'.charAt(1) // returns 'e'.
```

<span style="color:#E02d75;font-weight:bold">charCodeAt()</span> : Returns the Unicode value of the character at a specified index.  
```js
'hello'.charCodeAt(1) // returns 101.
```

<span style="color:#E02d75;font-weight:bold">split()</span> : Splits a string into an array of substrings.  
```js
'a,b,c'.split(',') // returns ['a', 'b', 'c'].
```

## Difference between <span style="color:#E02d75;font-weight:bold">slice()</span> and <span style="color:#E02d75;font-weight:bold">splice()</span>

Both methods are used with arrays, but they behave very differently.

---

### <span style="color:#E02d75;font-weight:bold">slice()</span>

**Key Points:**
- ✅ Does **NOT modify** the original array (non-destructive)
- ✅ Returns a **shallow copy**
- ✅ Uses: `start (inclusive)` and `end (exclusive)`
- ✅ Supports **negative indices**

```js
array.slice(start, end);
```

**Example:**
```js
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

const sliced = fruits.slice(1, 3);
console.log(sliced);  // ['banana', 'cherry']
console.log(fruits);  // ['apple', 'banana', 'cherry', 'date', 'elderberry']
```

**With Negative Indices:**
```js
const slicedNegative = fruits.slice(-3, -1);
console.log(slicedNegative); // ['cherry', 'date']
```

👉 Think of `slice()` as **copying a portion** without touching the original array.

---

### <span style="color:#E02d75;font-weight:bold">splice()</span>

**Key Points:**
- ❌ **Modifies** the original array (destructive)
- ✅ Can **add, remove, or replace** elements
- ✅ Returns the **removed elements**

```js
array.splice(start, deleteCount, ...itemsToAdd);
```

**Example (Remove Elements):**
```js
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

const removed = fruits.splice(1, 2);
console.log(removed); // ['banana', 'cherry']
console.log(fruits);  // ['apple', 'date', 'elderberry']
```

**Example (Add Elements):**
```js
const fruits = ['apple', 'banana', 'cherry'];

fruits.splice(1, 0, 'mango');
console.log(fruits); // ['apple', 'mango', 'banana', 'cherry']
```

**Example (Replace Elements):**
```js
const fruits = ['apple', 'banana', 'cherry'];

fruits.splice(1, 1, 'orange');
console.log(fruits); // ['apple', 'orange', 'cherry']
```

👉 Think of `splice()` as **editing the original array in-place**.

---

### 🔥 Quick Comparison

| Feature            | slice()                  | splice()                  |
|------------------|--------------------------|---------------------------|
| Modifies original| ❌ No                    | ✅ Yes                    |
| Returns          | New array                | Removed elements          |
| Use case         | Copy / extract           | Add / remove / replace    |
| Negative index   | ✅ Supported             | ✅ Supported              |

---

### 🧠 Easy Way to Remember

- **slice → "S" for Safe (no change)**
- **splice → "P" for Perform changes**

## <span style="color:#E02d75;font-weight:bold">Higher-Order Functions</span>

A **higher-order function** is a function that:
- ✅ Takes **one or more functions as arguments**, OR
- ✅ **Returns a function** as its result  

👉 In JavaScript, functions are **first-class citizens**, meaning they can be:
- Stored in variables  
- Passed as arguments  
- Returned from other functions  

---

### <span style="color:#E02d75;font-weight:bold">1. Functions Taking Other Functions as Arguments</span>

(Using a callback with `forEach()`)

```js
const numbers = [1, 2, 3, 4];

numbers.forEach((item) => {
  console.log(item);
});
```

👉 Here, the callback function `(item) => {...}` is passed into `forEach()`.

---

### <span style="color:#E02d75;font-weight:bold">2. Functions Returning Functions</span>

```js
function createMultiplier(multiplier) {
  return function (num) {
    return num * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // 10
```

👉 `createMultiplier()` returns a new function customized with `multiplier`.

---

### <span style="color:#E02d75;font-weight:bold">Common Built-In Higher-Order Functions</span>

```js
const numbers = [1, 2, 3, 4];

const squared = numbers.map((num) => num * num);
const even = numbers.filter((num) => num % 2 === 0);
const sum = numbers.reduce((total, num) => total + num, 0);
const sorted = numbers.sort((a, b) => a - b);
```

---

### <span style="color:#E02d75;font-weight:bold">Benefits of Higher-Order Functions</span>

- **Code Reusability** → Write once, use multiple times  
- **Abstraction** → Hide complex logic behind simple functions  
- **Readability** → Cleaner and more expressive code  
- **Functional Style** → Encourages declarative programming  

---

### 🧠 Easy Way to Remember

- Higher-order function = **Function + Function**
- Either:
  - Takes a function  
  - Returns a function  
  - Or both 🚀
Improves Readability: Functional programming patterns like map, filter, and reduce make code concise and expressive.

## <span style="color:#E02d75;font-weight:bold">How to Empty an Array</span>

There are multiple ways to clear an array in JavaScript. Each method behaves slightly differently.

---

### <span style="color:#E02d75;font-weight:bold">1. Assign a New Empty Array</span>

```js
let arr = [1, 2, 3, 4];
arr = [];
```

👉 Reassigns `arr` to a new empty array.  
⚠️ Does **not affect other references** to the original array.

---

### <span style="color:#E02d75;font-weight:bold">2. Set the Array's Length to 0</span>

```js
let arr = [1, 2, 3, 4];
arr.length = 0;
```

👉 Clears the array **in-place**.  
✅ Affects all references to the same array.

---

### <span style="color:#E02d75;font-weight:bold">3. Use splice() to Remove All Elements</span>

```js
let arr = [1, 2, 3, 4];
arr.splice(0, arr.length);
```

👉 Removes all elements from index `0` to end.  
✅ Modifies the original array.

---

### <span style="color:#E02d75;font-weight:bold">4. Use pop() in a Loop</span>

```js
let arr = [1, 2, 3, 4];

while (arr.length > 0) {
  arr.pop();
}
```

👉 Removes elements one by one from the end.

---

### <span style="color:#E02d75;font-weight:bold">5. Use shift() in a Loop</span>

```js
let arr = [1, 2, 3, 4];

while (arr.length > 0) {
  arr.shift();
}
```

👉 Removes elements one by one from the beginning.  
⚠️ Less efficient than `pop()`.

---

### 🔥 Quick Comparison

| Method            | Modifies Original | Efficient | Notes                          |
|------------------|------------------|----------|--------------------------------|
| `arr = []`       | ❌ No             | ✅ Yes   | Breaks references              |
| `arr.length = 0` | ✅ Yes            | ✅ Best  | Most commonly used             |
| `splice()`       | ✅ Yes            | ✅ Good  | Flexible                       |
| `pop()` loop     | ✅ Yes            | ⚠️ Medium| Removes from end               |
| `shift()` loop   | ✅ Yes            | ❌ Slow  | Avoid for large arrays         |

---

### 🧠 Pro Tip

- Use **`arr.length = 0`** when you want to clear the same array reference.
- Use **`arr = []`** when you don’t care about existing references.
# Rest parameters and spread operators?

# <span style="color:#E02d75;font-weight:bold">Rest Parameters</span>

Rest parameters allow you to collect **multiple arguments** into a **single array**.  
They are useful when a function accepts a **variable number of arguments**.

👉 Syntax uses `...` (three dots)

```js
function sum(...theArgs) { // collects all arguments into an array
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3)); // Expected output: 6
```

👉 `theArgs` becomes an array: `[1, 2, 3]`

---

# <span style="color:#E02d75;font-weight:bold">Spread Operator (...)</span>

The spread operator allows you to **unpack elements** from arrays or objects.

👉 It is used to **copy, merge, or expand** data.

```js
const array = [...iterable];
const object = { ...iterable };
```

---

### <span style="color:#E02d75;font-weight:bold">Examples</span>

**Copying & Expanding an Array**
```js
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers); // [1, 2, 3, 4, 5]
```

**Converting String to Array**
```js
const word = 'hello';
const letters = [...word];

console.log(letters); // ['h', 'e', 'l', 'l', 'o']
```

---

## <span style="color:#E02d75;font-weight:bold">When to Use</span>

- ✅ Use **rest parameters** when:
  - You want a function to accept **any number of arguments**

- ✅ Use **spread operator** when:
  - You want to **copy** arrays/objects  
  - You want to **merge** data  
  - You want to **expand/unpack** elements  

---

### 🔥 Key Difference

| Feature          | Rest Parameters (`...`)       | Spread Operator (`...`)        |
|------------------|------------------------------|--------------------------------|
| Purpose          | Collect values               | Expand values                  |
| Used in          | Function parameters          | Arrays / Objects / Calls       |
| Output           | Array                        | Individual elements            |

---

### 🧠 Easy Way to Remember

- **Rest → "gather" (collect into array)**
- **Spread → "scatter" (expand values)**

## <span style="color:#E02d75;font-weight:bold">Destructuring</span>

Destructuring is a JavaScript expression that allows you to **unpack values** from arrays or **extract properties** from objects into **separate variables**.

👉 It makes code cleaner and more readable.

---

### <span style="color:#E02d75;font-weight:bold">Array Destructuring</span>

**Old Way:**
```js
const vehicles = ['mustang', 'f-150', 'expedition'];

const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];
```

**With Destructuring:**
```js
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;
```

---

### <span style="color:#E02d75;font-weight:bold">Object Destructuring</span>

```js
let marks = { x: 21, y: -34, z: 47 };

const { x, y, z } = marks;

console.log(x); // 21
console.log(y); // -34
console.log(z); // 47
```

---

### <span style="color:#E02d75;font-weight:bold">Reassigning Variables with Destructuring</span>

```js
let x, y;

({ x, y } = { x: 10, y: 20 });

console.log(x); // 10
console.log(y); // 20
```

👉 Parentheses `()` are required when destructuring **without declaration**.

---

### 🔥 Key Points

- Works with **arrays and objects**
- Order matters in **arrays**
- Property names matter in **objects**
- Can be used for **clean variable assignment**

---

### 🧠 Easy Way to Remember

- **Destructuring = unpacking data quickly**

## <span style="color:#E02d75;font-weight:bold">Difference between call(), apply(), and bind()</span>

These methods are used to control the value of **`this`** in JavaScript functions.

---

### <span style="color:#E02d75;font-weight:bold">call()</span>

The `call()` method allows you to **invoke a function immediately** with a specified `this` value and **arguments passed individually**.

👉 First argument → sets `this`  
👉 Remaining arguments → passed one by one 

```js
let obj1 = {
    name : 'vikas',
    surname: 'shukla',
    greet: function(nativePlace ="Native place not given", country="India"){ // default parameter
        return `${this.name}  ${this.surname} ${nativePlace} ${country} `
    }
}

let obj2 = {
    name : 'shyam',
    surname : 'Bihari'
}

console.log(obj1.greet()) // normal function call
console.log(obj1.greet.call(obj2, 'Pureswan', 'India')) // this set obj2 as first arguments 
console.log(obj1.greet.apply(obj2, ['Pureswan', 'India'])) // apply accept as a array

let result = obj1.greet.bind(obj2, 'Pureswan', 'India') // bind (same as call method)
console.log('result',result())


```
```js
function greet(name) {
  console.log(`Hello ${name}! My name is ${this.name}`);
}

let person = {
  name: "John"
};

greet.call(person, "Alice");  // first arguments set the this ("first arguments => object and 2nd alice )
// Output: Hello Alice! My name is John
```

👉 **One-line:** `call()` runs a function with custom `this` and direct arguments.

---

```js
const person = {
  name: "Alice",
  greet: function(greeting, punctuation) {
    console.log(`${greeting}, my name is ${this.name}${punctuation}`);
  }
};

const person2 = { name: "Bob" };

// Normal call
person.greet("Hi", "!");        // Hi, my name is Alice!

// Using call() to borrow the method
person.greet.call(person2, "Hello", "!!!");  
// Output: Hello, my name is Bob!!!


```

### <span style="color:#E02d75;font-weight:bold">apply()</span>

The `apply()` method is similar to `call()`, but it takes **arguments as an array**.

👉 First argument → sets `this`  
👉 Second argument → array of arguments  

```js
function add(a, b) {
  return a + b;
}

let numbers = [1, 2];

console.log(add.apply(null, numbers)); // Output: 3
```

```js
const numbers = [5, 2, 9, 1, 7];

// Old way (before spread operator)
console.log(Math.max.apply(null, numbers));   // 9

// Modern way (easier)
console.log(Math.max(...numbers));            // 9
```

👉 **Key Difference:** Arguments are passed as an **array**.

---

### <span style="color:#E02d75;font-weight:bold">bind()</span>

The `bind()` method **does NOT call the function immediately**.  
Instead, it returns a **new function** with a fixed `this` value.

```js
let person = {
  name: "John",
  greet: function () {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

let greetPerson = person.greet.bind(person);

greetPerson(); 
// Output: Hello, my name is John.
```

👉 Useful when you want to **store or pass a function with fixed `this`**.

---

### Real World e.g`
```js
const car = {
  brand: "Tesla",
  getInfo: function(speed, color) {
    return `${this.brand} is going at ${speed} km/h in ${color} color`;
  }
};

const bike = { brand: "Yamaha" };

// 1. Using call() - Correct
console.log( car.getInfo.call(bike, 120, "red") );
// Output: "Yamaha is going at 120 km/h in red color"

// 2. Using apply() - You wrote it wrong! Here's the fix:
console.log( car.getInfo.apply(bike, [80, "blue"]) );
// Output: "Yamaha is going at 80 km/h in blue color"
```

### 🔥 Quick Comparison

| Feature        | call()                  | apply()                 | bind()                     |
|----------------|-------------------------|------------------------|----------------------------|
| Executes now   | ✅ Yes                  | ✅ Yes                 | ❌ No                      |
| Returns        | Function result         | Function result        | New function               |
| Arguments      | Individually            | Array                  | Individually (optional)    |
| Use case       | Immediate call          | Array arguments        | Reusable function          |

---

👉 With Arrow Functions </br>
Arrow functions ignore call/apply/bind for this. They lexically capture this from the surrounding scope.

### 🧠 Easy Way to Remember

- **call → Call now (args one by one)**
- **apply → Apply with array**
- **bind → Bind now, call later**

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

