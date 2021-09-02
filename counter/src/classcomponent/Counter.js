import './Counter.css'
import CounterHeader from './CounterHeader'
import React, { Component } from 'react'
import { FaLock } from 'react-icons/fa';
import { FaUnlock } from 'react-icons/fa';
export default class Counter extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0,
            disable: true,
            color: "rgb(52, 25, 83)"

        }

    }
    forwardbtn = () => {
        this.state.disable && this.setState({ counter: this.state.counter + 1 })
    }
    backwardbtn = () => {
        if (this.state.counter > 0 && this.state.disable) {
            this.setState({ counter: this.state.counter - 1 })
        }
    }
    Reset = () => {
        this.state.disable && this.setState({ counter: 0 })
    }
    lock = () => {
        this.setState({ disable: !this.state.disable })
    }

    chngeclr = (e) => {
        this.setState({ color: e.target.value })
    }
    render() {
        return (
         
            <div className="count" style={{ backgroundColor: this.state.color }} >
                <CounterHeader counter={this.state.counter} />
                <div className="btnclass">
                    <button onClick={this.backwardbtn} style={{ color: this.state.color }}>-</button>
                    <button onClick={this.forwardbtn} style={{ color: this.state.color }}>+</button>
                </div>
                <button className="reset" onClick={this.Reset}>Reset</button>
                <div className="bottom">
                    <input type="color" onChange={this.chngeclr} />
                    <button className="lock" onClick={this.lock} style={{ backgroundColor: this.state.color }}>{
                        this.state.disable ? <FaUnlock size="40px" /> : <FaLock size="40px" />}</button>
                </div>

            </div>
        )
    }
}

