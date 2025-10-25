// https://github.com/leonardomso/33-js-concepts?tab=readme-ov-file#1-call-stack
/* 
The call stack is a mechanism that the JavaScript interpreter uses to keep track of function execution within a program. In JavaScript, functions are executed in the order they are called. The call stack follows the Last In, First Out (LIFO) principle, meaning that the last function pushed onto the stack is the first one to be executed.

According to the ECMAScript specification, the call stack is defined as part of the execution context. Whenever a function is called, a new execution context is created and placed at the top of the stack. Once the function completes, its execution context is removed from the stack, and control returns to the previous context. This helps manage synchronous code execution, as each function call must complete before the next one can begin



*/