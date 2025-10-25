// Array Basic
let num =  [1,2,4,5];

num.push(32);
// console.log(num);

// unshift at given position without removing
num.unshift(0);
// console.log(num);

num.pop(5);
// console.log(num);

// shift remove first element 
num.shift()
// console.log(num);

// splice method first argument take number of position and 
// 2nd one take number of value 
num.splice(3,2);
// console.log(num);

// Array for loop 


// let list = [
//     "milk",
//     "egg",
//     "butter",
//     "bread",
//     "becon",
// ]

// let html = '';

// for(let i=1; i<list.length; i++){
//   html += `<li>${list[i]}</li>`;
  
// }
// document.getElementById('list').innerHTML = html;
// console.log(html)



// let list = [
//     {text: 'milk', cost:4, need:false},
//     {text: 'egg', cost:10, need:true},
//     {text: 'butter', cost:5, need:false},
//     {text: 'bacon', cost:3, need:true},
// ]

// let html = '';
// let total = 0;

// for(let i = 1; i<list.length; i++){
//     let item = list[i];

//     html += `<li>${list[i].text}</li>`
//     total += item.cost;
// }

// document.getElementById('list').innerHTML = html;
// document.getElementById('total').innerHTML = `$${total}`;

// list.forEach((item,index) =>{
//     if(item.need){
//         html += `<li>${index}  ${item.text}</li>`
//     }
// })
// document.getElementById('list').innerHTML = html;

// for of loop same output

// for(let item of list){
//     if(item.need){
//         html += `<li>${item.text}</li>`
//     }
// }

// document.getElementById('list').innerHTML = html;

// we also destturing also
// for (let {text, cost, need} of list) {
//     if (need) {
//             html += `<li>${text}</li>`;
//     }
// }
// document.getElementById('list').innerHTML = html;

// suppose if we need index in for of loop need to add entries()

// for(let [index,{text,cost,need}] of list.entries()){
//     if(need){
//         html += `<li>${index} ${text} </li>`;
//     }
// }
// document.getElementById('list').innerHTML = html;


// @@@@@@@@  Sorting Array @@@@@@@@@@@@@@@@@@@@@@@@
let list = ['eggs','butter','milk','bread','bacon'];

let list2 = [
    {text: 'milk', cost:4, need:false},
    {text: 'egg', cost:10, need:true},
    {text: 'butter', cost:5, need:false},
    {text: 'bacon', cost:3, need:true},
]

// list.sort((a,b) =>{
    
//     if(a == b){
//         return 0;
//     }
//     if( a > b){
//         return 1;
//     }
//     return -1
    
// })

list2.sort((a,b) =>{
    if(a.text === b.text){ return 0}

    if (a.text > b.text){
        return 1 // if we want decending then we will simply - 1
    }
    return -1
})

let html = '';

// list.forEach((item) =>{
//     html += `<li>${item}</li>`
// })

list2.forEach(({text}) =>{  // here we have added es6 curly braces
    html += `<li>${text}</li>`
})

document.getElementById('list').innerHTML = html;

