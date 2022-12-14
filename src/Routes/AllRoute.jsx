import React from 'react'
import { Routes,Route } from "react-router-dom"
import Handbag from '../Components/Handbag'
import Home from '../Components/Home'
import Login from '../Components/Login'
import Pumpheel from '../Components/Pumpheel'
import Sidebar from '../Components/Sidebar'
import Signup from '../Components/Signup'
import Sunglass from '../Components/Sunglass'
import Tshirt from '../Components/Tshirt'
import WomenDress from '../Components/WomenDress'
import WomenSneaker from '../Components/WomenSneaker'
const AllRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/sidebar" element={<Sidebar/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/womendress" element={<WomenDress/>}/>
            <Route path="/pumpheel" element={<Pumpheel/>}/>
            <Route path="/handbag" element={<Handbag/>}/>
            <Route path="/sunglass" element={<Sunglass/>}/>
            <Route path="/womensneaker" element={<WomenSneaker/>}/>
            <Route path="/tshirt" element={<Tshirt/>}/>
        </Routes>
    )
}

export default AllRoute