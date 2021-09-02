import React, { Component } from 'react'
import Data from './Data'
import './gallery.css'
import Cards from './Cards'
export default class Gallery extends Component {
    constructor(){
        super()
        this.state={
            members:Data
        }
    
    }
    render() {
        return (
            <>
            <h1>SetState</h1>
            <h3>Total Members:{this.state.members.length}</h3>
            <div className="cardsdiv">
            {this.state.members.map((item,i) => <Cards data={item} key={i}/> )}
            </div>
            <div className="buttons">
            <button onClick={()=>this.setState({members:Data})} >Display</button>
            <button onClick={()=>this.setState({members:[]})}>Clear</button>
            </div>
            </>
        )
    }
}
