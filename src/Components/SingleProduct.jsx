import { Box, Button, Flex, Grid, Image, ListItem, Radio, Text, UnorderedList } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import { EmailIcon } from "@chakra-ui/icons"

function getData(id) {
    return axios.get(`https://cyclic-server.onrender.com/BlueflyProduct?q=${id}`)
        .then(res => {
            console.log(res)
            return res
        })
}

const SingleProduct = () => {
    const params = useParams();
    const [data, setData] = useState({});
    console.log(params)

    useEffect(() => {
        getData(params.id)
            .then(res => {
                setData(res.data[0]);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    console.log(data)

    const save = data.price / 100 * data.discount
    const sellprice = Math.floor(data.price - save)

    return (
        <>
            <Flex justifyContent={"center"} gap="2" mt="10">
                <Grid justifyContent={"start"} alignItems="left" width="10%" height="400px" p="4" gap="0">
                    <Image border="1px solid black" w="100px" objectFit="cover" h="100px" src={data.image}></Image>
                    <Box mt="-10">
                        <Image border="1px solid black" w="100px" objectFit="cover" h="100px" src={data.image2}></Image>
                    </Box>
                </Grid>
                <Box width="45%" >
                    <Image border={"2px solid black"} src={data.image} width="100%" height="600px"></Image>
                </Box>
                <Box width="30%" marginRight={"50px"} pl="5">
                    {/* Top Right Side of Description Page */}
                    <Box textAlign={"left"}>
                        <Text fontWeight={"800"}>{data.brand}</Text>
                        <Text>{data.title}</Text>
                        <Box textAlign={"left"} fontSize={"16px"} fontFamily="Futura,sans-serif" mb="5">
                            <Flex fontWeight={"400"} letterSpacing={".025em"} gap="5" justifyContent="start">
                                <Text><strike>${data.price}</strike></Text>
                                <Text >${sellprice}</Text>
                                <Text color="#ff4e4e">Save {data.discount}%</Text>
                            </Flex>
                        </Box>
                    </Box>
                    <Box textAlign={"left"}>
                        <Text>Size</Text>
                        <Text size="xs" mb="2">(Please reference sizing images on a product if available; if unavailable please use our size and conversion guide for proper sizing.)</Text>
                        <Flex gap="2" alignItems={"center"}>
                            <Radio ></Radio>
                            <Button color="black" _hover={{bg:"black", color:"white"}} bg="white" border="2px solid black">Small</Button>
                            <Button color="black" _hover={{bg:"black", color:"white"}} bg="white" border="2px solid black">Medium</Button>
                        </Flex>
                        <Text mb="2">Color-<span fontSize="10px">Pink</span></Text>
                        <Flex gap="2" alignItems={"center"}>
                            <Radio></Radio>
                            <Box borderRadius="50%" w="50px" h="50px" overflow="hidden">
                                <Image size="sm" src={data.image} w="50px" h="50px" borderRadius={"50%"}></Image>
                            </Box>
                        </Flex>
                        <Link to={`/`}><Button bg="black" mt="2" borderRadius="0" color="white" size='lg' w="100%" _hover={{ bg: "#D3D3D3", color: "black" }}>
                            Add To Cart
                        </Button>
                        </Link>
                    </Box>
                    <Box textAlign={"left"} fontSize={"18px"}>
                        <Text color={"red"} mt="8" mb="10" fontWeight="350" fontFamily={"Futura,sans-serif"}>FINAL SALE: No Returns or Exchanges are accepted.</Text>
                        <Text>Usually ships in 1 to 2 business days</Text>
                        <UnorderedList>
                            <ListItem>About The Brand: {"Jimmy Choo"}. A Playful Sense Of Glamour.</ListItem>
                            <ListItem>Made In Italy</ListItem>
                            <ListItem>Varenne Mini Leather Satchel In Ballet Pink Leather And Gold-Tone Hardware With Logo Accent And Crystal Embellishments</ListItem>
                            <ListItem>Interior Design Details: Suede Lining, Interior Pockets</ListItem>
                            <ListItem>Measures 7In Wide X 6In High X 4In Deep</ListItem>
                            <ListItem>Top Handle Drops 4In</ListItem>
                            <ListItem>Adjustable And Removable Shoulder Strap Drops 23In</ListItem>
                            <ListItem>Magnetic Closure</ListItem>
                            <ListItem>Protective Feet At Bottom</ListItem>
                            <ListItem>Please Note: All Measurements Were Taken By Hand And Are Approximate; Slight Variations May Occur.</ListItem>
                            <ListItem>Our Products Are 100% Genuine. In Some Cases We Purchase Merchandise From Trusted Independent Suppliers And Not Directly From The Brand Owner. In All Cases We Stand By The Authenticity Of Every Product Sold On Our Site.</ListItem>
                            <ListItem>SKU: BF-105604050-78CC</ListItem>
                        </UnorderedList>
                    </Box>
                    <Flex alignItems={"center"}>
                        <Text fontSize="26px" fontWeight={"600"} fontStyle={"oblique"}>SHARE : <EmailIcon></EmailIcon></Text>
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}

export default SingleProduct