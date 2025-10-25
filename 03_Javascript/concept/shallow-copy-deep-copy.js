// Shallow Copy
/* A shallow copy occurs when you copy the reference of an object to a new variable.
 In this process, only the top-level properties are copied, while nested objects or arrays still reference the original memory location. 
 This means that if you change the nested properties in one object, those changes will reflect in the other because they share the same memory reference.
  */

 let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}

console.log("Employee=> ", employee);
let newEmployee  = {...employee}    // This is not shallow copy bcz here we are giving just a reference
console.log("New Employee=> ", newEmployee);

console.log("---------After modification----------");
newEmployee.ename = "Beck";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);

/* 
Employee=>  { eid: 'E102', ename: 'Jack', eaddress: 'New York', salary: 50000 }
New Employee=>  { eid: 'E102', ename: 'Jack', eaddress: 'New York', salary: 50000 }
---------After modification----------
Employee=>  { eid: 'E102', ename: 'Jack', eaddress: 'New York', salary: 50000 }
New Employee=>  { eid: 'E102', ename: 'Beck', eaddress: 'New York', salary: 50000 }

*/

// Ways to create a shallow copy 

let copy = { ...employee };  // Using Spread Opertor 
let copy1 = Object.assign({}, employee);

console.log('copy1', copy1)
// copy1 { eid: 'E102', ename: 'Jack', eaddress: 'New York', salary: 50000 }


//  Deep Copy

/* 
A deep copy, on the other hand, creates a completely independent copy of the object, including all nested objects or arrays. This ensures that changes made to one object do not affect the other. Each object is stored in a separate memory location, making them entirely independent.
*/

let employee1 = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}
console.log("=========Deep Copy========");

let newEmployee1 = JSON.parse(JSON.stringify(employee)); // JSON.parse(JSON.stringify)
console.log("Employee=> ", employee);

console.log("New Employee1=> ", newEmployee1);
console.log("---------After modification---------");
newEmployee1.ename = "Beck";
newEmployee1.salary = 70000;
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee1);

/* 
=========Deep Copy========
Employee=>  { eid: 'E102', ename: 'Jack', eaddress: 'New York', salary: 50000 }
New Employee=>  { eid: 'E102', ename: 'Jack', eaddress: 'New York', salary: 50000 }
---------After modification---------
Employee=>  { eid: 'E102', ename: 'Jack', eaddress: 'New York', salary: 50000 }
New Employee=>  { eid: 'E102', ename: 'Beck', eaddress: 'New York', salary: 70000 }
*/


/* 
Explanation: Here the new object is created using the JSON.parse() and JSON.stringify() methods of JavaScript.
JSON.stringify() takes a JavaScript object as an argument and then transforms it into a JSON string. This JSON string is passed to the JSON.parse() method which then transforms it into a JavaScript object.

*/

/* 
Limitations of JSON.parse() and JSON.stringify()
While the JSON approach is simple, it has its limitations:

Non-Serializable Properties: Functions, undefined, and certain other non-serializable values are lost when using JSON.stringify().
Circular References: Objects with circular references will cause JSON.stringify() to throw an error.
Date Objects: Dates are converted to strings during the process, losing their original type.
*/

// Lodash To Deep Copy

const lodash = require('lodash');
let employee2 = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000,
    details: function () {
        return "Employee Name: " 
            + this.ename + "-->Salary: " 
            + this.salary;
    }
}

let deepCopy = lodash.cloneDeep(employee);
console.log("Original Employee Object");
console.log(employee);
console.log("Deep Copied Employee Object");
console.log(deepCopy);
deepCopy.eid = "E103";
deepCopy.ename = "Beck";
deepCopy.details = function () {
    return "Employee ID: " + this.eid 
        + "-->Salary: " + this.salary;
}
console.log("----------After Modification----------");
console.log("Original Employee Object");
console.log(employee);
console.log("Deep Copied Employee Object");
console.log(deepCopy);
console.log(employee.details());
console.log(deepCopy.details());