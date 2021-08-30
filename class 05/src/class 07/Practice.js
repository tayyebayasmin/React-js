import React from 'react'
import Gallery from './Gallery'
import Data from './Data'
import Header from './Header'
import './Gallery.css'
export default function Main() {
    return (
        <div>
            <Header/>
            <div className="cardmain" >
            {Data.map((item,i) => <Gallery data={item} key={i}/>)}
            </div>

           
        </div>
    )
}
