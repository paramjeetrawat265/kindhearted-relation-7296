import React, { useContext, useState } from 'react'
import { Text, FormControl, Input, FormLabel, InputRightElement, InputGroup, Flex, Spacer, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import BottomCategory from './BottomCategory'
import { Loged } from '../Api/Api'
import { AppProvider } from '../AppContextProvider/AppContextPro'
import {Navigate } from "react-router-dom"

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AppProvider);
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const [data, setData] = useState({
        em: "",
        pass: ""
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data, [name]: value
        })
    }

    const handleLogin = () => {
        Loged(data).then(res => {
            if (res == 200 && res.data.length > 0) {
                setIsAuth(true)
            }
        })
    }

    if(isAuth){
        return <Navigate to="/"/>
    }

    return (
        <div>
            <Text mt="10px" fontSize='5xl' fontFamily="Tiemann, serif" color="black">LOGIN</Text>
            <FormControl width="500px" ml="35%">
                <FormLabel fontFamily="Futura, sans-serif" mt="10" fontStyle="italic">Email</FormLabel>
                <Input
                    focusBorderColor='black'
                    variant='outline'
                    size='lg'
                    pr='4.5rem'
                    type='email'
                    placeholder='Enter Email'
                    name="em"
                    value={data.em}
                    onChange={handleChange}
                />
                <Flex mt="10">
                    <FormLabel fontFamily="Futura, sans-serif" fontStyle="italic">Password</FormLabel>
                    <Spacer></Spacer>
                    <FormLabel fontFamily="Futura, sans-serif" _hover={{ cursor: "pointer" }} fontStyle="italic">Forget Password?</FormLabel>
                </Flex>
                <InputGroup size='lg' variant='outline' >
                    <Input
                        focusBorderColor='black'
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        name="pass"
                        value={data.pass}
                        onChange={handleChange}
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <Button bg="black" borderRadius="0" color="white" size='lg' w="500px" ml="40px" mt="50px" _hover={{ bg: "#D3D3D3", color: "black" }}
                onClick={handleLogin}>
                LOGIN
            </Button>
            <hr />
            <Link to="/signup">
                <Button bg="white" color="black" size='lg'
                    _hover={{ bg: "white", color: "black" }}
                    ml="40px" mt="20px" mb="50px"
                    fontStyle="italic" fontSize="20">
                    Create account
                </Button>
            </Link>
            <BottomCategory />
        </div>
    )
}

export default Login