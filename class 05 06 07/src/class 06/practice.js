import React from 'react'
import Destructuring from './Destructuring'
export default function Practice(){
        const showName = () => {
            alert(name)
        }
            const name = "Tayyeba Yasmin"
            const email = "tayyebajasmin@gmail.com"
            const object = { name, email, showName }
            const array = ["Lahore", "FSD", "SKP", "Multan", { object }]
            return (
                <div>
                    <Destructuring arr={array} />
                </div>
            )
        }

