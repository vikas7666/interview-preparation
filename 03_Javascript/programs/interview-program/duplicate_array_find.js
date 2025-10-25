let arr1 =  ['a','b','a','c','d','a'];

let result = []
arr1.filter((item, index) =>{
    console.log(`index of ${item} is : `,arr1.indexOf(item)) // here we get index of each value and 
        if(arr1.indexOf(item) !== index){   // here we have write a condition whose item value and index is not matching 
          result.push(item)
        }
    
})

console.log("Duplicate",result)
let UniquesElement  = [... new Set(result)];

console.log('UniquesElement',UniquesElement)


//  here we can clearly see a index is 0 every time 
/* 
index of a is :  0
index of b is :  1
index of a is :  0
index of c is :  3
index of d is :  4
index of a is :  0
Duplicate [ 'a', 'a' ]
UniquesElement [ 'a' ]
*/