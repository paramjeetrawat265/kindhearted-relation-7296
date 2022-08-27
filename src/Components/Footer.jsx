import { Heading, Box, Flex, Image, Input, Button, FormControl, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaFacebookF } from "react-icons/fa"
import { BsInstagram } from "react-icons/bs"

const Footer = () => {

    const [data, setData] = useState("");
    const subscribe = () => {

    }

    return (
        <div>
            <Box p="6" bgColor={"#D3D3D3"}>
                <Flex>
                    <Box width="37%">
                        <Heading textAlign={"left"} ml="6%" fontSize="15px" fontWeight="500"
                            fontFamily="Futura,sans-serif"
                            letterSpacing="0.5em"
                            lineHeight="10" mb="20px">ABOUT US</Heading>
                        <Flex justifyContent={"space-evenly"} alignItems="center">
                            <Box textAlign={"left"} fontSize="15px" fontWeight="500"
                                fontFamily="Futura,sans-serif"
                                letterSpacing=".025em"
                                lineHeight="10">
                                <Link to=""><Box>Contact Us</Box></Link>
                                <Link to=""><Box>Frequently Asked Questions</Box></Link>
                                <Link to=""><Box>Shipping & Returngs</Box></Link>
                                <Link to=""><Box>Pre-Owned Guide</Box></Link>
                            </Box>
                            <Box textAlign={"left"} fontSize="15px" fontWeight="500"
                                fontFamily="Futura,sans-serif"
                                letterSpacing=".025em"
                                lineHeight="10">
                                <Link to=""><Box>Sell on Bluefly</Box></Link>
                                <Link to=""><Box>Privacy Policy</Box></Link>
                                <Link to=""><Box>Terms & Conditions</Box></Link>
                                <Link to=""><Box>Do not sell my personal information</Box></Link>
                            </Box>
                        </Flex>
                    </Box>
                    <Box width="35%">
                        <Heading textAlign={"left"} ml="6%" fontSize="15px" fontWeight="500"
                            fontFamily="Futura,sans-serif"
                            letterSpacing="0.5em"
                            lineHeight="10" mb="20px">SIGN UP AND SAVE</Heading>
                        <Box textAlign={"left"} ml="6%" fontSize="15px" fontWeight="500"
                            fontFamily="Futura,sans-serif"
                            letterSpacing=".025em"
                            lineHeight="10">
                            Subscribe to get exclusive offers on designer brands
                            <FormControl width="80%">
                                <Input
                                    padding="0px 15px"
                                    focusBorderColor='pink.400'
                                    _hover={{border:"1px solid black"}}
                                    variant='outline'
                                    size='bs'
                                    type='email'
                                    placeholder='Enter Email'
                                    name="em"
                                    value={data}
                                    onChange={(e) => { setData(e.target.value) }}
                                />
                            </FormControl>
                            <Button bg="black" w="80%" borderRadius="0" mt="20px" mb="20px" color="white" size='lg' _hover={{ bg: "#D3D3D3", color: "black" }}
                                onClick={subscribe}>
                                Subscribe
                            </Button>
                            <Flex gap="3">
                                <Box fontSize="24px" color="black"><BsInstagram /></Box>
                                <Box fontSize="24px" color="black"><FaFacebookF /></Box>

                            </Flex>

                        </Box>
                    </Box>
                    <Box w="25%" h="180px"></Box>
                </Flex>
                <Box mt="10" boxSizing='border-box'>
                    <Link to="/"><Image transform="translateZ(0)" boxSize="150px" width="250px" objectFit="cover" m="auto" src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/Untitled_2_.png_5_x104@2x.png?v=1620852820"></Image></Link>
                </Box>
                <Box>
                    <Text fontFamily={"Futura, sans-serif"} fontSize="12px" mt="5" mb="20">© 2022 Bluefly 1998-2020 BLUEFLY.COM OR ITS AFFILIATES ALL RIGHTS RESERVED.</Text>
                </Box>
            </Box>
        </div>
    )
}

export default Footer