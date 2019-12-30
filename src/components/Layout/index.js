import React from "react"
import Header from "../Header"


export default props => (
    <div>
        <Header headerText={props.headerText}/>
        {props.children}
    </div>
)