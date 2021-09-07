import React, { useState } from 'react'
import './App.css'
import { VscChevronDown } from "react-icons/vsc"
import { VscChevronUp } from "react-icons/vsc"


export default function Accordion() {
    const [Flag, setFlag] = useState(true)
    const [Flag1, setFlag1] = useState(true)

    const str = "React.js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It’s used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components. React was first created by Jordan Walke, a software engineer working for Facebook. React first deployed on Facebook’s newsfeed in 2011 and on Instagram.com in 2012"
    return (
        <div className="accordion">
            <h1>Accordion</h1>
            {Flag ? str.slice(0, 249) : str}
            <button onClick={() => { setFlag(!Flag) }}>{Flag ? "Read More" : "Read Less"}</button>
            <hr />
            <div className="accordion2">
                <p style={{ fontSize: "28px" }}>Prerequisites</p>

                <button onClick={() => { setFlag1(!Flag1) }}>{Flag1 ? <VscChevronDown color="black" size="35px" /> : <VscChevronUp color="black" size="35px" />}</button>
            </div>
            {Flag1 ? " " : <p>We’ll assume that you have some familiarity with HTML and JavaScript, but you should be able to follow along even if you’re coming from a different programming language. We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes. If you need to review JavaScript, we recommend reading this guide. Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements. You can use the Babel REPL to check what ES6 code compiles to.</p>}
        </div>
    )
}
