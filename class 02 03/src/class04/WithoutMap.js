import React from 'react'

export default function WithoutMap(props) {
    return (
    <>
        
    <div className="cardmain">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={props.data.image} className="card-img-top" />
                    <div className="card-body">
                        <h3 className="card-title" style={{ fontFamily: "cooper" }}>{props.data.name}</h3>
                        <h4 className="card-text" style={{ fontFamily: "cooper" }}>I'M {props.data.age}</h4>
                        <a href="#" className="btn btn-primary">More Info</a>
                    
                    </div>
                </div>


    </div>



    </>
    )
}
