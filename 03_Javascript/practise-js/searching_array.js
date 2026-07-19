// ============================================
// indexOf, lastIndexOf, findIndex — reference notes
// ============================================

let list = [
    'bacon',   // 0
    'eggs',    // 1
    'butter',  // 2
    'milk',    // 3
    'bread',   // 4
    'bacon',   // 5
    'egg',     // 6
    { text: 'bacon', cost: 3, need: true }, // 7
];

// indexOf -> searches for an EXACT match (strict equality, ===)
// works for primitives (strings/numbers), NOT for objects
console.log(list.indexOf('butter'));  // 2
console.log(list.indexOf('sauce'));   // -1 (not found)

// indexOf(value, fromIndex) -> start searching from a given index
// note: 'eggs' (index 1) !== 'egg' (index 6) -- different strings!
console.log(list.indexOf('egg', 1));  // 6

// lastIndexOf -> searches from the END backward, returns the
// LAST matching index. 'bacon' appears at index 0 and 5.
console.log(list.lastIndexOf('bacon')); // 5


// ============================================
// findIndex -> takes a callback, so it CAN search inside objects
// (indexOf can't, since it only does strict equality on the
// whole element, not a property inside it)
// ============================================

console.log(
    list.findIndex((item) => {
        return item.text === 'bacon';
    })
); // 7

// same thing, more concise arrow function (implicit return)
// IMPORTANT: if you add curly braces `{ }` here, you MUST also add
// an explicit `return` -- otherwise it returns undefined and
// findIndex will never match anything
console.log(list.findIndex((item) => item.cost === 3)); // 7

// common mistake to watch for:
// (item) => { item.cost === 3 }   <-- BROKEN, no return, always undefined
// (item) => item.cost === 3        <-- correct, implicit return
// (item) => { return item.cost === 3 }  <-- also correct, explicit return


// ============================================
// Quick comparison table
// ============================================
// indexOf(val)        -> exact match only, primitives, returns first match index
// lastIndexOf(val)    -> exact match only, primitives, returns LAST match index
// findIndex(callback) -> custom logic, works on objects, returns first match index
// find(callback)      -> like findIndex but returns the ELEMENT itself, not the index