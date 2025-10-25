/* fetch("https://jsonplaceholder.typicode.com/users")
.then(function(resp){
   return resp.json()
}).then(function(data){
    console.log(data)  // now its is correct
}) */

// using arrow function 
fetch("https://jsonplaceholder.typicode.com/users")
    .then((resp) => resp.json())
    .then((data) => console.log(data))  // now its is correct


/* yahaa pe fetch method ne sab status return kar diya 
but hum log body nahi use kar sakate hai 

fetch("https://jsonplaceholder.typicode.com/users")
.then(function(resp){
    console.log(resp)
    //console.log(resp.json())

    ye line add karane ke baad sirf response me dikhayega but 

        promise handle karana padega
        [[Prototype]]:Promise
        [[PromiseState]]:"fulfilled"
        [[PromiseResult]]: Array(10)
})

body(...)
bodyUsed : false
headers : Headers {}
ok : true
redirected : false
status : 200
statusText : ""
type : "cors"
url : "https://jsonplaceholder.typicode.com/users"

*/