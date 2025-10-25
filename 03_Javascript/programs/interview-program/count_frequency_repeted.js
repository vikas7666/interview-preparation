

let result  = ["apple", "banana", "apple", "orange", "banana", "apple"]

function frequency(result){
let obj = {}
   for(let item of result){
     if(obj[item]){
        obj[item] +=  1;
     }else{
        obj[item] = 1;
     }
   }
   return obj
}

console.log(frequency(result))  // { apple: 3, banana: 2, orange: 1 }

let arr1 =  ['a','b','a','c','d'];
let obj = {};
for(let item of arr1){
  
    if(obj[item]){
        obj[item] += 1;
    }else{
        obj[item] = 1
    }
}
console.log('obj',obj)   // obj { a: 2, b: 1, c: 1, d: 1 }


e.g
const car = {};
car["make"] = "vikas";
console.log(car)  //{ make: 'vikas' }

// here are 4 main ways to iterate over a JavaScript object. Let's go through each with examples:

// for...in Most Basic)
// Object.keys() with forEach
// Object.values()
// Object.entries()

let person = { name: "Vikas", age: 25, city: "Mumbai" };

for (let key in person) {
  console.log(key, "=>", person[key]);
}

/* 
output:
name => Vikas
age => 25
city => Mumbai
*/

// 2) Object.keys() with forEach   // Gives an array of keys, then you loop over them.

Object.keys(person).forEach(key => {
  console.log(key, "=>", person[key]);
});

//  Best for: clean iteration without inherited properties.

// 3)  Object.values()  // Loop over values only

Object.values(person).forEach(value => {
  console.log(value);
});


/* 
Vikas
25
Mumbai
*/

// 4 Object.entries() – Loop over both [key, value] pairs

Object.entries(person).forEach(([key, value]) => {
  console.log(key, "=>", value);
});

/* 
name => Vikas
age => 25
city => Mumbai
*/


// Bonus: for...of (Not directly on objects)

for (let [key, value] of Object.entries(person)) {
  console.log(key, value);
}



// Method	                   Loops        Over	           Returns	Supports break?
// for...in	                   Keys	        Key	               ✅ Yes
// Object.keys().forEach	   Keys	        Key	               ❌ No
// Object.values().forEach	   Values	    Value	           ❌ No
// Object.entries().forEach	   Key + Value	[key, value]       ❌ No
// for...of + entries()	       Key + Value	[key, value]	   ✅ Yes