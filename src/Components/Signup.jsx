import React from "react";
import InputControl from "./InputControl";
import { Link, useNavigate} from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile,  signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { auth } from "../firebase";

export default function Signup(){
    const provider = new GoogleAuthProvider()
    const Navigate = useNavigate()
    const[values,Setvaluse] = React.useState({
        name:'',
        email:'',
        password:''
    })
    const[errMsg,setErrMsg] = React.useState("")
    const[btndisable,SetDisable] = React.useState(false)
    console.log(values)

    function handleSubmit(){
        if(!values.name || !values.email || !values.password){
            setErrMsg("pura bhar bhai!");
            return
        }
        setErrMsg("");
        SetDisable(true)
        createUserWithEmailAndPassword(auth,values.email,values.password)
        
        .then(async res=>{
            SetDisable(false)
            const user = res.user;
            console.log(res)
            await updateProfile(user,{
                displayName:values.name
            })
            Navigate("/")
        })
        .catch(err=>{
            SetDisable(false)
            console.log(err)
            setErrMsg(err.message)
        })

    }

    function signInWithGoogle()
    {
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result)
            console.log("Signed in with Google")
        }).catch((error) => {
            console.error(error.message)
        })
    }


    return(
        <>
        <h1>Signup</h1>e
        <InputControl label="name" placeholder="enter name"
        onChange={(e)=>
            Setvaluse(prev=>({...prev,
            name:e.target.value}))
        } />
        
        <br/>
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
        {errMsg}
        <br/>
        <button disabled={btndisable} onClick={handleSubmit}>Signup</button>
        <br/>
        <br/>
        <h1>OR</h1>
        <br/>
        <br/>
        <button onClick={signInWithGoogle}>Sign in with google </button>
        <p>ALready have account <Link to="/Login">Log in</Link></p>
        </>
    )
}