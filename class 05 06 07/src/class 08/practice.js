import React from 'react'
import Check from './Proptypes'
export default function Practice() {
const array=['Tayyeba ','yasmin','BSCS',20,'tayyebajasmin@gmail.com']
const obj={
    firstname:'Tayyeba',
    lastname:'yasmin',
    clss:'BSCS',
    age:18,
    email:'tayyebajasmin@gmail.com'
}
const string="React JS"
    return (
        <div>
            <Check Array={array} str={string} obj={obj}/>
        </div>
    )
}


