import React, { useState } from 'react'
import './Counter.css'
import CounterHeader from './CounterHeader'
import { FaLock } from 'react-icons/fa';
import { FaUnlock } from 'react-icons/fa';
export default function Counter() {
    const [counter, setcounter] = useState(0)
    const [disable, setDisable] = useState(true);
    const [color, setColor] = useState("rgb(52, 25, 83)");

    const backwardbtn = () => {
        if (counter > 0 && disable) {
            setcounter(counter - 1)
        }
    }
    const forwardbtn = () => {
        disable && setcounter(counter + 1)
    }
    const Reset = () => {
        disable && setcounter(0)
    }
    const lock = () => {
        setDisable(!disable)
    }
    const chngeclr = (e) => {
        setColor(e.target.value)
        // console.log(e)
    }
    return (

        <div className="count" style={{ backgroundColor: color }}>
            <CounterHeader counter={counter} color={color} />
            <div className="btnclass">
                <button onClick={backwardbtn}>-</button>
                <button onClick={forwardbtn}>+</button>
            </div>
            <button className="reset" onClick={Reset}>Reset</button>
            <div className="bottom">
                <input type="color" onChange={chngeclr} />
                <button className="lock" onClick={lock} style={{ backgroundColor: color }}>{
                    disable ? <FaUnlock size="40px" /> : <FaLock size="40px" />}</button>
            </div>
        </div>
    )
}
