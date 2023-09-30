
import React, {useEffect,useState} from 'react'
import './App.css'
import{ BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Signup from './Components/Signup'
import Login from './Components/Login'

import { auth } from './firebase'

function App() {
  const[username,Setusername]= useState("")
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      console.log(user)
      if(user){
        Setusername(user.displayName)
      }else Setusername("")
    })
  },[])

  return (
    <>
  <Router>
      <Routes>
          <Route path='/' element={<Home name={username}/>} >
            Home
          </Route>
          <Route path='/login' element={<Login/>}>
            Login
          </Route>
          <Route path='/Signup' element={<Signup/>}>
            Signup
          </Route>
      </Routes>
  </Router>



      
    </>
  )
}

export default App
