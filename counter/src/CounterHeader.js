import React from 'react';
import './Counter.css';

function CounterHeader({counter,color}) {
    return (
        <div className="header">
            <h1>TALLY COUNTER</h1>
            <span className="spn">{counter}</span>
            <hr/>
        </div>
    )
}

export default CounterHeader
