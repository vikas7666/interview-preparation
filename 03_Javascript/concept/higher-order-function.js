/*
===============================================================================
                    HIGHER ORDER FUNCTIONS (HOF)
===============================================================================

A Higher Order Function (HOF) is a function that does at least ONE of these:

1. Accepts a function as an argument.
2. Returns a function.

JavaScript functions are first-class values, which means functions can be:

- assigned to variables
- passed as arguments
- returned from functions
- stored in arrays/objects

Examples of Higher Order Functions:

- Array.prototype.map()
- Array.prototype.filter()
- Array.prototype.reduce()
- Array.prototype.forEach()
- Array.prototype.sort()
- setTimeout()
- Promise.prototype.then()

/*
===============================================================================
WHY HIGHER ORDER FUNCTIONS?
===============================================================================

HOFs help us separate:

    ITERATION / CONTROL FLOW
            +
       BUSINESS LOGIC

Instead of writing the same loop multiple times, we write the loop once and pass different logic through a callback.

This improves:

- Reusability
- Readability
- Maintainability
- Separation of concerns
- DRY (Don't Repeat Yourself)
*/


const radii = [1, 2, 3, 4];


// -----------------------------------------------------------------------------
// Different business logic
// -----------------------------------------------------------------------------

const area = (radius) => Math.PI * radius ** 2;

const diameter = (radius) => 2 * radius;

const circumference = (radius) => 2 * Math.PI * radius;


// -----------------------------------------------------------------------------
// Higher Order Function
// -----------------------------------------------------------------------------

function calculate(values, callback) {
    const result = [];

    for (const value of values) {
        result.push(callback(value));
    }

    return result;
}


console.log("Area:", calculate(radii, area));

console.log("Diameter:", calculate(radii, diameter));

console.log("Circumference:", calculate(radii, circumference)
);


/*
Output:

Area:
[3.14159..., 12.566..., 28.274..., 50.265...]

Diameter:
[2, 4, 6, 8]

Circumference:
[6.283..., 12.566..., 18.849..., 25.132...]


IMPORTANT:

calculate()
    |
    | controls iteration
    ↓
callback
    |
    | controls business logic
    ↓
result
*/


/*
===============================================================================
                         CALLBACK FUNCTION
===============================================================================

A callback is simply a function passed as an argument to another function.
*/


function callbackFunction() {
    console.log("I am a callback function.");
}


function higherOrderFunction(callback) {
    console.log("I am a Higher Order Function.");

    callback();
}


higherOrderFunction(callbackFunction);


/*
Output:

I am a Higher Order Function.
I am a callback function.


Here:

callbackFunction()
        ↓
     callback
        ↓
higherOrderFunction()


callbackFunction = Callback
higherOrderFunction = Higher Order Function
*/


/*
===============================================================================
                         CUSTOM map()
===============================================================================

map()

- Returns a NEW array.
- Does NOT modify the original array itself.
- Transforms every element.
- Usually returns the same number of elements.
- Callback receives:

    (value, index, array)
*/


function myMap(array, callback) {
    const result = [];
    for (let index = 0; index < array.length; index++) {
        result.push(callback(array[index], index, array));
    }
    return result;
}


const numbers = [1, 2, 3, 4, 5];


// ES5 style

const addTen = myMap(numbers,
    function (item) {
        return item + 10;
    }
);

console.log(addTen);

// [11, 12, 13, 14, 15]


// ES6 style

const double = myMap(
    numbers,
    item => item * 2
);

console.log(double);

// [2, 4, 6, 8, 10]


/*
===============================================================================
                         REAL map() EXAMPLE
===============================================================================
*/


const users = [

    {
        firstName: "John",
        lastName: "Doe",
        age: 25
    },

    {
        firstName: "Jane",
        lastName: "Doe",
        age: 30
    },

    {
        firstName: "Jack",
        lastName: "Doe",
        age: 35
    },

    {
        firstName: "Jill",
        lastName: "Doe",
        age: 40
    }

];


const fullNames = users.map(
    user => `${user.firstName} ${user.lastName}`
);


console.log(fullNames);


/*
Output:

[
    "John Doe",
    "Jane Doe",
    "Jack Doe",
    "Jill Doe"
]


IMPORTANT:

map() does not mutate the original array.

However, the callback can mutate objects inside the array.

Example:

users.map(user => {
    user.age++;
    return user;
});

The array structure is not changed by map(),
but the referenced user objects are mutated.
*/


/*
===============================================================================
                         CUSTOM filter()
===============================================================================

filter()

- Returns a NEW array.
- Does NOT modify the original array itself.
- Selects elements based on a condition.
- Can return fewer elements.
- Callback receives:

    (value, index, array)

If callback returns a truthy value,
the element is included in the result.
*/


function myFilter(array, callback) {

    const result = [];

    for (let index = 0; index < array.length; index++) {

        if (
            callback(
                array[index],
                index,
                array
            )
        ) {
            result.push(array[index]);
        }

    }

    return result;
}


const adults = myFilter(
    users,
    user => user.age >= 30
);


console.log(adults);


/*
Output:

[
    { firstName: "Jane", lastName: "Doe", age: 30 },
    { firstName: "Jack", lastName: "Doe", age: 35 },
    { firstName: "Jill", lastName: "Doe", age: 40 }
]


Mental model:

Input
[1, 2, 3, 4]

      ↓

   filter()

      ↓

Keep values matching condition

      ↓

Output
[2, 4]
*/


/*
===============================================================================
                         CUSTOM reduce()
===============================================================================

reduce()

Used when multiple values need to be combined into ONE final result.

Common use cases:

- Sum
- Maximum / Minimum
- Counting
- Grouping
- Building objects
- Flattening arrays
- Aggregation

Callback receives:

(accumulator, currentValue, index, array)

Signature:

reduce(callback, initialValue)
*/


function myReduce(
    array,
    callback,
    initialValue
) {

    // Check whether an initial value was actually provided.
    const hasInitialValue = arguments.length >= 3;


    // Native reduce() throws an error when:
    // - array is empty
    // - no initial value is provided

    if (
        array.length === 0 &&
        !hasInitialValue
    ) {
        throw new TypeError(
            "Reduce of empty array with no initial value"
        );
    }


    let accumulator;
    let startIndex;


    if (hasInitialValue) {

        accumulator = initialValue;
        startIndex = 0;

    } else {

        accumulator = array[0];
        startIndex = 1;

    }


    for (
        let index = startIndex;
        index < array.length;
        index++
    ) {

        accumulator = callback(
            accumulator,
            array[index],
            index,
            array
        );

    }


    return accumulator;
}


// Sum

const sum = myReduce(
    numbers,
    (accumulator, currentValue) =>
        accumulator + currentValue,
    0
);

console.log(sum);

// 15


// Maximum

const max = myReduce(
    numbers,
    (accumulator, currentValue) =>
        Math.max(accumulator, currentValue)
);

console.log(max);

// 5


/*
IMPORTANT:

reduce() does NOT necessarily return a number.

It can return:

- number
- string
- object
- array
- Map
- Set
- any other value
*/


/*
===============================================================================
                         Object.entries()
===============================================================================

Object.entries() is NOT a Higher Order Function.

It converts an object into an array of [key, value] pairs.
*/


const person = {

    name: "John",
    age: 30,
    city: "London"

};


console.log(
    Object.entries(person)
);


/*
Output:

[
    ["name", "John"],
    ["age", 30],
    ["city", "London"]
]


Object.entries() becomes very useful when combined with HOFs.
*/


const filteredPerson = Object.entries(person)
    .filter(([key]) => key !== "age")
    .map(([key, value]) => `${key}: ${value}`);


console.log(filteredPerson);


/*
===============================================================================
                         FUNCTION COMPOSITION
===============================================================================

Function composition means combining multiple functions
to create a new function.

compose()

Conventionally executes functions:

RIGHT → LEFT
*/


const compose =
    (...functions) =>
        (value) =>
            functions.reduceRight(
                (accumulator, fn) =>
                    fn(accumulator),
                value
            );


const add2 = x => x + 2;

const square = x => x ** 2;


const composedFunction = compose(
    square,
    add2
);


console.log(
    composedFunction(3)
);


/*
Execution:

3
 ↓
add2()
 ↓
5
 ↓
square()
 ↓
25


Equivalent to:

square(add2(3))


Result:

25
*/


/*
===============================================================================
                         FUNCTION PIPELINE
===============================================================================

pipe()

Conventionally executes functions:

LEFT → RIGHT
*/


const pipe =
    (...functions) =>
        (value) =>
            functions.reduce(
                (accumulator, fn) =>
                    fn(accumulator),
                value
            );


const pipedFunction = pipe(
    add2,
    square
);


console.log(
    pipedFunction(3)
);


/*
Execution:

3
 ↓
add2()
 ↓
5
 ↓
square()
 ↓
25
*/


/*
===============================================================================
               HOF THAT RETURNS ANOTHER FUNCTION
===============================================================================

A Higher Order Function does not necessarily have to ACCEPT a function.

It can also RETURN a function.
*/


function multiplier(factor) {

    return function (value) {

        return value * factor;

    };

}


const doubleValue = multiplier(2);

const tripleValue = multiplier(3);


console.log(
    doubleValue(5)
);

// 10


console.log(
    tripleValue(5)
);

// 15


/*
Execution:

multiplier(2)
      ↓
returns function
      ↓
doubleValue(5)
      ↓
10


This pattern is closely related to CLOSURES.
*/


/*
===============================================================================
                     map() vs filter() vs reduce()
===============================================================================

map()

Purpose:
Transform every element.

Input:
[1, 2, 3]

Output:
[2, 4, 6]


filter()

Purpose:
Select matching elements.

Input:
[1, 2, 3, 4]

Output:
[2, 4]


reduce()

Purpose:
Accumulate multiple values into one result.

Input:
[1, 2, 3, 4]

Output:
10
*/


/*
===============================================================================
                         map() vs forEach()
===============================================================================

map()

- Returns a NEW array.
- Used for transformation.
- Chainable.


forEach()

- Returns undefined.
- Primarily used for side effects.
- Does not create a transformed array.

Rule of thumb:

Need a transformed array?
→ map()

Need to perform an action?
→ forEach()
*/


const mapped = numbers.map(
    number => number * 2
);

console.log(mapped);

// [2, 4, 6, 8, 10]


const forEachResult = numbers.forEach(
    number => console.log(number)
);

console.log(forEachResult);

// undefined


/*
Avoid using map() only for side effects.

BAD:

numbers.map(number => {
    console.log(number);
});


BETTER:

numbers.forEach(number => {
    console.log(number);
});
*/


/*
===============================================================================
                            METHOD CHAINING
===============================================================================

HOFs can be composed together.

Example:

Filter users first,
then transform them into full names.
*/


const namesOfAdults = users
    .filter(user => user.age >= 30)
    .map(
        user => `${user.firstName} ${user.lastName}`
    );


console.log(namesOfAdults);


/*
Output:

[
    "Jane Doe",
    "Jack Doe",
    "Jill Doe"
]


Execution:

users
  ↓
filter()
  ↓
users with age >= 30
  ↓
map()
  ↓
full names
*/


/*
===============================================================================
                            TIME COMPLEXITY
===============================================================================

For an array containing n elements:

map()       → O(n)

filter()    → O(n)

reduce()    → O(n)

forEach()   → O(n)

sort()      → Typically O(n log n)

NOTE:

sort() complexity is implementation-dependent,
so O(n log n) should not be treated as an absolute guarantee.

Also remember:

Time complexity ≠ Space complexity.

map(), filter(), etc. generally allocate a new result array,
which requires additional O(n) space.
*/


/*
===============================================================================
                       COMMON INTERVIEW QUESTIONS
===============================================================================


Q1. What is a Higher Order Function?

A:

A function that accepts another function as an argument,
returns a function, or both.


-------------------------------------------------------------------------------

Q2. What is a callback?

A:

A function passed as an argument to another function.


-------------------------------------------------------------------------------

Q3. Why use Higher Order Functions?

A:

They help us:

- eliminate duplicate code
- separate control flow from business logic
- improve reusability
- improve readability
- compose functionality


-------------------------------------------------------------------------------

Q4. Does map() modify the original array?

A:

No.

map() returns a new array and does not modify the original
array structure.

However, the callback can mutate objects referenced by the array.


-------------------------------------------------------------------------------

Q5. Does filter() modify the original array?

A:

No.

filter() returns a new array containing the selected elements.


-------------------------------------------------------------------------------

Q6. What does reduce() return?

A:

The final accumulated value.

It can be any type of value, not just a number.


-------------------------------------------------------------------------------

Q7. Difference between map() and filter()?

A:

map():

- transforms every element
- returns a new array
- normally maintains the same length


filter():

- selects elements
- returns a new array
- can return fewer elements


-------------------------------------------------------------------------------

Q8. Difference between map() and forEach()?

A:

map():

- returns a new array
- used for transformation


forEach():

- returns undefined
- primarily used for side effects


-------------------------------------------------------------------------------

Q9. What are the callback parameters?

map():

(value, index, array)


filter():

(value, index, array)


reduce():

(accumulator, currentValue, index, array)


-------------------------------------------------------------------------------

Q10. Can a Higher Order Function return another function?

A:

Yes.

A function is also a HOF when it returns another function.


Example:

function multiplier(factor) {
    return value => value * factor;
}


-------------------------------------------------------------------------------

Q11. What is the difference between compose() and pipe()?

A:

compose():

RIGHT → LEFT


pipe():

LEFT → RIGHT


-------------------------------------------------------------------------------

Q12. Is Object.entries() a Higher Order Function?

A:

No.

Object.entries() converts an object into an array
of [key, value] pairs.

It does not accept or return a function.
*/


/*
===============================================================================
                            QUICK CHEAT SHEET
===============================================================================

HOF
→ Accepts a function OR returns a function.

Callback
→ Function passed to another function.

map()
→ Transform every element.
→ Returns a new array.
→ O(n)

filter()
→ Select matching elements.
→ Returns a new array.
→ O(n)

reduce()
→ Accumulate values.
→ Returns one final result.
→ O(n)

forEach()
→ Perform side effects.
→ Returns undefined.
→ O(n)

sort()
→ Reorder elements.
→ Typically O(n log n).
→ Implementation-dependent.

compose()
→ Execute functions RIGHT → LEFT.

pipe()
→ Execute functions LEFT → RIGHT.

Object.entries()
→ Convert object → [key, value] pairs.
→ Not a HOF.

Closure
→ A function retains access to variables
  from its lexical scope.

===============================================================================


FINAL MENTAL MODEL

                    HIGHER ORDER FUNCTION
                             |
             +---------------+---------------+
             |                               |
       accepts function                returns function
             |                               |
         callback                       closure/
                                        factory
             |
     +-------+-------+
     |       |       |
    map   filter   reduce
     |
  iteration
     +
business logic


The real purpose of HOFs is not simply "avoiding loops".

The bigger idea is:

    Separate HOW something happens
    from
    WHAT should happen.

This gives us reusable, composable, and maintainable code.
*/
