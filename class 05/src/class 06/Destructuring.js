import React, { Component } from "react";

class Destructuring extends Component {
    render() {
       console.log(this.props)
       const {arr:[C1,C2,C3,C4,{object:obj}]}=this.props
        // const { arr:[,,,,{object:{name:Name,email:Email,showName:displayName}}]} = this.props;

    //    console.log(C1)
    //    console.log(obj)
        const {name:Name,email:Email,showName:displayName}=obj
        // console.log(Email)
        // displayName()
        const Cities = [C1, C2, C3, C4];


    
        return (
            <div style={{textAlign:"center" ,fontFamily: "cooper" , fontSize:"30px" }}>
                <h1 style={{color:"red"}}>Destructuring array</h1>
                 {Cities.map((city,i) => <span key={i}>{city}<br/></span>  )}
                 <h1 style={{color:"red"}}>Destructuring array Object</h1>
                 <span>{Name}<br/></span>
                 <span>{Email}<br/></span>
                <button onClick={displayName}>Display Name</button>     
            </div>
        );
    }
}

export default Destructuring;
