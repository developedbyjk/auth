import React from "react";
import InputControl from "./InputControl";
import { Link,useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login(){
    const Navigate = useNavigate()
    const[values,Setvaluse] = React.useState({
       
        email:'',
        password:''
    })
    const[errMsg,setErrMsg] = React.useState("")
    const[btndisable,SetDisable] = React.useState(false)
    console.log(values)

    function handleSubmit(){
        if(!values.email || !values.password){
            setErrMsg("pura bhar bhai!");
            return
        }
        setErrMsg("");
        SetDisable(true)
        signInWithEmailAndPassword(auth,values.email,values.password)
        
        .then(async res=>{
            SetDisable(false)
            const user = res.user;
            console.log(res)
        
            Navigate("/")
        })
        .catch(err=>{
            SetDisable(false)
            console.log(err)
            setErrMsg(err.message)
        })
    }

    return(
        <>
        <h1>Login</h1>
        <InputControl label="email" placeholder="enter email"
        onChange={(e)=>{
            Setvaluse(prev=>({...prev,
                email:e.target.value}))
        }} />
        <br/>
        <InputControl label="password" placeholder="enter password"
        onChange = {(e)=>{
            Setvaluse(prev=>({...prev,
                password:e.target.value}))
        }} />
  
        <br/>
        <br/>
        <br/>
        {errMsg}
        <br/>
        <button disabled={btndisable} onClick={handleSubmit}>Signup</button>
        <br/>
    
        <p>Dont have account <Link to="/signup">Signup</Link></p>
        </>
    )
}