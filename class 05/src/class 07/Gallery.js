// import React, { Component } from 'react'
import React from 'react'
import './Gallery.css'
import PropTypes from 'prop-types';


export default function Gallery(props) {
    const { data: { id, name, age, image }} = props
    // console.log(name)
    function click() {
        alert("Clicked!");
    }

    return (
        <>
            
                <div className="card" style={{ width: "18rem" }}>
                    <img src={image} className="card-img-top" />
                    <div className="card-body">
                        <h3 className="card-title" style={{ fontFamily: "cooper" }}>{name}</h3>
                        <h4 className="card-text" style={{ fontFamily: "cooper" }}>I'M {age}</h4>
                        <button type="button" className="btn btn-secondary" onClick={click}>More Info</button>
                    </div>
                </div>





        </>
    )
}


Gallery.propTypes = {
  data: PropTypes.object.isRequired
};