/* 
    Js promise is handling asynchronous operation like api calls, file loading, or time delay.
    Pending 
    fulfilled
    rejected
*/

let checkEven = new Promise((resolve, reject) => {
  let number = 4;
  if (number % 2 == 0)
    resolve("The Number is even")
  else reject("The Number is odd")
})

checkEven
  .then((message) => console.log(message))
  .catch((error) => console.error(error))

//Waits for all promises to resolve and returns their results as an array. If any promise is rejected, it immediately rejects.

Promise.all([
  Promise.resolve("Task 1 is completed"),
  Promise.resolve("Task 2 is completed"),
  Promise.reject("Task 3 is failed")
])

// .then((result) =>{console.log(result)})
// .catch((error) =>{console.log(error)})

// Waits for all promises to settle (fulfilled or rejected) Method and returns an array of their outcomes.


Promise.allSettled([
  Promise.resolve("Task 1 completed"),
  Promise.resolve("Task 2 completed"),
  Promise.reject("task 3 is failed")
])

  .then((result) => { '1-->', console.log(result) })
  .catch((error) => { '2-->', console.error(error) })

// Promise.race() method resolve or reject as soon as first method settled

Promise.race([
  new Promise((resolve) =>
    setTimeout(() =>
      resolve("Task 1 is finished"), 1000)),
  new Promise((resolve) =>
    setTimeout(() =>
      resolve("Task 2 is finished"), 500))
])
  .then((result) => { console.log(result) })


// Promise.any() Method resolves with the first fulfilled promise. If all are rejected, it rejects with an AggregateError.

Promise.any([
  Promise.reject("Task is any failed"),
  Promise.resolve("task 2 any is reolved"),
  Promise.resolve("task 3 any is reolved")
])

  .then((result) => { console.log(result) })

// Promise.resolve() Method

//Promise.resolve() Method returns a promise that resolves with the given value. 

Promise.resolve("Immediate success")
  .then((value) => console.log(value));


Promise.reject("Immidiate reject")
  .catch((error) => console.error(error))

// Promise.finally() Method runs a cleanup or final code block regardless of the promise’s result (fulfilled or rejected).

Promise.resolve("Promise finally is resolved")
  .then((resolve) => console.log(resolve))
  .finally(() => console.log("Cleanup completed"))

// 8. Chaining with Promise.prototype.then() Method

Promise.resolve(5)
  .then((value) => value * 2)
  .then((value) => value - 2)
  .then((finalvalue) => console.log(finalvalue))


// 10. Dynamic Promise Creation

function asynTask(taskname) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${taskname} completed`), 1000)
  })
}

asynTask('Download File')
  .then((result) => console.log(result))


// api call

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log(response)
    return response.json();
  })
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  })


async function asyn1() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json()
    let h2 = document.createElement('h2');
    h2.textContent = data.title;
    document.body.appendChild(h2)
  }
  catch (error) {
    console.log('fetch error', error)
  }
}
asyn1()


const promise = new Promise((resolve, reject) => {
  console.log('Before Promise start at 2 second')
  setTimeout(() => {
    let mathRandom = Math.random();
    console.log('MathRandom Value', mathRandom)
    if (mathRandom > 2) {
      resolve("data is resolved")
    } else {
      reject("Number is to low")
    }
  }, 2000)
  console.log('After Promise end after 2 second')
})

promise.then((data) => {
  console.log(data)
}).catch((err) => {
  console.log("Number is less than zero", err)
})

/* 
Before Promise start at 2 second
After Promise end after 2 second
MathRandom Value 0.7824052898424199
Number is less than zero Number is to low
*/

// Promise Chaining

/* 
To combine multiple Promises and perform Promise chaining, you can follow these steps. Promise chaining allows for the sequential execution of asynchronous operations that depend on each other.
*/


fetchData()
  .then(data => {
    return otherFetchData(data);
  })
  .then(chainData => {
    return chainData.response;
  })
  .catch(error => {
    console.log(error);
  });


//   Only one “.catch()” is sufficient within the Promise chain. If an unexpected error occurs within the chain, the subsequent “.then()” links are skipped, and the function inside “.catch()” is executed.

// Task

/* Write a promise chain that:
    Resolves with the number 5
    Then multiplies it by 2
    Then adds 10
    Then logs the final result
 */

const promiseTask1 = new Promise((resolve, reject) => {
  resolve(5)
})

promiseTask1.then((data) => {
  return data * 2;
}).then((data) => {
  console.log(data + 10)
})

// Nested Promises with API Call Simulation
/* 
Error Handling in Chain
Create a chain of promises where:
First resolves with 10
Second throws an error "Something went wrong"
Catch the error and log it
Continue the chain by resolving with a default value and log it
*/

const promiseTask3 = new Promise((resolve, reject) => {
  resolve(10);
});

promiseTask3
  .then((data) => {
    throw new Error("Something went wrong");
  })
  .catch((err) => {
    console.log(err);
    return 10;
  })
  .then((data) => {
    console.log(data);
  });

/* 
Chain with Conditional Branch
    Make a promise that resolves with a number.
    If the number is even, double it in the next .then()
    If it’s odd, throw an error
    Catch the error and log "Odd number!"  
*/
function promiseHandler(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve(num);
    } else {
      reject(num);
    }
  });
}

promiseHandler(4)
  .then((data) => {
    console.log("Even Number, Square:", data * data);
  })
  .catch((err) => {
    console.log("Odd Number:", err);
  });


/* 
5. Return Another Promise in .then()
  Start with a promise that resolves with 'step1'
  In the next .then(), return a new promise that resolves with 'step2' after 2 seconds
  Continue chaining to 'step3', and log all steps in order

*/

let promisehere = new Promise((resolve, reject) => {
  resolve('step1')
})
promisehere
  .then((data1) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data1, data2: 'step2' }); // pass both values in an object
      }, 2000);
    })
  }).then(({ data1, data2 }) => {
    console.log(`${data1} ${data2}`);
  })

/* 
    Nested Promises with API Call Simulation
    Simulate two async calls using setTimeout:
    First call returns a user ID after 1 second
    Second call returns user details using the ID after another second
    Chain them using .then() — no async/await

*/

const promiseSix = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000);
})
promiseSix
  .then((data) => {
    if (data == 1) {
      return ({ name: 'vikas', surname: 'shukla' })
    }
  })
  .then((user) => {
    console.log("User data is", user)
  })
