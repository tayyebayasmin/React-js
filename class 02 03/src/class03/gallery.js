
import React from 'react'
import Data from './data'
import './gallery.css'
const Gallery = () => {

    return (
        <>
            <h1>Gallery</h1>
            <div className="cardmain">
                {Data.map((item) => (
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
export default Gallery;