import './App.css'
import { useState } from "react";
export default function Counter() {
    let [count, setcount] = useState(1);
    let [ismorning, setmorning] = useState(true);
    return (<div className={`box ${ismorning ? 'Morning' : 'Night'}`}>
        <h1>Total Counts = {count}</h1>
        <h1>Day time is {ismorning ? 'Moring' : 'Night'}</h1>
        <br />
        <button onClick={() => setcount(count + 1)}>update count</button>
        <button on onClick={() => setmorning(!ismorning)}>update time</button>
    </div>);
}
//export default Counter;