import React from "react";
import {Link} from "react-router-dom"

export default function InputControl(props){
    
    return(
        <>
       {props.label && <label> {props.label}</label>}
       <input type="text" {...props} />
        </>
    )
} 