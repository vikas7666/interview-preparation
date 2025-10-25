// callback function 
function greet(name, callback){
    callback(`Hello, ${name}`)
}

greet('vikas', hello =>{
    console.log(hello)
})

// Arrow function 

const arr = () => 2+3;

console.log(arr())

// add property in Object

let obj = {
    a : 1,
    b: 2
}

obj.age = 1;

console.log(obj)

// 
console.log([1,2,3].reduce((a,b) => a+b))  //6

console.log('6' - 1);
console.log(1 === '1');