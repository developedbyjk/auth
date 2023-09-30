import React from "react";
import {Link} from "react-router-dom"

export default function Home(props){
    console.log(props)
    return(
        <>
        <h1>Home</h1>
        <h3><Link to="/login">Login</Link></h3>
        <h3><Link to="/Signup">Sign up</Link></h3>
        <h2>{props.name ? `Welcome - ${props.name}` : "Login Please"}</h2>
        </>
    )
}