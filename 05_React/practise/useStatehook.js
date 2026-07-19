import { useState } from "react"

// useState hook
export default function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h2 classname={count}> Count {count}</h2>
            <button onClick={() => setCount(count + 1)} id={count}>Increment</button>
        </>
    )
}

// use Ref hook 
import { useRef } from "react"
export default function App() {
    const inputRef = useRef()
    return (
        <>
            <input ref={inputRef} />
            <button onClick={() => { inputRef.current.focus() }}> Click to Focus</button>
        </>
    )
}

/* 
    The name reflects the current value or the current DOM element.
    .current is not JavaScript syntax—it's a property that React defines on the object returned by useRef().

    React internally creates an object like this:

    const ref= {
        current : 10
    }

    Why didn't React just return the value directly?
    const ref = 10;
    ref = 20;

    This won't work because const variables cannot be reassigned.

    Instead, React returns an object:

    React implementation (conceptually)
    
*/

function useRef(initialValue) {
    return {
        current: initialValue
    };

}
const countRef = useRef(0);

const countRef = {
    current: 0
};

countRef.current++;

// No re - render occurs because the object itself hasn't changed—only one of its properties has.

// -------------------- useMemo ---------------------------------

import { useMemo, useState } from "react"
export default function App() {
    const [count, setCount] = useState(0);
    console.log('component render');
    function expensiveCalculation() {
        console.log('Expensive Calculation called')
    }
    const total = useMemo(() => {
        expensiveCalculation()
    }, [])
    return (
        <>
            <h2>count {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment +</button>
        </>
    )
}


/*
    Use cases
    Filtering large lists
    Sorting data
    Heavy calculations
    Dashboard statistics

*/


// ----------------------------------------------------------

import { useMemo, useState } from "react"
import Child from './Child.js'

export default function App() {
    function handleClick() {
        console.log('Parent Render')
    }
    return (
        <>
            <h1>Hello</h1>
            <button onClick={() => handleClick()}>Parent Button</button>
            <Child onClick={handleClick}></Child>
        </>
    )
}
export default function Child({ onClick }) {
    console.log('child Render')
    return (
        <button onClick={onClick}>Child Button</button>
    )
}
/*
App Render
↓
handleClick created
↓
Child Render
*/

// Scenario 2: Add state    

import { useMemo, useState, useCallback } from "react"
import Child from './Child.js'

export default function App() {
    console.log("Parent component Render");
    const [count, setCount] = useState(0);

    // function handleClick() {
    //     console.log("handleClick Clicked");
    // }

    const handleClick = useCallback(() => {
        console.log("handle Clicked");
    }, []);

    return (
        <>
            <h1>Hello</h1>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <Child onClick={handleClick} />
        </>
    );
}

import React from "react";

const Child = function Child({ onClick }) {
    console.log("Child Component Render");
    return <button onClick={onClick}>Child</button>;
}
export default Child

/*
    When we clicked Parent Increment button (Even we don't want child render but still render )
      - Parent component Render
      - Child Component Render

    click child button
     - handleClick Clicked
*/

// how to resolve if i click parent button child won't rerender 

import { useMemo, useState, useCallback } from "react"
import Child from './Child.js'

export default function App() {
    console.log("Parent component Render");
    const [count, setCount] = useState(0);

    // function handleClick() {
    //   console.log("handleClick Clicked");
    // }

    const handleClick = useCallback(() => {
        console.log("handle Clicked");
    }, []);

    return (
        <>
            <h1>Hello</h1>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <Child onClick={handleClick} />
        </>
    );
}

import React from "react";

const Child = React.memo(function Child({ onClick }) {
    console.log("Child Component Render");
    return <button onClick={onClick}>Child</button>;
})
export default Child

/* 
Parent renders
        │
        ▼
useCallback
Keeps same function
        │
        ▼
React.memo
Props didn't change
        │
        ▼
Child render skipped 

*/

/*
    useCallback → keeps the function reference stable.
    React.memo → skips rendering when props are unchanged.
    useMemo → caches expensive computed values, not functions or components.
*/