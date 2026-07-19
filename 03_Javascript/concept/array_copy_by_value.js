/**
 * How to Copy an Array by Value in JavaScript
 * ---------------------------------------------
 * Assigning an array directly (`const b = a`) only copies the *reference*,
 * so both variables point to the same array in memory — mutating one
 * mutates the other. The techniques below create a genuinely new array.
 *
 * Note: Spread, Array.from(), slice(), and map() all produce *shallow*
 * copies — nested objects/arrays inside are still shared by reference.
 * JSON parse/stringify (and structuredClone) produce *deep* copies.
 */

const original = [10, 20, 30, 40, 50];

// 1. Spread Operator — concise, fast, most common for shallow copies
const spreadCopy = [...original];
console.log('1. Spread operator:', spreadCopy);
console.log('   Same reference?', original === spreadCopy); // false

// 2. Array.from() — also accepts a map function as a 2nd arg
const arrayFromCopy = Array.from(original);
console.log('2. Array.from():', arrayFromCopy);
console.log('   Same reference?', original === arrayFromCopy); // false

// 3. Array.prototype.slice() — no arguments clones the whole array
const sliceCopy = original.slice();
console.log('3. slice():', sliceCopy);
console.log('   Same reference?', original === sliceCopy); // false

// 4. Array.prototype.map() — useful when you also want to transform values;
//    for a plain copy, just return the item unchanged
const mapCopy = original.map((item) => item);
console.log('4. map():', mapCopy);
console.log('   Same reference?', original === mapCopy); // false

// 5. JSON.parse(JSON.stringify()) — deep copy, but drops functions,
//    undefined, Symbols, Dates (become strings), and fails on circular refs
const jsonDeepCopy = JSON.parse(JSON.stringify(original));
console.log('5. JSON parse/stringify (deep):', jsonDeepCopy);
console.log('   Same reference?', original === jsonDeepCopy); // false

// 6. structuredClone() — modern, native deep-copy alternative to the JSON
//    trick; handles Dates, Maps, Sets, and circular references correctly
//    (available in Node 17+ and all evergreen browsers)
if (typeof structuredClone === 'function') {
    const structuredCloneCopy = structuredClone(original);
    console.log('6. structuredClone (deep):', structuredCloneCopy);
    console.log('   Same reference?', original === structuredCloneCopy); // false
}

/**
 * Which one should you use?
 * - Shallow copy of primitives (numbers, strings): spread or slice() —
 *   both are fast and highly readable; spread is the modern idiom.
 * - Need to transform while copying: map().
 * - Copying an array-like or iterable (e.g. NodeList, Set): Array.from().
 * - Deep copy with nested objects/arrays: structuredClone() (preferred)
 *   or JSON.parse(JSON.stringify()) as a fallback for older environments.
 */