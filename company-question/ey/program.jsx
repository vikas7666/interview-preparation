/* 
Build a React component with a counter/timer and three buttons: Start, Stop/Pause, and Reset.

Clicking Start should start the counter.
Clicking Stop/Pause should stop the counter without resetting it.
Clicking Reset should stop the counter and reset it to 0.
Make sure multiple intervals are not created.
Clean up the interval when the component unmounts.

*/
import React, { useState, useEffect } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) {
            return;
        }

        const timerInterval = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);

        return () => {
            clearInterval(timerInterval);
        };
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setCount(0);
    };

    return (
        <div>
            <h1>{count}</h1>

            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default App;