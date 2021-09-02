import React, { Component } from 'react'
import PropTypes from 'prop-types';


export default class Check extends Component {
    // static propTypes = {
    //     Array: PropTypes.array,
    //     obj:PropTypes.object,
    //     str:PropTypes.string
      
    //   };
    render() {
       
        const {Array,str,obj:{firstname,lastname,clss,age,email}}=this.props
        console.log(this.props)
        return (
            <div style={{textAlign:"center",fontFamily: "cooper" }}>
            {Array}<br/>
            {str}<br/>
            {email}
            </div>
        )
    }
}

Check.propTypes = {
  Array: PropTypes.arrayOf(PropTypes.string),
  obj:PropTypes.shape({
      firstname:PropTypes.string,
      lastname:PropTypes.string,
      clss:PropTypes.string,
      age:PropTypes.number,
      email:PropTypes.string
  }),
  str:PropTypes.string

};
