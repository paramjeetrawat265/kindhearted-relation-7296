import React from 'react'
import { Flex, Image, Box, Heading, Text, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
const TopPromo = () => {
    const products = [
        {
            image: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/files/asapimage---533-x-644-px_540x.jpg?v=1650550832',
            title: 'DRESSES FOR EVERY OCCASION',
            dis: 'UP TO 94% OFF',
            desc: 'Featuring BCBGMaxazria, Halstan, Kay Unger & More',
            link: 'SHOP DRESSES'
        },
        {
            image: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/files/WEB_ASSET_2_540x.jpg?v=1650894933',
            title: 'DESIGNER BOUTIQUE',
            dis: 'UP TO 84% OFF',
            desc: 'Best-Selling Styles form: Gucci, Valentino, Balenciaga, Stuart Weitzman & More',
            link: 'SHOP DESIGNER BOUTIQUE'
        },
        {
            image: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/files/womens_tops_2_540x.jpg?v=1630508297',
            title: 'TRENDING TOPS FOR THE NEW SEASON',
            dis: 'UP TO 85% OFF',
            desc: 'Featuring Gracia, Theory, Trina Turk & More',
            link: "SHOP WOMEN'S TOPS"
        }
    ]
    return (
        <Flex p="6" ml="3" justifyContent="space-evenly" gap="2">
            {products.map(({ image, title, dis, desc, link }) => (
                <Link to="/">
                    <Box pos="relative" color="#e6ffff"
                        w="100%"
                        zIndex={2}>
                        <Image h="500px"
                            w="460px"
                            objectFit="cover"
                            src={image} />
                        <Box pos="absolute"
                            top="35%" left="50%"
                            transform="translateX(-50%)"
                            p="4">
                            <Text fontSize="20" fontWeight="bold" fontFamily="Segoe UI', Tahoma, Geneva, Verdana, sans-serif" >{title}</Text>
                        </Box>
                        <Heading as='h3' pos="absolute" size="2xl"
                            fontFamily="'Times New Roman', Times, serif"
                            w="80%" mt="3"
                            top="48%" left="50%"
                            transform="translateX(-50%)"
                            noOfLines={1}>
                            {dis}
                        </Heading>
                        <Box pos="absolute" w="90%"
                            top="55%" left="50%"
                            transform="translateX(-50%)"
                            p="4">
                            <Text fontSize="23" fontWeight="bold" fontFamily="Segoe UI', Tahoma, Geneva, Verdana, sans-serif" >{desc}</Text>
                        </Box>
                        <Button pos="absolute"
                            top="83%" left="50%" color="black" borderRadius="0"
                            transform="translateX(-50%)"
                            p="4">{link}</Button>
                    </Box>
                </Link>
            ))}
        </Flex>
    )
}

export default TopPromo