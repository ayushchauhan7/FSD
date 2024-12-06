import React from "react";
import "./CounterApp.css";

const CounterApp = () => {
    const [count, setCount] = React.useState(0);

    return (
        <div className="disp">
            <h1 className="header">{count}</h1>
            <button
                className="btn"
                onClick={() => setCount(count + 1)}
                title="Increment the count"
            >
                Increment
            </button>
            <button
                className="btn"
                onClick={() => setCount(0)}
                title="Reset the count"
            >
                Reset
            </button>
            <button
                className="btn"
                onClick={() => setCount((prevCount) => Math.max(prevCount - 1, 0))}
                title="Decrement the count"
            >
                Decrement
            </button>
        </div>
    );
};

export default CounterApp;
