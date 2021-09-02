import React, { Component } from 'react'
import './gallery.css'
export default class Cards extends Component {
    render() {
        const{name,age,image}=this.props.data
        function click() {
            alert("Clicked!");
        }
        return (
    
            <div className="card" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top" />
            <div className="card-body">
                <h3 className="card-title" style={{ fontFamily: "cooper" }}>{name}</h3>
                <h4 className="card-text" style={{ fontFamily: "cooper" }}>I'M {age}</h4>
                <button type="button" className="btn btn-secondary" onClick={click}>More Info</button>
            </div>
           
        </div>
        )
    }
}
