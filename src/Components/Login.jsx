import React from 'react'
import { Text, FormControl, Input, FormLabel, InputRightElement, Button, InputGroup, Flex, Spacer } from "@chakra-ui/react"

const Login = () => {

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return (
        <div>
            <Text mt="10px" fontSize='5xl' fontFamily="Tiemann, serif" color="black">LOGIN</Text>
            <FormControl width="500px" ml="35%">
                <FormLabel fontFamily="Futura, sans-serif" fontStyle="italic">Email</FormLabel>
                <Input
                    focusBorderColor='black'
                    variant='outline'
                    size='lg'
                    pr='4.5rem'
                    type='email'
                    placeholder='Enter password'
                />
                <Flex>
                    <FormLabel fontFamily="Futura, sans-serif" fontStyle="italic">Password</FormLabel>
                    <Spacer></Spacer>
                    <FormLabel fontFamily="Futura, sans-serif" _hover={{cursor:"pointer"}} fontStyle="italic">Forget Password?</FormLabel>
                </Flex>
                <InputGroup size='lg' variant='outline' >
                    <Input
                        focusBorderColor='black'
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <Button bg="black" color="white" size='lg' w="500px" ml="40px" mt="50px">
                LOGIN
            </Button>

        </div>
    )
}

export default Login