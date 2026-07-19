# Senior Developer Interview Preparation
### JavaScript & HTML/CSS Deep Dive

### 1. Call Stack in JavaScript

The **call stack** is a LIFO (Last In, First Out) data structure that the JS engine uses to track function execution contexts.

**How it works:**
1. When a script runs, the global execution context is pushed onto the stack.
2. Every function call pushes a new frame; when it returns, it's popped off.
3. If the stack exceeds its limit → **`RangeError: Maximum call stack size exceeded`** (stack overflow).

```js
function first() {
  console.log('first');
  second();
}

function second() {
  console.log('second');
  third();
}

function third() {
  console.log('third');
}

first();

// Call Stack (top → bottom at peak):
// third()
// second()
// first()
// Global Execution Context
```

**Senior insight:** The call stack is synchronous. Async operations (setTimeout, Promises, fetch) are handled via the **Event Loop** + **Task/Microtask queues**, which feed back into the call stack only when it's empty.

---

### 2. Shallow Copy vs Deep Copy

| Feature | Shallow Copy | Deep Copy |
|---|---|---|
| Copies primitives | ✅ By value | ✅ By value |
| Copies nested objects | ❌ By reference | ✅ New nested copies |
| Mutation risk | High (nested refs shared) | None |

```js
const original = { a: 1, b: { c: 2 } };

// --- SHALLOW COPY ---
const shallow = { ...original };       // or Object.assign({}, original)
shallow.b.c = 99;
console.log(original.b.c); // 99 ❌ — shared reference!

// --- DEEP COPY ---

// Option 1: structuredClone (modern, recommended)
const deep1 = structuredClone(original);

// Option 2: JSON roundtrip (loses functions, undefined, Date precision)
const deep2 = JSON.parse(JSON.stringify(original));

// Option 3: Lodash (handles edge cases)
// const deep3 = _.cloneDeep(original);

deep1.b.c = 42;
console.log(original.b.c); // 2 ✅ — untouched
```

**Senior insight:** Prefer `structuredClone` in modern environments. Avoid the JSON trick when your object contains `Date`, `Map`, `Set`, `undefined`, or functions.

---

### 3. Object Destructuring

Destructuring provides a clean syntax to unpack values from objects into variables.

```js
const user = { name: 'Alice', age: 30, address: { city: 'Mumbai', zip: '400001' } };

// Basic destructuring
const { name, age } = user;

// Rename while destructuring
const { name: userName } = user;

// Default values
const { role = 'guest' } = user;

// Nested destructuring
const { address: { city } } = user;

// Rest in destructuring
const { name: n, ...rest } = user; // rest = { age, address }

// In function parameters (very common in React/Node)
function greet({ name, age = 25 }) {
  return `Hello ${name}, age ${age}`;
}

// Dynamic key destructuring
const key = 'name';
const { [key]: dynamicValue } = user; // dynamicValue = 'Alice'
```

**Senior insight:** Destructuring in function signatures is a best practice for readability and avoids `props.x`, `props.y` chains. Always provide defaults where appropriate.

---

### 4. Closures in JavaScript

A **closure** is a function that **remembers the variables from its outer scope** even after that outer scope has finished executing.

```js
function createCounter(start = 0) {
  let count = start; // ← enclosed variable

  return {
    increment: () => ++count,
    decrement: () => --count,
    value:     () => count,
  };
}

const counter = createCounter(10);
counter.increment(); // 11
counter.increment(); // 12
counter.decrement(); // 11
counter.value();     // 11
```

**Real-world use cases:**
- **Data encapsulation / private state** (module pattern)
- **Currying and partial application**
- **Memoization**
- **Event handlers** that capture loop variables

```js
// Classic closure bug
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // prints 3, 3, 3 ❌
}

// Fix with let (block scope) or IIFE
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // prints 0, 1, 2 ✅
}
```

**Senior insight:** Closures are the foundation of the Module Pattern, currying, memoization, and most React hooks (`useState`, `useEffect` callbacks all rely on closures).

---

### 5. Inheritance in JavaScript

JavaScript uses **prototypal inheritance**, not classical. There are multiple ways to achieve it.

```js
// ─── 1. ES6 Classes (syntactic sugar over prototypes) ──────────────────────
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a sound.`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} barks.`;
  }
  // Access parent method
  parentSpeak() {
    return super.speak();
  }
}

const d = new Dog('Rex');
d.speak();       // "Rex barks."
d.parentSpeak(); // "Rex makes a sound."

// ─── 2. Object.create (pure prototypal) ───────────────────────────────────
const animalProto = {
  speak() { return `${this.name} makes a sound.`; }
};
const cat = Object.create(animalProto);
cat.name = 'Whiskers';
cat.speak(); // "Whiskers makes a sound."

// ─── 3. Prototype chaining (pre-ES6) ──────────────────────────────────────
function Vehicle(type) { this.type = type; }
Vehicle.prototype.describe = function() { return `I am a ${this.type}`; };

function Car(brand) {
  Vehicle.call(this, 'car'); // call super constructor
  this.brand = brand;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
```

**Senior insight:** Prefer ES6 classes for readability, but understand the prototype chain underneath. Know that `extends` sets up `__proto__` linkage, not a copy-based model.

---

### 6. `Object.assign`

`Object.assign(target, ...sources)` copies **own enumerable properties** from source objects into the target. It returns the mutated target.

```js
// Merge objects
const defaults = { theme: 'light', lang: 'en', debug: false };
const userPrefs = { theme: 'dark', debug: true };
const config = Object.assign({}, defaults, userPrefs);
// { theme: 'dark', lang: 'en', debug: true }

// Clone (shallow)
const clone = Object.assign({}, original);

// Add properties to existing object
Object.assign(target, { newProp: 1 });
```

**Key differences from spread:**

```js
// Object.assign triggers setters on target
// Spread does NOT — it copies descriptors as plain values
const obj = Object.assign({}, source);   // calls setters
const obj2 = { ...source };              // ignores setters
```

**Senior insight:** `Object.assign` is a **shallow merge** — nested objects are still referenced, not cloned. For deep merging, use `structuredClone`, lodash `_.merge`, or a custom recursive function.

---

### 7. `for...in` vs `for...of`

| | `for...in` | `for...of` |
|---|---|---|
| Iterates over | **Keys** (enumerable props, incl. inherited) | **Values** (iterable: Array, Map, Set, String…) |
| Works on plain objects | ✅ | ❌ (objects aren't iterable by default) |
| Works on arrays | ✅ (not recommended) | ✅ |
| Prototype chain | Includes inherited keys | N/A |

```js
const arr = [10, 20, 30];

for (const key in arr) {
  console.log(key);   // "0", "1", "2" (string indices!)
}

for (const val of arr) {
  console.log(val);   // 10, 20, 30
}

// for...in on objects
const obj = { a: 1, b: 2 };
for (const key in obj) {
  if (Object.hasOwn(obj, key)) { // guard against inherited props
    console.log(key, obj[key]);
  }
}

// for...of with entries
for (const [i, val] of arr.entries()) {
  console.log(i, val); // index + value together
}
```

**Senior insight:** Never use `for...in` on arrays in production — array prototype extensions can pollute the iteration. Use `for...of`, `forEach`, or `map/filter/reduce` instead.

---

### 8. Hoisting in JavaScript

**Hoisting** is JavaScript's behavior of moving declarations to the top of their scope during the compilation phase — before execution.

```js
// ─── var — hoisted and initialized as undefined ───────────────────────────
console.log(x); // undefined (not ReferenceError)
var x = 5;

// ─── let / const — hoisted but NOT initialized (Temporal Dead Zone) ────────
console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
let y = 10;

// ─── Function declarations — fully hoisted ────────────────────────────────
greet(); // ✅ "Hello" — works before declaration
function greet() { console.log('Hello'); }

// ─── Function expressions — only the var is hoisted ──────────────────────
sayHi(); // ❌ TypeError: sayHi is not a function
var sayHi = function() { console.log('Hi'); };
```

**Temporal Dead Zone (TDZ):** The period between entering scope and the actual declaration line where `let`/`const` variables exist but cannot be accessed.

**Senior insight:** Always declare variables at the top of their scope to make hoisting behavior explicit. Prefer `const`/`let` — the TDZ forces better coding habits by preventing use-before-declare.

---

### 9. Rest vs Spread Operator

Both use `...` syntax but serve **opposite purposes**.

```js
// ─── SPREAD — expands an iterable into individual elements ────────────────

// Arrays
const a = [1, 2, 3];
const b = [...a, 4, 5]; // [1, 2, 3, 4, 5]

// Objects
const obj1 = { x: 1 };
const obj2 = { ...obj1, y: 2 }; // { x: 1, y: 2 }

// Function calls
Math.max(...a); // same as Math.max(1, 2, 3)

// ─── REST — collects remaining elements into an array/object ──────────────

// Function parameters
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
sum(1, 2, 3, 4); // 10

// Destructuring arrays
const [first, second, ...remaining] = [1, 2, 3, 4, 5];
// remaining = [3, 4, 5]

// Destructuring objects
const { a: propA, ...others } = { a: 1, b: 2, c: 3 };
// others = { b: 2, c: 3 }
```

**Senior insight:** Rest parameters replace the old `arguments` object — they give you a real array with all array methods, and work with arrow functions (which don't have `arguments`).

---

### 10. Count Occurrences / Frequency of Array Elements

```js
const input = ["a", "b", "c", "a", "c", "a"];

// ─── Method 1: reduce (most common interview answer) ──────────────────────
const freq = input.reduce((acc, item) => {
  acc[item] = (acc[item] ?? 0) + 1;
  return acc;
}, {});
// { a: 3, b: 1, c: 2 }

// ─── Method 2: forEach ────────────────────────────────────────────────────
const freq2 = {};
input.forEach(item => {
  freq2[item] = (freq2[item] ?? 0) + 1;
});

// ─── Method 3: Map (preserves insertion order, handles all key types) ──────
const freq3 = new Map();
for (const item of input) {
  freq3.set(item, (freq3.get(item) ?? 0) + 1);
}
// Map { 'a' => 3, 'b' => 1, 'c' => 2 }

// ─── Bonus: sort by frequency ─────────────────────────────────────────────
const sorted = Object.entries(freq).sort(([, a], [, b]) => b - a);
// [['a', 3], ['c', 2], ['b', 1]]
```

**Senior insight:** Use `?? 0` instead of `|| 0` to be safe with falsy values (e.g., `0` would reset with `||`). For large datasets, a `Map` outperforms a plain object due to optimized key hashing.

---

### 11. Event Bubbling and Event Capturing

DOM events propagate in **3 phases**:

```
Capturing  →  Target  →  Bubbling
 (top-down)           (bottom-up)
```

```js
// ─── BUBBLING (default) — inner to outer ─────────────────────────────────
// Click on <button> → fires on button → div → body → document → window

document.querySelector('.parent').addEventListener('click', (e) => {
  console.log('parent clicked');
});
document.querySelector('.child').addEventListener('click', (e) => {
  console.log('child clicked'); // fires first
  e.stopPropagation();          // stops bubbling here
});

// ─── CAPTURING — outer to inner (pass true or { capture: true }) ──────────
document.querySelector('.parent').addEventListener('click', handler, true);
// OR
document.querySelector('.parent').addEventListener('click', handler, { capture: true });

// ─── EVENT DELEGATION (practical use of bubbling) ─────────────────────────
// Attach one listener on parent instead of N listeners on children
document.querySelector('#list').addEventListener('click', (e) => {
  if (e.target.matches('li')) {
    console.log('Clicked item:', e.target.textContent);
  }
});
```

**Key methods:**

| Method | Effect |
|---|---|
| `e.stopPropagation()` | Stops the event moving to next element |
| `e.stopImmediatePropagation()` | Also prevents other handlers on same element |
| `e.preventDefault()` | Cancels default behavior (doesn't stop propagation) |

**Senior insight:** **Event delegation** is one of the most important performance patterns in the DOM — a single listener on a parent handles all dynamic children, avoiding memory leaks and repeated `addEventListener` calls.

---

## HTML & CSS

---

### 12. What's New in HTML5

HTML5 introduced semantic elements, native APIs, and multimedia support without plugins.

**Semantic Elements:**
```html
<header>, <footer>, <nav>, <main>, <article>, <section>, <aside>, <figure>, <figcaption>, <time>
```

**Forms Enhancements:**
```html
<input type="email" | "tel" | "date" | "range" | "color" | "search" | "url">
<input required placeholder="..." pattern="[A-Za-z]+" autofocus>
<datalist>, <output>, <progress>, <meter>
```

**Native Multimedia:**
```html
<video src="..." controls autoplay muted loop poster="thumb.jpg"></video>
<audio src="..." controls></audio>
<canvas id="c" width="500" height="300"></canvas>
<svg>...</svg>
```

**New APIs:**
- **Web Storage** — `localStorage`, `sessionStorage`
- **IndexedDB** — client-side structured storage
- **Web Workers** — background threads (no DOM access)
- **WebSockets** — full-duplex communication
- **Geolocation API** — `navigator.geolocation`
- **Drag and Drop API**
- **History API** — `pushState`, `replaceState` (SPA routing)
- **Fetch API** (partially HTML5 era)
- **Server-Sent Events**

---

### 13. CSS Box Model

Every element is a rectangular box composed of 4 areas:

```
┌─────────────────────────────────┐
│            MARGIN               │
│  ┌───────────────────────────┐  │
│  │         BORDER            │  │
│  │  ┌─────────────────────┐  │  │
│  │  │      PADDING        │  │  │
│  │  │  ┌───────────────┐  │  │  │
│  │  │  │    CONTENT    │  │  │  │
│  │  │  └───────────────┘  │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

```css
/* Default: box-sizing: content-box */
/* width = content only; total = width + padding + border */
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid;
  /* Actual rendered width = 200 + 40 + 10 = 250px */
}

/* box-sizing: border-box (recommended, industry standard) */
/* width INCLUDES padding + border */
*, *::before, *::after {
  box-sizing: border-box;
}
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid;
  /* Actual rendered width = 200px exactly */
}
```

**Senior insight:** Always apply `box-sizing: border-box` globally. It makes layout math intuitive and is the default in most CSS frameworks (Tailwind, Bootstrap).

---

### 14. Flexbox Model

Flexbox is a one-dimensional layout system (row **or** column).

```css
.container {
  display: flex;

  /* Main axis direction */
  flex-direction: row | row-reverse | column | column-reverse;

  /* Wrapping */
  flex-wrap: nowrap | wrap | wrap-reverse;

  /* Shorthand */
  flex-flow: row wrap;

  /* Alignment along main axis */
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;

  /* Alignment along cross axis */
  align-items: stretch | flex-start | flex-end | center | baseline;

  /* Multi-line cross-axis alignment */
  align-content: flex-start | flex-end | center | space-between | space-around;

  gap: 16px;           /* row and column gap */
  row-gap: 16px;
  column-gap: 8px;
}

/* Child (flex item) properties */
.item {
  flex-grow: 1;    /* ability to grow to fill space */
  flex-shrink: 1;  /* ability to shrink */
  flex-basis: 0%;  /* initial main size */
  flex: 1;         /* shorthand: grow=1, shrink=1, basis=0 */

  order: 2;           /* reorder without changing DOM */
  align-self: center; /* override align-items for this item */
}
```

**Common pattern — centering:**
```css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

---

### 15. CSS Mixins

A **mixin** is a reusable block of CSS declarations. Native CSS doesn't have mixins — they exist in **preprocessors** like SCSS/Sass.

```scss
// Define a mixin
@mixin flex-center($direction: row) {
  display: flex;
  flex-direction: $direction;
  justify-content: center;
  align-items: center;
}

@mixin respond-to($breakpoint) {
  @if $breakpoint == mobile {
    @media (max-width: 767px) { @content; }
  } @else if $breakpoint == tablet {
    @media (max-width: 1024px) { @content; }
  }
}

// Use with @include
.hero {
  @include flex-center(column);

  @include respond-to(mobile) {
    padding: 16px;
  }
}
```

**In plain CSS (modern approach):** Custom properties + `@layer` can partially replicate reusability, but true mixins require a preprocessor.

---

### 16. What is SCSS / Sass?

**SCSS** (Sassy CSS) is a superset of CSS that compiles down to plain CSS. It adds:

```scss
// ─── Variables ────────────────────────────────────────────────────────────
$primary: #3498db;
$font-size-base: 16px;

// ─── Nesting ──────────────────────────────────────────────────────────────
.nav {
  background: $primary;

  &:hover { opacity: 0.9; }       // & = parent selector
  &__item { padding: 8px; }       // BEM-friendly
  &--active { font-weight: bold; }
}

// ─── Mixins (see above) ────────────────────────────────────────────────────

// ─── @extend / Inheritance ────────────────────────────────────────────────
%btn-base {
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
.btn-primary { @extend %btn-base; background: $primary; }
.btn-danger  { @extend %btn-base; background: red; }

// ─── Functions & Operations ───────────────────────────────────────────────
.sidebar { width: 100% / 3; }

// ─── Partials & Imports ───────────────────────────────────────────────────
@use 'variables';      // modern (namespaced)
@use 'mixins' as m;
// @import is deprecated in favor of @use / @forward
```

**Senior insight:** SCSS compiles to CSS at build time (via Sass, webpack, Vite). There's zero runtime overhead. Modern projects often use CSS Modules or CSS-in-JS (styled-components) as alternatives, but SCSS remains dominant in large codebases.

---

### 17. Web Services in HTML5

HTML5 introduced several communication APIs to replace old plugin-based approaches:

**WebSocket — Full-duplex, persistent connection:**
```js
const ws = new WebSocket('wss://example.com/chat');
ws.onopen    = () => ws.send(JSON.stringify({ type: 'join', room: 'general' }));
ws.onmessage = (e) => console.log(JSON.parse(e.data));
ws.onerror   = (e) => console.error(e);
ws.onclose   = ()  => console.log('Disconnected');
```

**Server-Sent Events (SSE) — One-way server push:**
```js
const es = new EventSource('/api/stream');
es.onmessage = (e) => console.log(e.data);
es.addEventListener('update', (e) => updateUI(JSON.parse(e.data)));
```

**Fetch API — Modern HTTP requests:**
```js
const res  = await fetch('/api/users', { method: 'POST', body: JSON.stringify(data),
  headers: { 'Content-Type': 'application/json' } });
const json = await res.json();
```

**Web Workers — Background threads:**
```js
const worker = new Worker('worker.js');
worker.postMessage({ task: 'heavyCompute', data: largeArray });
worker.onmessage = (e) => console.log('Result:', e.data);
```

| API | Direction | Use Case |
|---|---|---|
| Fetch | Client → Server | REST/GraphQL calls |
| WebSocket | Bidirectional | Chat, gaming, live collab |
| SSE | Server → Client | Live feeds, notifications |
| Web Workers | Thread isolation | CPU-heavy tasks off main thread |

---

### 18. Flatten a Nested Array

```js
const a = [1, [2, 3], [4], 5];
// Output: [1, 2, 3, 4, 5]

// ─── Method 1: Array.flat() — cleanest, recommended ──────────────────────
a.flat();        // one level deep (default)
a.flat(1);       // same as above
a.flat(Infinity); // fully flatten any depth

// ─── Method 2: flatMap (flatten + map in one pass) ────────────────────────
a.flatMap(x => x); // one level only

// ─── Method 3: reduce + concat (classic) ─────────────────────────────────
const flatten = arr =>
  arr.reduce((acc, val) =>
    Array.isArray(val) ? acc.concat(flatten(val)) : [...acc, val], []);

flatten(a); // [1, 2, 3, 4, 5]

// ─── Method 4: Generator (memory-efficient for large data) ────────────────
function* deepFlatten(arr) {
  for (const item of arr) {
    if (Array.isArray(item)) yield* deepFlatten(item);
    else yield item;
  }
}
[...deepFlatten([1, [2, [3, [4]], 5]])]; // [1, 2, 3, 4, 5]
```

**Senior insight:** For an interview, always mention `flat(Infinity)` first, then offer the recursive `reduce` version to show understanding. The generator version demonstrates deep knowledge of iterators and lazy evaluation.

---

## Quick Reference Cheat Sheet

| Topic | Key Takeaway |
|---|---|
| Call Stack | LIFO, sync only; async goes through Event Loop |
| Shallow Copy | `{...obj}` or `Object.assign` — nested refs shared |
| Deep Copy | `structuredClone(obj)` — modern standard |
| Destructuring | Cleaner prop access; support defaults, rename, rest |
| Closure | Function + its lexical scope; enables encapsulation |
| Inheritance | ES6 `class`/`extends` over prototype chains |
| Object.assign | Shallow merge; triggers setters; mutates target |
| for...in | Keys (use `hasOwn` guard); for...of for values |
| Hoisting | `var` → undefined; `let`/`const` → TDZ; fn decls → full |
| Rest vs Spread | Rest collects `...args`; Spread expands `...arr` |
| Frequency Count | `reduce` with `acc[item] = (acc[item] ?? 0) + 1` |
| Event Bubbling | Inner → outer; delegation pattern saves memory |
| HTML5 | Semantic tags, canvas, video, Web Workers, WS, SSE |
| Box Model | `border-box` globally; width includes padding+border |
| Flexbox | 1D layout; `justify-content` + `align-items` |
| Mixins (SCSS) | Reusable style blocks via `@mixin` / `@include` |
| SCSS | Superset of CSS; variables, nesting, extend, functions |
| Web Services | Fetch, WebSocket, SSE, Web Workers |
| Array Flatten | `flat(Infinity)` or recursive reduce |