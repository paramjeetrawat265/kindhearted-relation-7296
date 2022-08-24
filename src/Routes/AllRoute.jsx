import React from 'react'
import { Routes,Route } from "react-router-dom"
import Home from '../Components/Home'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
const AllRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    )
}

export default AllRoute