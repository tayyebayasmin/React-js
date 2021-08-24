
import React from 'react'
import Data from './data'
import './gallery.css'
 const Gallery=()=> {

    return (
        <>
        <h1>Gallery</h1>
         <div className="maincard">   {Data.map((item) => (
                <div class="card" style={{width: "18rem"}}>
                    <img src={item.image} class="card-img-top" />
                        <div class="card-body">
                            <h3 class="card-title" style={{fontFamily:"cooper"}}>{item.name}</h3>
                            <h4 class="card-text" style={{fontFamily:"cooper"}}>I'M {item.age}</h4>
                            <a href="#" class="btn btn-primary">More Info</a>
                        </div>
                </div>
        ))}</div>




    </>
            )
}
export default Gallery;