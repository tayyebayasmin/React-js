import React from 'react'
import './Props.css'

export default function Props(props) {
    console.log(props)
    return (
        <>
        <div className="cardmain">
            {props.data.map((item) => (
                <div className="card" style={{ width: "18rem" }}>
                    <img src={item.image} className="card-img-top" />
                    <div className="card-body">
                        <h3 className="card-title" style={{ fontFamily: "cooper" }}>{item.name}</h3>
                        <h4 className="card-text" style={{ fontFamily: "cooper" }}>I'M {item.age}</h4>
                        <a href="#" className="btn btn-primary">More Info</a>
                    
                    </div>
                </div>

    ))}
    </div>



    </>
    )
}
