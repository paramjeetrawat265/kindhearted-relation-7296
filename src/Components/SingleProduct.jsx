import { Box, Button, Flex, Grid, Image, Radio, Text } from '@chakra-ui/react'
import React from 'react'
import { useParams } from "react-router-dom"

const getFetch = (id) => {
    return fetch(``).then(res => {
        return res.json();
    })
}

const SingleProduct = () => {
    const params = useParams();
    console.log(params)
    return (
        <>
            <Flex justifyContent={"space-evenly"} gap="5">
                <Grid templateRow="repeat(3,1fr)" gap="5" width="15%">
                    <Box>
                        <Image src={""} width="90%"></Image>
                    </Box>
                    <Box>
                        <Image src={""} width="90%"></Image>
                    </Box>
                </Grid>
                <Box width="45%">
                    <Image src={""} width="100%" height="500px"></Image>
                </Box>
                <Box width="40%" marginRight={"50px"}>
                    {/* Top Right Side of Description Page */}
                    <Box>
                        <Text>{ }</Text>
                        <Text>{ }</Text>
                        <Box fontSize={"16px"} fontFamily="Futura,sans-serif" mb="5">
                            <Flex fontWeight={"400"} letterSpacing={".025em"} alignItems="center" gap="5" justifyContent="center">
                                <Text><strike>${ }</strike></Text>
                                <Text >${ }</Text>
                                <Text color="#ff4e4e">Save { }%</Text>
                            </Flex>
                        </Box>
                    </Box>
                    <Box>
                        <Text>Size</Text>
                        <Text size="xs">(Please reference sizing images on a product if available; if unavailable please use our size and conversion guide for proper sizing.)</Text>
                        <Flex>
                            <Radio></Radio>
                            <Button color="black" bg="white" border="2px solid black">Small</Button>
                            <Button color="black" bg="white" border="2px solid black">Medium</Button>
                        </Flex>
                        <Text>Color-<span fontSize="0.3em">Pink</span></Text>
                        <Flex>
                            <Radio></Radio>
                            <Image src={""} size="xs" borderRadius={"50%"} overflow="hidden"></Image>
                        </Flex>
                        <Button bg="black" borderRadius="0" color="white"size='lg' w="100%" _hover={{ bg: "#D3D3D3", color: "black" }}>
                        Add To Cart
                    </Button>
                </Box>
                <Box></Box>
            </Box>
        </Flex>
        </>
    )
}

export default SingleProduct