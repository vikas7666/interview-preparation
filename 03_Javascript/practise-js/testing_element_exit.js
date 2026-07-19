// ============================================
// some / every, merging, copying, join, map, filter — reference
// ============================================

let number = [2, 9, 23, 54, 971];

let list2 = [
    { text: 'milk', cost: 4, need: false },
    { text: 'egg', cost: 10, need: true },
    { text: 'butter', cost: 5, need: false },
    { text: 'bacon', cost: 3, need: true },
];

// includes -> returns true/false, exact match only
// checks for an exact array element (primitive or the same object reference).
console.log(number.includes(23)); // true

// some -> true if callback returns true for AT LEAST ONE element
console.log(list2.some((item) => item.need)); // true

// every -> true ONLY if callback returns true for ALL elements
// (9 is odd, so this is false)
console.log(number.every((item) => item % 2 === 0)); // false


// ============================================
// Merging arrays
// ============================================

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 8, 10];
let letter = ['a', 'b', 'c', 'd'];

let merge1 = odd.concat(even, letter);      // concat -> returns NEW array
let alphanumeric = [...odd, ...even, ...letter]; // spread -> same result, more common in modern code

console.table(merge1);


// ============================================
// Copying arrays
// ============================================

// slice(start, end) -> returns a NEW array (shallow copy), does NOT mutate original
let copy = list2.slice(0, 3);
console.log(copy === list2); // false -- different array references

// gotcha: slice is a SHALLOW copy. Objects inside are still shared
// by reference, so copy[0].cost = 99 would also change list2[0].cost


// ============================================
// slice vs splice -- easy to mix up, keep this straight:
// ============================================
// slice(start, end)        -> COPIES, does not mutate, returns new array
// splice(start, count, ..) -> CUTS/inserts, MUTATES original, returns removed items


// ============================================
// Array -> string with join
// ============================================

let list = ['bacon', 'egg', 'butter', 'milk', 'bread'];

console.log(list.join());      // "bacon,egg,butter,milk,bread" (default separator: comma)
console.log(list.join(' '));   // "bacon egg butter milk bread"
let html = list.join('<br/>'); // "bacon<br/>egg<br/>butter<br/>milk<br/>bread"
// document.getElementById('list').innerHTML = html;

// GOTCHA: if you assign an array DIRECTLY to innerHTML (no .join()),
// it doesn't error -- JS auto-coerces it via toString(), which joins
// with commas by default. e.g.:
//   document.getElementById('list').innerHTML = ['<li>a</li>','<li>b</li>'];
// actually renders: "<li>a</li>,<li>b</li>"  (note the stray comma)
// This is why .join('') is used deliberately when building HTML strings.


// ============================================
// Transforming with map, then filter + map + join chained
// ============================================

let list3 = [
    { text: 'milk', cost: 4, need: false },
    { text: 'egg', cost: 10, need: true },
    { text: 'butter', cost: 5, need: false },
    { text: 'bacon', cost: 3, need: true },
];

let listElement = list3.map(({ text }) => `<li>${text}</li>`);
console.log(listElement);
// ['<li>milk</li>', '<li>egg</li>', '<li>butter</li>', '<li>bacon</li>']

// document.getElementById('list').innerHTML = listElement.join('');

// filter -> keep only items where need is true, then map -> transform each
let filteredItem = list3
    .filter((item) => item.need)
    .map(({ text, cost }) => `<li>${text} $${cost} </li>`);
console.log('filteredItem', filteredItem);
// ['<li>egg $10 </li>', '<li>bacon $3 </li>']

// filter with a condition, then map, then join into one string
let filteredCost = list3
    .filter((item) => item.cost > 5)
    .map(({ text, cost }) => `<li>${text} $${cost} </li>`)
    .join();
console.log('filteredCost', filteredCost);
// "<li>egg $10 </li>"  (only egg has cost > 5; butter's cost is exactly 5, excluded)