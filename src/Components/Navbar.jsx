import React from 'react'
import { Text, Image, Input, Flex, Box, Spacer } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Search2Icon } from '@chakra-ui/icons'
import Menu from './Menu';
import Offer from './Offer';
const Navbar = () => {
    return (
        <>
            <Flex alignItems="center" mt="4">
                <Box w="39%">
                </Box>
                <Link to="/"><Image w="70" src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/BLUEFLY-LOGO-11-20.png?v=1574278243" /></Link>
                <Spacer></Spacer>
                <Flex alignItems="center" gap="6" pr="10" fontSize="20">
                    <Flex alignItems="center" gap="3">
                        <Search2Icon />
                        <Input variant='flushed' placeholder='Search...' size='sm' width="100px" />
                    </Flex>
                    <Link to="/login"><PermIdentityIcon sx={{ fontSize: 30 }} /></Link>
                    <Link to="/cart"><LocalMallOutlinedIcon sx={{ fontSize: 25 }} /></Link>
                </Flex>
            </Flex>
            <Menu/>
            <Spacer></Spacer><Link to="" ><Text mt="5" color="red">CLEARANCE</Text></Link>
            <Offer/>
        </>
    )
}

export default Navbar