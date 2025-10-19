import React, { Component } from "react"
import First from "./ClassFirst"
import Second from "./ClassSecond"

class ClassApp extends React.Component{
    render(){
        return(
            <div>
            <h1>The is Class Component</h1>
            <First/>
            <Second/>
            </div>
        )
    }
}

export default ClassApp
