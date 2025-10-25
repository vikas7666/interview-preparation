## Closures

In JavaScript, closures are functions that "remember" the variables from their outer lexical environment, even after that outer function has finished executing.

A closure is an advanced concept that involves a function and any other data the function can access.
So, a Closure is a function that uses variables from the outer lexical scope. 
The interpreter considers any arguments you pass to functions from the global space.
If a function only relies on its internal values and parameters, it's not considered a closure. Remember that functions can access values from other external functions considered closures.

function createCaffeineAddict(coffeeType) {
    const addiction = `addicted to ${coffeeType}`;
    return function getHigh() {
        const highMessage = `Feeling wired and ${addiction}!`;
        console.log(highMessage);
    };
}
const espressoJunkie = createCaffeineAddict('espresso');
const latteLover = createCaffeineAddict('latte');
espressoJunkie();
latteLover();

> What is required for a closure?
A closure happens when:
A function (inner) is defined inside another function (outer).
The inner function uses variables declared in the outer function.
The inner function persists beyond the execution of the outer function.

function outerFunction() {
  let name = "Vikas";
  function greet() {
    console.log(`Hello, ${name}`);
  }
  greet(); // Closure: 'greet' uses 'name' from outer scope
}

outerFunction(); // Runs greet, closure used immediately

###############################################################################################################################

# JavaScript Inheritances

## Function Scope, Block Scope and Lexical ScopeThe ECMAScript specification outlines three key types of scope:

**Function Scope**: Variables declared within a function using var are only accessible within that function. This scope isolates variables from being accessed outside of the function where they are declared.

**Block Scope**: Introduced with ES6, variables declared with let and const are block-scoped. This means they are only accessible within the specific block {} in which they are defined, such as inside loops or conditionals.

**Lexical Scope**: Refers to how variable access is determined based on the physical location of the variables in the code. **Functions are lexically scoped, meaning that they can access variables from their parent scope**.