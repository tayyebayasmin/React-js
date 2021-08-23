import React from 'react'
import iphone from '../assets/iphone-12.png'
import './smartphone.css'
function Smartphone() {
    

    return (

        <div className="phone">
           <img src={iphone} />
           <p><br/>Apple iPhone 11 Pro 256GB<br/>Single Sim (PTA Approved)<br/>Silver</p>
            <h4 style={{color:"#b11e22" ,fontSize:"16px"}}>RS 1,87000 <span>RS 2,13000</span></h4>
        </div>

    )
}
export default Smartphone;
