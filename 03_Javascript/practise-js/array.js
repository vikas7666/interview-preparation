// ============================================
// Array Basics — corrected reference notes
// ============================================

let num = [1, 2, 4, 5];

// push -> adds to the END, returns new length
num.push(32);
console.log(num); // [1,2,4,5,32]

// unshift -> adds to the START (index 0), NOT "insert at a position"
// there is no built-in "insert without removing" — that's splice's job
num.unshift(0);
console.log(num); // [0,1,2,4,5,32]

// pop -> takes NO arguments, always removes the LAST element
// pop(5) is the same as pop() — the 5 is ignored
num.pop();
console.log(num); // [0,1,2,4,5]

// shift -> removes the FIRST element, returns it
num.shift();
console.log(num); // [1,2,4,5]

// splice(start, deleteCount, ...itemsToInsert)
// removes `deleteCount` elements starting at index `start`
// returns an ARRAY of the removed elements
let removed = num.splice(1, 2);
console.log(num, removed); // [1,5]  [2,4]


// ============================================
// Looping over arrays of objects
// ============================================

let list = [
    { text: 'milk', cost: 4, need: false },
    { text: 'egg', cost: 10, need: true },
    { text: 'butter', cost: 5, need: false },
    { text: 'bacon', cost: 3, need: true },
];

// classic for loop — start at i = 0 to include every item
let html = '';
let total = 0;
for (let i = 0; i < list.length; i++) {
    let item = list[i];
    html += `<li>${item.text}</li>`;
    total += item.cost;
}
// document.getElementById('list').innerHTML = html;
// document.getElementById('total').innerHTML = `$${total}`;

// forEach — only items where need === true
let neededHtml = '';
list.forEach((item, index) => {
    if (item.need) {
        neededHtml += `<li>${index} ${item.text}</li>`;
    }
});

// for...of — same result as forEach above
let ofHtml = '';
for (let item of list) {
    if (item.need) {
        ofHtml += `<li>${item.text}</li>`;
    }
}

// for...of with destructuring
let destructHtml = '';
for (let { text, cost, need } of list) {
    if (need) {
        destructHtml += `<li>${text}</li>`;
    }
}

// need the index too? use .entries()
let entriesHtml = '';
for (let [index, { text, cost, need }] of list.entries()) {
    if (need) {
        entriesHtml += `<li>${index} ${text}</li>`;
    }
}


// ============================================
// Sorting
// ============================================

let names = ['eggs', 'butter', 'milk', 'bread', 'bacon'];

// simple string sort, ascending
names.sort((a, b) => {
    if (a === b) return 0;
    if (a > b) return 1;
    return -1;
});
console.log(names); // ['bacon','bread','butter','eggs','milk']

// sorting an array of objects by a property — ascending
let list2 = [
    { text: 'milk', cost: 4, need: false },
    { text: 'egg', cost: 10, need: true },
    { text: 'butter', cost: 5, need: false },
    { text: 'bacon', cost: 3, need: true },
];

list2.sort((a, b) => {
    if (a.text === b.text) return 0;
    if (a.text > b.text) return 1;
    return -1;
});

// DESCENDING: don't just "return -1" always — that's not a valid
// comparator. Instead flip the comparison (or swap the branches):
list2.sort((a, b) => {
    if (a.text === b.text) return 0;
    return a.text > b.text ? -1 : 1;
});

// non-mutating sort options (interview follow-up: sort() mutates!)
let sortedCopy = [...names].sort();      // spread first, then sort
let sortedCopy2 = names.toSorted();      // ES2023, no mutation

let sortedHtml = '';
list2.forEach(({ text }) => {
    sortedHtml += `<li>${text}</li>`;
});
// document.getElementById('list').innerHTML = sortedHtml;