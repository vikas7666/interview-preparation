/**
 * SHALLOW COPY vs DEEP COPY — Senior Developer Notes
 * ----------------------------------------------------
 * A senior-level answer should cover: what each copy type does, WHY it
 * matters (shared references → mutation bugs), the trade-offs of each
 * copying technique, and the edge cases interviewers probe for
 * (functions, circular refs, Dates, Maps/Sets, performance).
 */

// ============================================================
// 1. SHALLOW COPY
// ============================================================
/**
 * A shallow copy duplicates only the top-level properties of an object.
 * If a property's value is itself a reference type (object/array), the
 * COPY still points to the SAME nested object in memory. Mutating that
 * nested object through either reference affects both.
 *
 * Common ways to create a shallow copy:
 *   - Spread operator:      { ...obj }
 *   - Object.assign({}, obj)
 *   - Array.prototype.slice() / [...arr]  (for arrays)
 */

const employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000,
    address: { city: "New York", zip: "10001" }, // nested object — the key test case
};

const shallowCopy = { ...employee };
// const shallowCopy = Object.assign({}, employee); // equivalent alternative

shallowCopy.ename = "Beck";          // top-level primitive → does NOT affect original
shallowCopy.address.city = "Boston"; // nested object → DOES affect original (shared reference)

console.log("Original:", employee.ename, employee.address.city); // "Jack" "Boston"  <-- bug surfaces here
console.log("Shallow copy:", shallowCopy.ename, shallowCopy.address.city); // "Beck" "Boston"

// This is the exact gotcha interviewers want you to explain out loud:
// "Top-level fields are copied by value; nested objects/arrays are copied by reference."

// ============================================================
// 2. DEEP COPY — approach 1: JSON.parse(JSON.stringify(...))
// ============================================================
/**
 * Simple and fast for plain data, but has real limitations a senior
 * dev should be able to list without prompting:
 *   - Loses functions, undefined, Symbol values (silently dropped)
 *   - Throws on circular references
 *   - Converts Date objects to ISO strings (loses the Date type)
 *   - Does not handle Map, Set, RegExp, or typed arrays correctly
 */

const employeeWithDate = {
    eid: "E103",
    ename: "Jill",
    hiredOn: new Date(),
    address: { city: "Chicago" },
};

const jsonDeepCopy = JSON.parse(JSON.stringify(employeeWithDate));
jsonDeepCopy.address.city = "Denver";

console.log(employeeWithDate.address.city);  // "Chicago" — unaffected, true deep copy
console.log(jsonDeepCopy.hiredOn instanceof Date); // false — Date became a string!

// ============================================================
// 3. DEEP COPY — approach 2: structuredClone() (modern, native, preferred)
// ============================================================
/**
 * Available in all modern browsers and Node.js 17+. This is the
 * technique to lead with in 2025+ interviews — it's native, handles
 * Dates/Maps/Sets/typed arrays correctly, and supports circular refs.
 * Still cannot clone functions or DOM nodes (throws instead of silently
 * dropping them, which is arguably safer than JSON's silent data loss).
 */

const nativeDeepCopy = structuredClone(employeeWithDate);
nativeDeepCopy.address.city = "Miami";

console.log(employeeWithDate.address.city); // "Chicago" — unaffected
console.log(nativeDeepCopy.hiredOn instanceof Date); // true — Date type preserved

// ============================================================
// 4. DEEP COPY — approach 3: lodash.cloneDeep (when functions must survive)
// ============================================================
/**
 * Use when the environment doesn't support structuredClone, or the
 * object legitimately contains functions/class instances that need
 * to be preserved (structuredClone throws on functions).
 */

const _ = require("lodash");

const employeeWithMethod = {
    eid: "E102",
    ename: "Jack",
    salary: 50000,
    details() {
        return `Employee Name: ${this.ename} --> Salary: ${this.salary}`;
    },
};

const lodashDeepCopy = _.cloneDeep(employeeWithMethod); // clone the SAME object, not an unrelated one

lodashDeepCopy.eid = "E103";
lodashDeepCopy.ename = "Beck";
lodashDeepCopy.details = function () {
    return `Employee ID: ${this.eid} --> Salary: ${this.salary}`;
};

console.log(employeeWithMethod.details());  // "Employee Name: Jack --> Salary: 50000"
console.log(lodashDeepCopy.details());      // "Employee ID: E103 --> Salary: 50000"
// Confirms the two objects (and their methods) are fully independent.

// ============================================================
// 5. Writing your own recursive deepClone (common whiteboard question)
// ============================================================
/**
 * Interviewers often ask you to implement this from scratch to test
 * recursion + type-checking, without relying on a library.
 * This version handles plain objects, arrays, Dates, and a basic
 * circular-reference guard via a WeakMap — the detail that separates
 * a mid-level answer from a senior one.
 */
function deepClone(value, seen = new WeakMap()) {
    if (value === null || typeof value !== "object") return value; // primitives
    if (value instanceof Date) return new Date(value.getTime());
    if (value instanceof Map) {
        return new Map([...value].map(([k, v]) => [deepClone(k, seen), deepClone(v, seen)]));
    }
    if (value instanceof Set) {
        return new Set([...value].map((v) => deepClone(v, seen)));
    }
    if (seen.has(value)) return seen.get(value); // circular reference guard

    const clone = Array.isArray(value) ? [] : {};
    seen.set(value, clone);

    for (const key of Object.keys(value)) {
        clone[key] = deepClone(value[key], seen);
    }
    return clone;
}

const circular = { name: "A" };
circular.self = circular; // circular reference

const clonedCircular = deepClone(circular);
console.log(clonedCircular.self === clonedCircular); // true — self-reference preserved, no infinite loop

// ============================================================
// 6. Quick decision table (say this out loud in an interview)
// ============================================================
/**
 * | Technique                  | Handles nested objects | Functions | Dates/Maps/Sets | Circular refs |
 * |-----------------------------|:---:|:---:|:---:|:---:|
 * | Spread / Object.assign       | ❌ (shallow only) | ✅ (copied as-is) | ✅ (reference, not cloned) | N/A |
 * | JSON.parse(JSON.stringify()) | ✅ | ❌ lost | ❌ Dates → strings | ❌ throws |
 * | structuredClone()             | ✅ | ❌ throws | ✅ | ✅ |
 * | lodash.cloneDeep()             | ✅ | ✅ | ✅ | ✅ |
 * | Custom recursive deepClone     | ✅ | depends on impl | ✅ (if handled) | ✅ (with WeakMap) |
 *
 * Senior-level talking point: in React/Redux state management, prefer
 * immutable update patterns (spread + new nested objects, or a library
 * like Immer) over deep-cloning entire state trees on every update —
 * deep clones are correct but can be a performance smell if overused
 * on large state objects.
 */