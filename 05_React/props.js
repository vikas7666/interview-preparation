/* 1. Props

    What are Props?
    Props (Properties) are used to pass data from Parent → Child.
    React has one-way data flow, so data always flows downward.

    Props are read-only (immutable).
    A child should never modify props.  

    Parent
    │
    │ Props
    ▼
    Child
*/

// Parent
import Child from "./Child";

export default function App() {
    return <Child name="John" age={30} />;
}

// Child
export default function Child({ name, age }) {
    return (
        <>
            <h2>{name}</h2>
            <h2>{age}</h2>
        </>
    );
}

// 2. Callback Functions (Child → Parent Communication)

/*
    A child cannot directly update the parent's state.
    Instead, the parent passes a callback function to the child.
*/

/* Parent
   │
   │ Pass callback
   ▼
Child
   │
   │ Calls callback
   ▼
Parent State Updated

*/

// Parent
import { useMemo, useState, useCallback } from "react"
import Child from './Child.js'

export default function App() {
    const [data, setData] = useState(0);

    function handleClick(data) {
        console.log('function called')
        setData(data)
    }
    return (
        <>
            <p>Parent Component {data}</p>
            <Child setChildData={handleClick} />
        </>
    )
}

// child 

import React from "react";

export default function Child({ setChildData }) {
    return (
        <button onClick={() => setChildData('Hello from Child Component')}>
            Child Button
        </button>
    );
}

// -------------------------------3. Lifting State Up  ----------------------------

// When two or more sibling components need the same data, move the state to their closest common parent.

import { useMemo, useState, useCallback } from "react"
import ChildA from './Child.js'
import ChildB from './ChildB.js'

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <ChildA count={count} setCount={setCount} />
            <ChildB count={count} />
        </>
    );
}

import React from "react";

export default function ChildA({ count, setCount }) {
    return (
        <button onClick={() => setCount(count + 1)}>
            Increment
        </button>
    );
}

import React from "react";

export default function ChildB({ count }) {
    return <h2>{count}</h2>;
}

// 4. Prop Drilling

/*
    Prop drilling happens when props are passed through components that don't actually need them.
    App
    │
    ▼
    Header
    │
    ▼
    Layout
    │
    ▼
    Sidebar
    │
    ▼
    Profile

    <App user={user} />
    <Header user={user} />
    <Layout user={user} />
*/

// 5. Context API

// The Context API solves prop drilling by making data available to any component in a subtree.

/* Provider
     │
     ▼
Any Child
     │
     ▼
useContext() */

import { createContext } from "react"

export const UserContext = createContext()

// Provide Context


{/* <UserContext.Provider value={{ name: "John" }}>
  <App />
  </UserContext.Provider>  
*/}


// Consume Context

import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
    const user = useContext(UserContext);

    return <h2>{user.name}</h2>;
}


// 1. Controlled Component
import { useState } from "react";

function App() {
    const [name, setName] = useState("");
    return (
        <>
            <h2>{name}</h2>
            <input value={name} onChange={(e) => setName(e.target.value)} />
        </>
    )
}
export default App;
