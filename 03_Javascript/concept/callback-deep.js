// A callback function is function that is passed as an arguments to another function and execute later.
// A function can accept another function as parameter.
// callback allow one function to call another at later time.
// A callback function is execute after another function finished.

function greet(name, callback){
    const greet = `hello ${name}`;
    callback(greet)
}

function displayGreeting(message){
    console.log(message)
}

// console.log(greet('vikas',displayGreeting))

function calc(a,b,callback){
    return callback(a,b)
}

function add(a,b){
    console.log(a + b);
}

calc(2,4,add)

// callback hell

function step1(callback){
    setTimeout(() => {
        console.log('step 1 completed')
        callback()
    }, 1000);
}

function step2(callback){
    setTimeout(() => {
        console.log('step 2 completed')
        callback()
    }, 1000);
}
function step3(callback){
    setTimeout(() => {
        console.log('step 3 completed')
        callback()
    }, 1000);
}

step1(() =>{
    step2(()=>{
        step3(()=>{
            console.log('All steps are cleard')
        })
    })
})