import React from 'react'
import Props from './Props'
import Data from './Data'
import WithoutMap from './WithoutMap'
import './Props.css'
import Header from './Header'
export default function Main() {
    return (
        <div>
            <Header/>
            {/* <Props data={Data}/> */}

            <div className="cardmain">
                <WithoutMap data={Data[0]} />
                <WithoutMap data={Data[1]} />
                <WithoutMap data={Data[2]} />
                <WithoutMap data={Data[3]} />
                <WithoutMap data={Data[4]} />
            </div>
        </div>
    )
}
