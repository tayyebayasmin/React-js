import React, { Component } from 'react'
// import React from 'react'
import './Props.css'


// export default function Props(props) {
//     console.log(props)
//     function click() {
//         alert("Clicked!");
//       }
//     return (
//         <>
//         <div className="cardmain">
//             {props.data.map((item) => (
//                 <div className="card" style={{ width: "18rem" }}>
//                     <img src={item.image} className="card-img-top" />
//                     <div className="card-body">
//                         <h3 className="card-title" style={{ fontFamily: "cooper" }}>{item.name}</h3>
//                         <h4 className="card-text" style={{ fontFamily: "cooper" }}>I'M {item.age}</h4>
//                         <button type="button" className="btn btn-secondary" onClick={click}>More Info</button>
//                     </div>
//                 </div>

//     ))}
//     </div>



//     </>
//     )
// }

export default class Props extends Component {
     click=()=> {
                alert("Clicked!");
              }
    render() {
        return (
            <>
            <div className="cardmain">
                {this.props.data.map((item,index) => (
                    <div className="card" style={{ width: "18rem" }} key={index}>
                   
                        <img src={item.image} className="card-img-top" />
                        <div className="card-body">
                            <h3 className="card-title" style={{ fontFamily: "cooper" }}>{item.name}</h3>
                            <h4 className="card-text" style={{ fontFamily: "cooper" }}>I'M {item.age}</h4>
                            <button type="button" className="btn btn-secondary" onClick={this.click}>More Info</button>
                        </div>
                    </div>
    
        ))}
        </div>
    
        </>
        )
    }
}
