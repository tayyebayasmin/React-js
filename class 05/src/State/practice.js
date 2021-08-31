import React, {useState} from 'react'
import './practice.css'

export default function Practice() {
    // var counter=0;
    const [counter, setcounter] = useState(0)
    const backwardhandler=()=>{
        // counter=counter-1;
        // console.log(counter)
        if(counter>0){
        setcounter(counter-1)
        }
    }
    const forwardhandler=()=>{
        // counter=counter+1;
        // console.log(counter)
        setcounter(counter+1)
    }
    return (
        <div className="count">
            
            <button onClick={backwardhandler}>-</button>
            <span>{counter}</span>
            <button onClick={forwardhandler}>+</button>
        </div>
    )
}
