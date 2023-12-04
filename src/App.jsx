import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
      <div>
      </div>
      <div className='d-flex '>
      <Register/>
        <Login/>
      </div>
      
    </>
  )
}

export default App
