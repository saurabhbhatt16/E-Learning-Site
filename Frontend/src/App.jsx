import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/signUp'
import Login from './pages/Login'
export const serverUrl = "http://localhost:8000"
import { ToastContainer } from "react-toastify"



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/signup' element= {<SignUp/>}/>
        <Route path='/login' element= {<Login/>}/>
       </Routes>
    </>
  )
}

export default App