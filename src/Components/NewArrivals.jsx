import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Heading, Button, Box, Flex, Text, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const NewArrivals = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        axios.get(`https://cyclic-server.onrender.com/BlueflyNewArrival`)
            .then(res => {
                setData(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    })

    return (
        <div>
            <Heading mt="-10" mb="20px" size="2xl" fontFamily={"Tiemann,serif"}
                fontWeight="400"
                lineHeight="1">New Arrival</Heading>
            <Link to="/sidebar"><Button mb="10" _hover={{bg:"white" ,border:"2px"}}
                letterSpacing=".3em"
                display="inline-block"
                fontFamily="Futura,sans-serif"
                border="1px solid #e8e8e1"
                backgroundColor="transparent"
                bg="white" padding="2px 30px">View All</Button></Link>
            <Flex mb="20" width="90%" margin={"auto"} justifyContent="space-evenly">
                {
                    data.map(({ image, title, mrp, dis }) => {
                        const save = mrp / 100 * dis
                        const price = Math.floor(mrp - save)
                        return (<Box w="18%">
                            <Box w="200" h="250">
                                <Image w="200" h="250" objectFit="cover" src={image}></Image>
                            </Box>
                            <Text letterSpacing={"0.2em"}>{title}</Text>
                            <Box fontSize={"16px"} fontFamily="Futura,sans-serif">
                                <Flex fontWeight={"400"} letterSpacing={".025em"} alignItems="center" gap="5" justifyContent="center">
                                    <Text><strike>${mrp}</strike></Text>
                                    <Text >${price}</Text>
                                    <Text color="#ff4e4e">Save {dis}%</Text>
                                </Flex>
                            </Box>
                        </Box>
                        )
                    })
                }
            </Flex>
        </div>
    )
}

export default NewArrivals