import React from 'react'
import { Text, FormControl, Input, FormLabel, InputRightElement, Button, InputGroup} from "@chakra-ui/react"
import BottomCategory from './BottomCategory'


const Signup = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    function handleCreate(){

    }

    return (
        <div>
            <Text mt="10px" fontSize='5xl' fontFamily="Tiemann, serif" color="black">CREATE ACCOUNT</Text>
            <FormControl width="500px" mt="40px" ml="35%">

                <FormLabel fontFamily="Futura, sans-serif" mt="12" fontStyle="italic">First Name</FormLabel>
                <Input
                    focusBorderColor='black'
                    variant='outline'
                    size='lg'
                    pr='4.5rem'
                    type='text'
                />

                <FormLabel fontFamily="Futura, sans-serif" mt="12" fontStyle="italic">Last Name</FormLabel>
                <Input
                    focusBorderColor='black'
                    variant='outline'
                    size='lg'
                    pr='4.5rem'
                    type='text'
                />

                <FormLabel fontFamily="Futura, sans-serif" mt="12" fontStyle="italic">Email</FormLabel>
                <Input
                    focusBorderColor='black'
                    variant='outline'
                    size='lg'
                    pr='4.5rem'
                    type='email'
                />

                <FormLabel fontFamily="Futura, sans-serif" mt="12" fontStyle="italic">Password</FormLabel>
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
            <Button bg="black" color="white" size='lg' w="500px" ml="40px" mt="50px" mb="90px" 
            borderRadius="0" transition="bg 2s"
            _hover={{color:"#D3D3D3", bg:"white"}} onClick={handleCreate}>
                Create
            </Button>
            <BottomCategory/>
        </div>
    )
}

export default Signup