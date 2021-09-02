import React, { Component } from 'react'
import Data from './SliderData'
import './slider.css'
import Header from './Header'
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
export default class ImageSlider extends Component {
    constructor(){
        super()
        this.state={
            currentindex:0
        }
    }
    
    nextbtn=()=>{
        if(this.state.currentindex<Data.length-1){
        this.setState({currentindex:this.state.currentindex+1})
        }
    }
    prevbtn=()=>{
        if(this.state.currentindex>0){
        this.setState({currentindex:this.state.currentindex-1})
        }
    }
    render() {
        return (
            <>
            <Header/>
            <div className="slider">
            
                <button onClick={this.prevbtn} className="leftarr"><FaArrowAltCircleLeft size="40px" /></button>
                
                <img src={Data[this.state.currentindex]}/>
                <button onClick={this.nextbtn} className="rightarr"><FaArrowAltCircleRight size="40px" /></button>
            </div>
            </>
        )
    }
}
