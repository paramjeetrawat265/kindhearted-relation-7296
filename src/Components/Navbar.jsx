import React, { useState } from 'react'
import { Text, Image, Input, Flex, Box, Spacer } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Search2Icon, SearchIcon } from '@chakra-ui/icons'
import Menu from './Menu';
import Offer from './Offer';
import "../App.css"
const Navbar = () => {
    const [text,setText]=useState("");
    return (
        <>
            <Flex alignItems="center" mt="4" mb="-5">
                <Box w="39%">
                </Box>
                <Link to="/"><Image w="70" h="10" src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/BLUEFLY-LOGO-11-20.png?v=1574278243" /></Link>
                <Spacer></Spacer>
                <Flex alignItems="center" gap="6" pr="10" fontSize="20">
                    <div className="search-box" >
                        <input type="text" className="search-input" onChange={(e) => setText(e.target.value)} placeholder="Start Looking For Something!" />
                        <Link to={"/"} state={{ query: text }} className="search-btn" href="#">
                            <SearchIcon />
                        </Link>
                    </div>
                    <Link to="/login"><PermIdentityIcon sx={{ fontSize: 30 }} /></Link>
                    <Link to="/cart"><LocalMallOutlinedIcon sx={{ fontSize: 25 }} /></Link>
                </Flex>
            </Flex>
            <Menu />
            <Spacer></Spacer><Link to="" ><Text mt="2" mb="2" color="red">CLEARANCE</Text></Link>
            <Offer />
        </>
    )
}

export default Navbar