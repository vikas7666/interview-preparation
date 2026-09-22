# Frontend Interview Questions

> Questions asked in today's interview, organized by technology/topic.

---

# JavaScript

## 1. What is the difference between `==` and `===`?

Explain the difference between the double-equality operator (`==`) and the triple-equality operator (`===`).

- What is loose equality?
- What is strict equality?
- How does type coercion affect `==`?
- Why might `===` be preferred?

## 2. What is Hoisting in JavaScript?

Explain hoisting in JavaScript.

- How does hoisting work with `var`?
- How does it differ for `let` and `const`?
- How are function declarations hoisted?

## 3. What is a Closure in JavaScript?

Explain what a closure is and how it works.

- What is lexical scope?
- How can an inner function access variables from its outer function?
- What are practical use cases for closures?

## 4. What is the Difference Between `var`, `let`, and `const`?

Explain the differences between `var`, `let`, and `const` in JavaScript.

Consider:

- Scope: function scope vs. block scope
- Hoisting behavior
- Temporal Dead Zone (TDZ)
- Redeclaration
- Reassignment
- Initialization requirements
- Practical situations where each should be used

Example:

```javascript
var a = 10;
let b = 20;
const c = 30;
```

## 4. What will be the output?

```javascript
var a = 10;

{
    var a = 20;
}

console.log(a);
```

## 5. What will be the output?

```javascript
var a = 10;

function test() {
    console.log(a);
    var a = 20;
}

test();
```

## 6. What will be the output?

```javascript
1 == "1"
null == undefined
```

---

# React

## 1. What is the React Lifecycle?

Explain the React component lifecycle.

- What happens during mounting?
- What happens during updating?
- What happens during unmounting?
- How does the lifecycle work with functional components and Hooks?
- How does `useEffect` relate to lifecycle behavior?

## 2. What is the Latest Version of React?

What is the latest stable version of React?

> Verify the version against the current official React documentation when preparing for an interview, because React versions change over time.

## 3. What is React Fiber?

Explain React Fiber.

- What problem was Fiber designed to solve?
- How does Fiber affect React's rendering/reconciliation process?
- How does it support scheduling and prioritization of work?

## 4. How Would You Optimize a Website?

If you are asked to optimize the performance of a website, what techniques would you use?

Consider:

- Code splitting
- Lazy loading
- Image optimization
- Bundle-size reduction
- Caching
- Minification
- Reducing unnecessary re-renders
- `React.memo`
- `useMemo`
- `useCallback`
- Virtualization for large lists
- Network/API optimization
- Core Web Vitals

## 5. Coding Question: Start, Pause, and Reset Counter/Timer

Build a UI with three buttons:

- **Start**
- **Pause**
- **Reset**

Requirements:

1. When the user clicks **Start**, the count/timer should begin.
2. When the user clicks **Pause**, the count/timer should pause.
3. When the user clicks **Reset**, the count/timer should reset to its initial value.
4. The implementation should correctly handle the timer/interval and avoid creating unnecessary multiple intervals.

### React-specific considerations

- Which Hook would you use to store the count?
- Which Hook would you use to manage the interval side effect?
- How would you clean up the interval?
- How would you prevent multiple intervals from running at the same time?

---

# Next.js

## 1. What is the Latest Version of Next.js?

What is the latest stable version of Next.js?

> Verify the version against the current official Next.js documentation when preparing for an interview, because Next.js versions change over time.

## 2. Enterprise Application Architecture

If you need to build an enterprise-level application, what technology/architecture would you choose?

Discuss the reasoning behind your choice, including:

- Scalability
- Maintainability
- Performance
- Security
- Authentication and authorization
- API architecture
- Database considerations
- Testing
- Monitoring and observability
- Deployment and CI/CD
- Team/development workflow

---

# Interview Preparation Notes

For version-related questions, always check the current stable versions shortly before the interview.

For architecture questions, explain **why** you would choose a particular approach rather than naming only a framework or library.

