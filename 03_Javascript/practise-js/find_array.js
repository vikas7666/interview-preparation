
let list2 = [
    {text: 'milk', cost:4, need:false},
    {text: 'egg', cost:10, need:true},
    {text: 'butter', cost:5, need:false},
    {text: 'bacon', cost:3, need:true},
]

let number = [5,9,23,54,971]

let item = list2.find((item,index) => item.text === 'sauce');

let evenNumber = number.find((item) => item % 2 === 0);
console.log(evenNumber)
