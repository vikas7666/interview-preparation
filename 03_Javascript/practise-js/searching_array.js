let list = ['bacon', 'eggs', 'butter', 'milk', 'bread', 'bacon', 'egg',
    { text: 'bacon', cost: 3, need: true },
];

// IndexOf method is used for searching an element
// console.log(list.indexOf('butter'))  // 1
// console.log(list.indexOf('sauce'))  // -1

// We can also pass an index jahaa se search karanaa hai

// console.log(list.indexOf('egg',1)); // 5 bcz ye index 1 ke baad search kiya

// basically ye last position se search karata hai yahaa pe bacon 5th position pe hI esliye cursor stop ho gayaa
// console.log(list.lastIndexOf('bacon'))

// but they have don't have to ablity to search in object that why weare using findIndex Method


// findIndex method has callback function ablity to search
// console.log(list.findIndex((item)=>{
//     return item.text === 'bacon';   //7
// }));


// how to write in more optimize arrow function
// if we mistakenly write curly braces tab ye nahi chalega expect karegaa return statement hai
// console.log(list.findIndex((item)=> item.cost === 3));
