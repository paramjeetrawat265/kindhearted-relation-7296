import React from 'react'
import { Routes,Route } from "react-router-dom"
import AllProduct from '../Components/AllProduct'
import Cart from '../Components/Cart'
import Handbag from '../Components/Handbag'
import Home from '../Components/Home'
import Login from '../Components/Login'
import Pumpheel from '../Components/Pumpheel'
import Search from '../Components/Search'
import Sidebar from '../Components/Sidebar'
import Signup from '../Components/Signup'
import SingleProduct from '../Components/SingleProduct'
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
            <Route path="/allproducts" element={<AllProduct/>}/>
            <Route path="/search/:id" element={<Search/>}/>
            <Route path="/products/:id" element={<SingleProduct/>}/>
            <Route path="/cart/:id" element={<Cart/>}/>
        </Routes>
    )
}

export default AllRoute