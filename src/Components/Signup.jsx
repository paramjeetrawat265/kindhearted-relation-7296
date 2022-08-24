import React from 'react'
import { Text, FormControl, Input, FormLabel, InputRightElement, Button, InputGroup, Flex, Spacer } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Signup = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    function handleCreate(){
        
    }

    return (
        <div>
            <Text mt="10px" fontSize='5xl' fontFamily="Tiemann, serif" color="black">CREATE ACCOUNT</Text>
            <FormControl width="500px" mt="50px" ml="35%">

                <FormLabel fontFamily="Futura, sans-serif" fontStyle="italic">First Name</FormLabel>
                <Input
                    focusBorderColor='black'
                    variant='outline'
                    size='lg'
                    pr='4.5rem'
                    type='text'
                />

                <FormLabel fontFamily="Futura, sans-serif" fontStyle="italic">Last Name</FormLabel>
                <Input
                    focusBorderColor='black'
                    variant='outline'
                    size='lg'
                    pr='4.5rem'
                    type='text'
                />

                <FormLabel fontFamily="Futura, sans-serif" fontStyle="italic">Email</FormLabel>
                <Input
                    focusBorderColor='black'
                    variant='outline'
                    size='lg'
                    pr='4.5rem'
                    type='email'
                />

                <FormLabel fontFamily="Futura, sans-serif" fontStyle="italic">Password</FormLabel>
                <InputGroup size='lg' variant='outline' >
                    <Input
                        focusBorderColor='black'
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <Button bg="black" color="white" size='lg' w="500px" ml="40px" mt="50px" onClick={handleCreate}>
                Create
            </Button>
        </div>
    )
}

export default Signup