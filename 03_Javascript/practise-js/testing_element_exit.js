// if element if exit then return boolean value true or false

let number = [2,9,23,54,971];

let list2 = [
    {text: 'milk', cost:4, need:false},
    {text: 'egg', cost:10, need:true},
    {text: 'butter', cost:5, need:false},
    {text: 'bacon', cost:3, need:true},
]
// console.log(number.includes(23))  // true

// some method which has callback function
// console.log(list2.some((item) => item.need));

// every method sab element ko check karataa hai if any element false thenn its return false

// let evenNumber = number.every((item) => item % 2 === 0);
// console.log("evenNumber",evenNumber)

// @@@@@@@@@@@@@@@ Merging array //////////////////////////

let odd = [1,3,5,7,9];
let even = [2,4,8,10];
let letter = ['a','b','c','d'];

// let merge1 = odd.concat(even);
//  let merge1 = odd.concat(even, letter);
// console.table(merge1)


let alphanumeric = [...odd, ...even, ...letter];

// console.table(alphanumeric)

// @@@@@@@@@@@@@@@ copying array //////////////////////////

// slice will copy array 
// slice will create a copy of array 

// yahaa pe difine kiya kitna copy karana hai
// let copy = list2.slice(0,3);

// console.table(copy === list2)  // false 

// suppose we don't want to copy entire array
// console.log(copy);


// @@@@ converting into string

let list = ['bacon','egg','butter','milk','bread']

// join by default string me convert karata hai and , comma 
// add karata hai 

// let html = list.join(); // bacon,egg,butter,milk,bread

// console.log(html)

// with space 
// let html = list.join(' '); //bacon egg butter milk bread
// console.log(html)

// Now lets break each word 
let html = list.join('<br/>'); 

// output 

/* bacon
egg
butter
milk
bread */

// console.log(html)


document.getElementById('list').innerHTML = html

/* Transforming array into another array */

let list3 = [
    {text: 'milk', cost:4, need:false},
    {text: 'egg', cost:10, need:true},
    {text: 'butter', cost:5, need:false},
    {text: 'bacon', cost:3, need:true},
]

let listElement = list3.map(({text,cost,need}) =>{
    return `<li>${text}</li>`
})
//output 

// document.getElementById('list').innerHTML = listElement;
/* ['<li>milk</li>', '<li>egg</li>', '<li>butter</li>', '<li>bacon</li>'] */

// suppose we want to convert array of string into single string

// ye pura single array me return hua hai ab esko indivisual array me change 
// karana hai 
document.getElementById('list').innerHTML = listElement.join('');

/* milk
egg
butter
bacon */

console.log(listElement)


/* Filtering an Array  */

let list4 = [
    {text: 'milk', cost:4, need:false},
    {text: 'egg', cost:10, need:true},
    {text: 'butter', cost:5, need:false},
    {text: 'bacon', cost:3, need:true},
]

let filteredItem =  list4.filter(item => item.need)
                    .map(({text,cost}) => `<li>${text} $${cost} </li>`)

 /*  ['<li>egg $10 </li>', '<li>bacon $3 </li>']
 0 : "<li>egg $10 </li>"
 1:"<li>bacon $3 </li>" */

console.log('filteredItem',filteredItem)

// filter me ham condition pass kar sakate hqi

let filtereCost = list4.filter(item => item.cost > 5)
                  .map(({text,cost,need}) => `<li>${text} $${cost} </li>`)
                  .join();

                  console.log("filtereCost",filtereCost);

                /*   ['<li>egg $10 </li>'] */

// after applying join method
/* filtereCost <li>egg $10 </li> */
                  