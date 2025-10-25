// Class Inheritance

// https://www.programiz.com/javascript/inheritance

/* 
Inheritance enables you to define a class that takes all the functionality from a parent class and allows you to add more.
Using class inheritance, a class can inherit all the methods and properties of another class.
Inheritance is a useful feature that allows code reusability.
To use class inheritance, you use the extends keyword. For example,
*/

// parent class
class Person { 
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

// inheriting parent class
class Student extends Person {

}

let student1 = new Student('Jack');
student1.greet();