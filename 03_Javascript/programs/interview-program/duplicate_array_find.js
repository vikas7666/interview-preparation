let arr1 = ['a', 'b', 'a', 'c', 'd', 'a'];

let duplciate = arr1.filter((item, index) => {
  return arr1.indexOf(item) != index  // simply checking a ka index not equal ho bas
})

console.log('duplciate', duplciate) // [ 'a', 'a' ] 

let duplciateSet = [...new Set(duplciate)]
console.log('duplciateSet', duplciateSet) //[ 'a' ]

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