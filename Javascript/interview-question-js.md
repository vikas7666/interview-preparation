### Javascript is Synchronous or Asynchronous? 

# Synchronous JavaScript
By default, JavaScript code is executed synchronously, meaning each statement is executed one after the other, in the order in which it appears.

# Asynchronous JavaScript
Callbacks , Promises , Async/Await

# How Asynchronous JavaScript Works ?
JavaScript uses the event loop to handle asynchronous tasks. The event loop allows JavaScript to handle asynchronous operations without blocking the main thread.
Non-blocking I/O    
Callbacks, Promises, and Async/Await:

Callbacks: Functions passed as arguments to other functions and executed after the task completes (commonly used in older code).
Promises: Provide a more structured way of handling asynchronous operations, allowing you to chain then() and catch() methods.
Async/Await: Provides a cleaner syntax for working with promises by using async functions and await expressions, making asynchronous code look synchronous.

# What is the difference between null and undefined
Null : An assignment value that explicitly indicates an empty or non-existent value
Undefined : A variable that has been declared but has not yet been assigned a value. 

# What are undeclared and undefined variables?
Undeclared : A variable that has not been created
Undefined : A variable that has been declared but has not yet been assigned a value. 

# What are global variables?
In JavaScript, a global variable is a variable that is declared outside of any function or block scope. A variable that can be accessed from any part of a program.

# Difference between var, let and const?

# var 
The scope of a var variable is functional or global scope. It can be updated and re-declared in the same scope.
It can be declared without initialization. It can be accessed without initialization as its default value is “undefined”.
These variables are hoisted.

# let 
The scope of a let variable is block scope. It can be updated but cannot be re-declared in the same scope.
It can be declared without initialization. It cannot be accessed without initialization otherwise it will give ‘referenceError’.
These variables are hoisted but stay in the temporal dead zone untill the initialization.

# const
The scope of a const variable is block scope. It can neither be updated or re-declared in any scope.
It cannot be declared without initialization. It cannot be accessed without initialization, as it cannot be declared without initialization. These variables are hoisted but stays in the temporal dead zone until the initialization.

### What is 'this' keyword in JavaScript?
In JavaScript, this keyword refers to the object that is currently executing a function or method.
When used within a method of an object, this points to that object.
When used by itself, this points to the global object.
Within a function, this typically points to the global object.
In a function under strict mode, this becomes undefined.
During an event, this points to the element that triggered the event.
Methods such as call(), apply(), and bind() can reassign this to any desired object.

console.log(this); // In a browser, this refers to the window object

# Inside a Method:  

const person = {
  name: 'Alice',
  greet() {
    console.log(this.name); // this refers to the person object
  }
};
person.greet(); // Output: Alice

# Inside a Function 
function show() {
  console.log(this); // In non-strict mode, this refers to the window object
}
show();

# Arrow Functions: Arrow functions do not have their own this value. Instead, they inherit this from the surrounding lexical context.
const obj = {
  name: 'Bob',
  greet: () => {
    console.log(this.name); // this refers to the surrounding context (window, in this case)
  }
};
obj.greet(); // Output: undefined (if in a browser environment)

### Arrow functions

# function and method 

# function
function greet() {
  console.log('Hello, world!');
}

greet();

# Functions can also be assigned to variables or passed 
const greet = function() {
  console.log('Hello!');
};

greet(); 

# Method
A method is a function that is associated with an object. Methods are functions that are properties of an object and are typically invoked through that object.
const person = {
  name: 'Alice',
  greet: function() {
    console.log(`Hello, ${this.name}!`);
  }
};

person.greet(); // Output: Hello, Alice!

# Which keywords are used to handle exceptions in Javascript?
JavaScript, exceptions are handled using the try, catch, finally, and throw keywords.
try {
  // Code that may throw an error
  let result = riskyOperation();
}


### == and === difference

### What is JavaScript Hoisting and understand the examples?
Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compile phase, before the code is executed. 
This means that variables and functions can be referenced before they are declared in the code, but their values (for variables) are not hoisted—only their declarations are.

# Variable Hoisting:
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5

# Variable Hoisting (with let and const)
let and const do not allow accessing the variable before its declaration.
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

# Function Hoisting:
Function declarations (using the function keyword) are hoisted in their entirety, meaning both the function's definition and its body are moved to the top.

# Function Hoisting (with Function Declaration)
console.log(greet()); // Output: "Hello!"
function greet() {
  return "Hello!";
}

# Function Hoisting (with Function Expression)
console.log(sayHello()); // TypeError: sayHello is not a function
var sayHello = function() {
  return "Hello!";
};

# Hoisting with let and const in Functions
function test() {
  console.log(a); // Output: ReferenceError: Cannot access 'a' before initialization
  let a = 20;
}
test();

# What is Callback
A callback function is simply a function passed as an argument to another function.
The callback function is executed after the outer function finishes its execution.
Used for asynchronous operations and events.

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

### What is meant by promises?
In JavaScript, a promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 
Promises provide a cleaner and more structured way to handle asynchronous operations compared to traditional callbacks, addressing issues like callback hell and improving error handling.

# A promise has three states:
Pending: The initial state; the operation is still ongoing.
Fulfilled: The operation was successful, and the promise is resolved with a value.
Rejected: The operation failed, and the promise is rejected with a reason (error).

A promise is created using the Promise constructor, which takes a single argument: a function called the executor. 
The executor function has two parameters:

resolve: A function to be called when the asynchronous operation is successful.
reject: A function to be called when the asynchronous operation fails.

 const myPromise = new Promise((resolve, reject) => {
  let success = true; // Simulating success or failure

  if (success) {
    resolve('Operation was successful!');
  } else {
    reject('Operation failed.');
  }
});

Using Promises: then, catch, and finally
then(): Handles the resolved value of the promise (success case).
catch(): Handles errors (rejected promise).
finally(): Executes code regardless of whether the promise was fulfilled or rejected.

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Returns a promise
  })
  .then((data) => {
    console.log(data); // Log the fetched data
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });
