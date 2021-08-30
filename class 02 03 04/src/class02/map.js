import React from 'react'

function Practice() {
    const heading="Use .map() method in ReactJS"
    const colors=['Black', 'Green', 'Yellow', 'Purple',' Red', 'White']
    const specification={
        Processor: 'Apple A13 Bionic (7 nm+)',
        RAM: '4 GB',
        Storage:'256 GB',
        Display:'6.1 inches',
        Camera:' 12 MP (wide) + 12 MP (ultrawide)',
        Battery: 'Non-removable Li-Ion 3110 mAh battery + Fast'
    }
    return (
        <div>
            <h1>{heading}</h1>

            {colors.map(dis=><h6>color of my phone is {dis}</h6>)}
            
            <h5>{specification.Battery}</h5>
        </div>
    )
}
export default Practice