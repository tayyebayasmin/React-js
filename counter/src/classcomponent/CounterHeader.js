import './Counter.css';
import React, { Component } from 'react'

export default class CounterHeader extends Component {
    render() {
        return (
            <div className="header">
            <h1>TALLY COUNTER</h1>
            <span className="spn">{this.props.counter}</span>
            <hr/>
        </div>
        )
    }
}
