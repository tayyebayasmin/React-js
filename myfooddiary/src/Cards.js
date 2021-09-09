import React from 'react'

export default function Cards(props) {
   
    return (

        <div>
            <div className="card" style={{width: "24rem" , height:"25rem"}}>
                <img className="card-img-top" src={props.data.img} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.data.title}</h5>
                        <p className="card-text">{props.data.desc}</p>
                    </div>

            </div>
        </div>
    )
}
