## Is JavaScript Synchronous or Asynchronous?

### Synchronous JavaScript
By default, JavaScript executes code synchronously, meaning each statement is executed one after the other, in the order they appear.

### Asynchronous JavaScript
JavaScript achieves asynchronous behavior using:
- **Callbacks**
- **Promises**
- **Async/Await**

### How Does Asynchronous JavaScript Work?
JavaScript uses the **event loop** to handle asynchronous tasks, allowing non-blocking execution without halting the main thread.

#### Key Concepts:
- **Non-blocking I/O**
- **Mechanisms for Asynchronous Code:**
  - **Callbacks:** Functions executed after a task is complete (commonly used in older code).
  - **Promises:** Provide a cleaner way to handle asynchronous operations, supporting `.then()` and `.catch()`.
  - **Async/Await:** Syntactic sugar for promises that makes asynchronous code look synchronous.

---

## Difference Between `null` and `undefined`
- **`null`:** An assignment value indicating an explicitly empty or non-existent value.
- **`undefined`:** A variable that has been declared but not yet assigned a value.

---

## Difference Between Undeclared and Undefined Variables
- **Undeclared Variables:** Variables that are not declared at all.
- **Undefined Variables:** Variables that are declared but not assigned a value.

---

## What Are Global Variables?
In JavaScript, global variables are declared outside any function or block scope and can be accessed anywhere in the program.

---

## Difference Between `var`, `let`, and `const`

### `var`
- Scope: Functional or global.
- Can be updated and re-declared in the same scope.
- Declared without initialization and initialized to `undefined`.
- Hoisted with an initial value of `undefined`.

### `let`
- Scope: Block.
- Can be updated but not re-declared in the same scope.
- Declared without initialization but throws `ReferenceError` if accessed before initialization.
- Hoisted but remains in the **temporal dead zone** until initialized.

### `const`
- Scope: Block.
- Cannot be updated or re-declared.
- Must be initialized during declaration.
- Hoisted but remains in the temporal dead zone until initialized.

---

## The `this` Keyword in JavaScript

The `this` keyword refers to the object that is currently executing a function.

### Behavior of `this`:
1. **Global Scope:** Refers to the global object (e.g., `window` in browsers).
2. **Inside a Method:** Refers to the object that owns the method.
3. **Inside a Function:** Refers to the global object (`undefined` in strict mode).
4. **Arrow Functions:** Inherits `this` from the surrounding lexical context.
5. **Event Listeners:** Refers to the element that triggered the event.
6. **Using `call()`, `apply()`, and `bind()`:** Allows explicit assignment of `this`.

**Examples:**
```js
console.log(this); // Global scope: window object in browsers

const obj = {
  name: 'Alice',
  greet() {
    console.log(this.name); // 'this' refers to obj
  }
};
obj.greet(); // Output: Alice

const arrowFunc = () => console.log(this);
arrowFunc(); // Inherits 'this' from surrounding context
