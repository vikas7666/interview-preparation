# Interview Question Bank — MERN Stack (Senior)

Compiled and segregated from your interview/screening notes. Organized by topic, roughly easy → hard within each section.

---

## 1. HTML

1. Difference between HTML and HTML5?
2. What are semantic elements in HTML5?
3. How do you optimize website asset loading (images, fonts, scripts)?
4. Difference between `<strong>`/`<b>` and `<em>`/`<i>`?
5. In how many ways can you position an HTML element? What are the valid `position` values?
6. In how many ways can you display an HTML element (`display` values)?
7. Difference between `display: none` and `visibility: hidden`?

---

## 2. CSS

1. Difference between CSS and CSS3?
2. What are the elements of the CSS Box Model?
3. CSS vs a CSS preprocessor (SCSS, Less) — and the advantages of using one?
4. What are pseudo-classes?
5. What is responsive design, and what is "mobile-first" in CSS?
6. What is cascading in CSS?
7. What are reflow and repaint, and why do they matter for performance?
8. Ways to center an element with CSS (at least 2-3 approaches).
9. How do you target the 3rd child and the second-last child with CSS selectors?
10. How do you equalize the heights of elements of different sizes?
11. What are mixins in SCSS/Less?

---

## 3. JavaScript Core

### Fundamentals
1. Is JavaScript synchronous or asynchronous — and how does it manage async behavior on a single thread?
2. Difference between `null` and `undefined`?
3. What are undeclared vs undefined variables?
4. What are global variables, and why are they best avoided?
5. Difference between `var`, `let`, and `const`?
6. What is the `this` keyword, and how does it behave differently in a regular function vs an arrow function?
7. Difference between functions and methods?
8. Which keywords are used for exception handling (`try`/`catch`/`finally`/`throw`)?
9. Difference between `==` and `===`?
10. What is hoisting? Walk through an example with `var` vs `let`/`const`.
11. What is the call stack?
12. How do you achieve inheritance in JavaScript (prototypal inheritance, `class extends`)?
13. What is `Object.assign` used for?
14. Difference between `for...in` and `for...of`?
15. What is event bubbling vs event capturing?
16. In how many ways can you create an object in JavaScript?

### Closures, Callbacks & Promises
17. What is a closure? Walk through a practical example.
18. What is a callback, and what is "callback hell"?
19. What are promises, and how do they differ from callbacks?
20. Why do we use promises and `async`/`await` over raw callbacks?
21. Difference between `.then()` and `.catch()`?
22. What happens if you `return` a value inside `.then()`?
23. How do you handle multiple promises efficiently — `Promise.all()` vs `Promise.allSettled()`?
24. Difference between `Promise.race()` and `Promise.any()`?
25. How do you convert a callback-based function into a promise (`util.promisify`, manual wrapping)?
26. How does `async`/`await` handle errors?
27. What happens on an unhandled promise rejection?

### Objects, Arrays & Data Handling
28. Difference between pass-by-value and pass-by-reference?
29. Shallow copy vs deep copy of an object — how do you do each?
30. Difference between `call` and `apply` (and `bind`)?
31. Rest parameters vs spread operator?
32. What are higher-order functions?
33. Built-in array/string methods you rely on most — and difference between `slice` and `splice`?
34. How do you empty an array?
35. How do you find unique elements in an array?
36. Destructuring — arrays, objects, and nested objects.
37. Difference between `localStorage` and `sessionStorage`?
38. Difference between `reduce`, `filter`, and `map`?
39. What is throttling vs debouncing — give a real scenario for each?
40. What are pure functions, and why do they matter?
41. Difference between blocking and non-blocking code?
42. Why does `0.1 + 0.2 !== 0.3`? How does floating-point precision affect real calculations (e.g. currency)?
43. Difference between primitive and non-primitive types — which are mutable, and why?
44. Implement currying / infinite currying — what are its use cases?
45. Notable features introduced in recent ECMAScript versions?

### Event Loop & Timing
46. Explain the event loop — microtasks vs macrotasks — with a real example (`Promise.then` vs `setTimeout`).
47. Difference between `setImmediate`, `setTimeout`, and `setInterval` — when would you use each?

---

## 4. TypeScript

1. Advantages of using TypeScript over plain JavaScript?
2. Key features of TypeScript (types, interfaces, generics, enums)?
3. How does TypeScript compilation work (transpiling to JS, `tsconfig.json`)?

---

## 5. JavaScript Output-Prediction Puzzles

These are quick "predict the console output" gotchas — good for sharpening reflexes on scoping, hoisting, and the event loop.

**Puzzle 1**
```js
var k = 1;
if (function foo(){}) {
  k += typeof foo;
}
console.log(k);
```
<details><summary>Answer</summary>
1undefined — the function expression in the condition is truthy, but `foo` isn't hoisted as a named function in this context, so `typeof foo` is `"undefined"`.
</details>

**Puzzle 2**
```js
var k = 1;
if (1) {
  function foo(){};
  k += typeof foo;
}
console.log(k);
```
<details><summary>Answer</summary>
1function — inside a block, function declarations are hoisted within that block in non-strict mode, so `foo` is defined by the time `typeof foo` runs.
</details>

**Puzzle 3**
```js
var output = (function(x){
  delete x;
  return x;
})(0);
console.log(output);
```
<details><summary>Answer</summary>
0 — `delete` only removes object properties, not local variables/parameters, so it has no effect here.
</details>

**Puzzle 4**
```js
var x = { foo: 1 };
var output = (function(){
  delete x.foo;
  return x.foo;
})();
console.log(output);
```
<details><summary>Answer</summary>
undefined — `delete x.foo` actually removes the property this time, since `foo` is a real object property.
</details>

**Puzzle 5**
```js
var trees = ["xyz", "xxxx", "test", "ryan", "apple"];
delete trees[3];
console.log(trees.length);
```
<details><summary>Answer</summary>
5 — `delete` leaves a hole (`undefined`) at that index but doesn't shrink the array or reindex it.
</details>

**Puzzle 6 — classic loop closure**
```js
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// vs
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
```
<details><summary>Answer</summary>
`var` version logs 5 five times (one shared function-scoped `i`, already 5 by the time the callbacks run). `let` version logs 0, 1, 2, 3, 4 (a fresh block-scoped `i` per iteration).
</details>

**Puzzle 7 — var vs function-scoped shadowing**
```js
function b(){
  var t = 1;
  function c(){
    console.log(t);
    var t = 2;
    console.log(t);
  }
  c();
  console.log(t);
}
b();
```
<details><summary>Answer</summary>
undefined, 2, 1 — `var t` inside `c` is hoisted to the top of `c`, shadowing the outer `t` from the first line, so the first log sees the hoisted-but-unassigned local `t`.
</details>

**Puzzle 8 — execution order (Node.js)**
```js
process.nextTick(() => console.log('nextTick'));
setTimeout(() => console.log('setTimeout'), 0);
setImmediate(() => console.log('setImmediate'));
```
<details><summary>Answer</summary>
In the main module: nextTick → setTimeout → setImmediate. Inside an I/O callback, the order becomes: nextTick → setImmediate → setTimeout.
</details>

---

## 6. Coding Challenges (Implementation)

1. **FizzBuzz.**
2. **Denomination calculator** — given an amount, compute the minimum notes/coins needed using denominations 1, 2, 5, 10, 20, 50, 100, 500.
3. **Palindrome check** for a string.
4. **Reverse a string/sentence.**
5. **Reverse a number** without using string functions.
6. **Unique elements** from a string/array.
7. **Character frequency count** — e.g. `['one','one','two','three','two','one']` → `{one: 3, two: 2, three: 1}`.
8. **Find all vowels** in a string.
9. **Group anagrams**:
   ```js
   // Input:  ["act", "god", "cat", "dog", "tac"]
   // Output: [["act", "cat", "tac"], ["god", "dog"]]
   ```
   Reference approach: sort each word's letters and use the sorted string as a Map key.
10. **Flatten a nested array** without using `.flat()` — handle arbitrary nesting depth recursively:
    ```js
    const nestedArray = [[1, 2], [3, 4], [5, [6, 7]]];
    const flatArryIn = (arr, out = []) => {
      for (const item of arr) {
        Array.isArray(item) ? flatArryIn(item, out) : out.push(item);
      }
      return out;
    };
    ```
11. **camelCase → Title_Snake_Case** converter, e.g. `thisIsATest` → `This_Is_A_Test`. (If you write this with template literals, double-check your backticks — a common slip is writing `` _${item} `` without the surrounding backtick characters.)
12. **Countdown timer**: counts down from 30, updating every second; displays "Take Off" at 0; has a Reset button that only works before takeoff. Practice this with `setInterval`/`clearInterval` and proper cleanup.
13. **Async transform**: given `const getUser = async (id) => ({ id })` and `const ids = [1,2,3,4,5,6,7]`, produce `[{id:1}, {id:2}, ...]`. (Think `Promise.all(ids.map(getUser))` vs a sequential `for...of` with `await` — be ready to explain the tradeoff.)
14. **Weather aggregator with retries** — write a function that takes a `userId`, fetches saved locations from a DB, calls a weather API for current temp + 7-day forecast per location, and retries failed calls up to 3 times.
15. **Three divs, rotating background color** every 3 seconds in React — think `setInterval` inside `useEffect` with cleanup.

---

## 7. React (Web)

1. Difference between `useRef`, `useState`, and `useMemo` — and their impact on re-rendering.
2. What is a pure component in React, and how does it differ from a regular one?
3. Walk through the state lifecycle in React (initialization, updates, batching, unmount).
4. What are custom hooks? Where should you use them? Be ready to describe one from your own project.
5. What is `useReducer`, and when would you reach for it over `useState`?
6. What is Redux? When is it worth the overhead vs Context/local state?
7. What is global state management, and what are your options besides Redux?
8. What are controlled vs uncontrolled components?
9. How would you design a search bar (debounced input, API calls, loading/empty states)?
10. How do you detect whether your React app has unnecessary re-rendering issues? (Profiler, `why-did-you-render`, React DevTools)
11. How do you optimize a React application generally? (memoization, code-splitting, virtualization, avoiding prop drilling, etc.)
12. What's the relationship between parent and child components — props flow, lifting state up?

### Code Review — Spot the Bug
```jsx
import React, { useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, []);

  console.log(count);
  return <button onClick={increment}>Click</button>;
}
export default App;
```
**What's wrong:** `increment` closes over `count` from the render it was created in, and the empty dependency array (`[]`) means `useCallback` never recreates it. Every click sets `count` to `0 + 1 = 1` — it never goes past 1. Fix: use the functional updater `setCount(c => c + 1)`, or add `count` to the dependency array.

---

## 8. React Native

1. How does `FlatList` optimization work internally? (windowing, `getItemLayout`, `keyExtractor`, `initialNumToRender`)
2. When should you avoid lifting state up in React Native, and why?
3. How do you debug performance issues on a real device (as opposed to a simulator)?

---

## 9. Node.js & Express

### Core Concepts
1. How does Node.js handle multiple requests on a single thread? (event loop, libuv, thread pool)
2. How does the Node.js event loop differ from a traditional multi-threaded server model?
3. What's the difference between a macro task and a micro task in Node.js?
4. Difference between `process.nextTick` and `setImmediate`?
5. What is the reactor pattern, and how does it relate to Node.js's architecture?
6. What is clustering in Node.js, and what does `fork` do (child processes)?
7. Difference between cluster mode and fork mode in PM2?
8. How do you handle concurrency in Node.js given it's single-threaded?
9. Different ways to read data using streams — and why streams matter for large payloads.
10. How do you detect and handle a memory leak in a Node.js app?
11. How would you mitigate a DDoS attack against your API?
12. What is middleware in Express, and what types of middleware are there (application-level, router-level, error-handling, third-party)?
13. What are prototypes in JavaScript/Node.js, and how do they relate to inheritance?

### Express Specifics
14. Difference between `req.query` and `req.params`?
15. What is `body-parser`, and what does it do?
16. How does Node.js/Express handle incoming HTTP requests and response objects internally?
17. How does Express serve static files, and what does `express.static()` middleware do?

### Security & Performance
18. What security mechanisms are available in Node.js (e.g. Helmet for secure HTTP headers)? What are your top best practices (avoid running as root, keep dependencies updated, rate limiting, strong auth/JWT, avoid leaking unnecessary info, monitoring)?
19. How do you prevent SQL injection attacks?
20. How do you improve API performance generally (caching, indexing, pagination, connection pooling, compression)?
21. How do you scale servers in a private cloud environment?
22. How does JWT authentication work end-to-end — issuing, storing, verifying, refreshing?
23. How do you handle error boundaries / centralized error handling at the API level?
24. Have you worked with GraphQL? How does it compare to REST for your use cases?
25. Be ready to describe a practical authentication flow you've implemented end-to-end.

---

## 10. MongoDB

1. How do you handle data integrity and referential integrity in MongoDB, given it's schemaless/NoSQL?
2. How do multi-document transactions work in MongoDB, and how do they differ from relational database transactions?
3. What is normalization vs denormalization, and how do you decide between them in MongoDB schema design?
4. What is sharding in MongoDB, and when is it needed?

---

## 11. Redis

1. Do you know Redis, and how have you applied it in your current project (caching, session store, pub/sub)?
2. What is a Redis cluster, and how does it provide scalability/high availability?

---

## 12. System Design

**Design a Real-Time Market Data Feed System**
NSE needs to push live stock prices to 5 million concurrent users on a public website. Prices update every 500ms per stock, and users should see updates without refreshing.

Points to cover:
- How price data flows: exchange → backend → user's browser.
- WebSockets vs SSE vs polling — justify your choice.
- Where Redis fits into the pipeline (pub/sub, caching last-known price, etc.).
- Avoiding a thundering herd when the market opens at 9:15 AM and traffic spikes 10x.
- What happens if your Node.js server crashes mid-session — reconnection/failover strategy.
- How you'd horizontally scale the WebSocket layer.

---

## 13. Database / SQL

1. How do you optimize database queries in general?
2. What are the drawbacks of adding an index?
3. How would you approach migrating a MySQL database to Oracle?
4. Write a query to duplicate a table's data into a new backup table.

### Coding Challenge — Active Users Query
Write a SQL query to return active users who placed at least one **completed** order in the last 30 days, with:

| Column | Description |
|---|---|
| user_id | user's ID |
| user_name | user's name |
| total_orders | number of orders |
| total_items | total quantity of items ordered |
| total_amount | total order value |
| category_count | count of distinct product categories purchased |

Schema:
```
users        (id, name, email, is_active)
orders       (id, user_id, order_date, status)
order_items  (id, order_id, product_id, quantity, price)
products     (id, name, category)
```

---

## 14. Testing

- Brush up on **Jest** — flagged as specifically important. Cover: unit testing components, mocking API calls/modules, snapshot testing, and testing custom hooks (`@testing-library/react-hooks` or RTL's `renderHook`).

---

## Notes
- No Next.js-specific questions have shown up in your notes yet — happy to add a dedicated Next.js set (App Router, SSR vs SSG vs ISR, data fetching, middleware, route handlers) if you want to round this out.
- Recurring high-frequency topics across rounds: closures, event loop/microtask-macrotask, `var`/`let` scoping, blocking vs non-blocking, debouncing/throttling, and the `process.nextTick`/`setImmediate`/`setTimeout` ordering puzzle — worth having razor-sharp, rehearsed answers for these specifically.
