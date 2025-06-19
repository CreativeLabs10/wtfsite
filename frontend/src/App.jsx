import React from 'react';  
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import Login from './pages/Login'
import Register from './pages/Register'
import Homepage from './pages/Homepage'



function App() {  
    return (
      <>
        <BrowserRouter>  
            <Routes>  
                <Route path="/login" element={<Login />} />  
                <Route path="/register" element={<Register />} />  
                <Route path="/" element={<Homepage />} />  
            </Routes>  
        </BrowserRouter>  
      </> 
    )
}
export default App