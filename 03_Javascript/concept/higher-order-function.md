https://www.freecodecamp.org/news/higher-order-functions-in-javascript-explained/

## Higher order functions are functions, that take one or more functions as arguments, or return a function as their result.

When working with arrays, you can use the
# Different types of higher order functions like map, filter, reduce , sort()

When working with Object, you can use the
# Object.entries() function to create a new array from an object.

When working with functions,
# You can use the compose() function to create complex functions from simpler ones.

# Why higher order function came in picture 


So, suppose I want you to write a function that calculates the area and diameter of a circle.

const radius = [1, 2, 3];

// function to calculate area of the circle
const calculateArea =  function (radius) {
    const output = [];
    for(let i = 0; i< radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}

// function to calculate diameter of the circle
const calculateDiameter =  function (radius) {
    const output = [];
    for(let i = 0; i< radius.length; i++){
        output.push(2 * radius[i]);
    }
    return output;
}

console.log(calculateArea(radius));
console.log(calculateDiameter(radius));


# callback function basic e.g

## Callback function, passed as a parameter in the higher order function
function callbackFunction(){
    console.log('I am  a callback function');
}

// higher order function
function higherOrderFunction(func){
    console.log('I am higher order function')
    func()
}

higherOrderFunction(callbackFunction);

// Output 
I am higher order function
I am  a callback function

*******************************************************************************************

const radius = [1, 2, 3];

// logic to clculate area
const area = function(radius){
    return 3.14 * radius * radius
}

// logic to calculate diameter
const diameter = function(diameter){
   return  radius * radius
}

function calculate(radius, logic){
    let product = [];
    for(let i = 0; i<radius.length; i++){
        product.push(logic(radius[i]))
    }
    return product
}

console.log(calculate(radius,area))

******************************************************************************************************************

# When working with arrays, you can use the map(), reduce(), filter(), and sort() functions to manipulate and transform data in an array.

# When working with objects, you can use the Object.entries() function to create a new array from an object.

# When working with functions, you can use the compose() function to create complex functions from simpler ones.

# Map Method()

# map method will take array of values and applies a transformation to each value in array.
It does not change a original array. It will help to create a new Array.

# How to create our own map method 

function myMap(arr, callback) {
    const result = [];

for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr)); // like Array.map: pass value, index, and original array
}
    return result;
}

const arr = [1, 2, 3, 4, 5];

# es5
const output = myMap(numbers, function(item) {
    return item + 10;
});
console.log(output); // [11, 12, 13, 14]

# es6

const output2 = myMap(arr, item => item * 2);
console.log(output2); // [2, 4, 6, 8]


const users = [
    {firstName: 'John', lastName: 'Doe', age: 25},
    {firstName: 'Jane', lastName: 'Doe', age: 30},
    {firstName: 'Jack', lastName: 'Doe', age: 35},
    {firstName: 'Jill', lastName: 'Doe', age: 40},
    {firstName: 'Joe', lastName: 'Doe', age: 45},
]

console.log(users.map((item) => item.firstName + ' ' + item.lastName))

************************************************************************************************************************************
let output = myMap(arr, function(item){
    return item + 10;
})

console.log(output)

const output2 = myMap(arr, item => item * 2);
console.log(output2); 

*************************************************************************************************************************************
How to Use filter() in JavaScript

The filter() function takes an array and returns a new array with only the values that meet certain criteria.
It also does not mutate the original array. It is often used to select a subset of data from an array based on certain criteria.

function myFilter(arr, callback) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }

    return result;
}

const users = [
    {firstName: 'John', lastName: 'Doe', age: 25},
    {firstName: 'Jane', lastName: 'Doe', age: 30},
    {firstName: 'Jack', lastName: 'Doe', age: 35},
    {firstName: 'Jill', lastName: 'Doe', age: 40},
    {firstName: 'Joe', lastName: 'Doe', age: 45},
]

function myFilter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

let maxAge =  myFilter(users, function(item) {
    return item.age > 15;
});
console.log(maxAge)

**************************************************************************************************************************************************** 
Reduce Method
When to use reduce method ??
when you want to perform some operation on the elements of an array and return a single value as a result. 
The "single value" refers to the accumulated result of repeatedly applying a function to the elements of a sequence.
For example, you might use reduce() to sum up all the elements in an array, to find the maximum or minimum value, 
to merge multiple objects into a single object, or to group different elements in an array.