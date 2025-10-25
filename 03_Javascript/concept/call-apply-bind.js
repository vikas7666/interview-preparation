//  call 
/*
 The call() method allows you to call a function with a specified this value and arguments provided individually. 
The first argument to call() sets the this value for the function being called,  and the remaining arguments are passed to the function as arguments.
 */
// =============================
// 1. Basic Use of call()
// =============================
function sayHello() {
    console.log("Hello, I am " + this.name);
}

const user1 = { name: "Vikas" };
sayHello.call(user1); // Expected: Hello, I am Vikas


// =============================
// 2. Passing Arguments
// =============================
//  greeting = 'Hi'  punctuation = '!'
function greet(greeting, punctuation) {
    console.log(`${greeting}, I am ${this.name}${punctuation}`);
}

const user2 = { name: "Alice" };
greet.call(user2, "Hi", "!"); // Expected: Hi, I am Alice!


// =============================
// 3. Borrowing Method
// =============================
const personA = {
    name: "Rahul",
    introduce: function () {
        console.log("My name is " + this.name);
    }
};

const personB = { name: "Sneha" };

personA.introduce.call(personB); // Expected: My name is Sneha

// ============================================================
function sneha(surname) {
    console.log(`My name is ${this.name} and surname is ${surname} `)
}

let obj1 = {
    name: 'Ved'
}

sneha.call(obj1, 'shukla') // My name is Ved and surname is shukla 


// ***********************************************************************************************************************

// apply(); (Apply Method)

/* 
The apply() method is similar to the call() method, but it takes an array of arguments instead of individual arguments. 
The first argument to apply() sets the this value for the function being called, 
and the second argument is an array of arguments to pass to the function.

*/

function add(a, b) {
    return a + b;
}
let numbers = [1, 2];

console.log(add.apply(null, numbers)); // Output: 3

// In this example, we define an add() function that takes two parameters. We also define an array of numbers [1, 2]. We then call the add() function with the apply() method, passing in null as the this value and numbers as the array of arguments.


// ###############################################################################################################################

// bind(); (Bind Method)

/* The bind() method returns a new function with a specified this value and any arguments that are passed to it.
The bind() method does not call the function immediately but instead returns a new function that can be called later. */

let person = {
    name: "Vikas",
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
};

let greetFunc = person.greet.bind(person);  // Creates a new function with this = person

greetFunc(); // Output: Hello, my name is Vikas
