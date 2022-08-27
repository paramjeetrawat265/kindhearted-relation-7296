import React from 'react'
import { Grid, Image, Text, Box, Heading } from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const ShopByCategory = () => {
    const category = [
        {
            image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/570941-xja36-9699__1_1f037d49-4444-4620-8fa7-454261f5ab39_400x.jpg?v=1661275286",
            title: "DRESSES",
            path : "/womendress"
        },
        {
            image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313395698_RLLZ_1_360x.jpg?v=1661381815",
            title: "PUMPS & HEELS",
            path: "/pumpheel"

        },
        {
            image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/81d40zlefzl._ul1500_8fd5cf1b-76f6-467e-8b47-ea50b438d814_360x.jpg?v=1654138029",
            title: "HANDBAGS",
            path: "/handbag"

        },
        {
            image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/GG0225S-001-1_360x.jpg?v=1611590701",
            title: "SUNGLASSES",
            path: "/sunglass"
        },
        {
            image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313807526_RLLZ_1_360x.jpg?v=1660837243",
            title: "WOMEN'S SNEAKERS",
            path: "/womensneaker"
        },
        {
            image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2232557_360x.jpg?v=1649100955",
            title: "MEN'S SNEAKERS",
            path: "tshirt"
        },
        {
            image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1cf51a05-da65-450c-a676-a342798b21df_360x.jpg?v=1607745936",
            title: "MEN'S TSHIRTS",
            path: "tshirt"
        },
        {
            image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411349805_RLLZ_1_360x.jpg?v=1660461696",
            title: "WOMEN'S TOPS",
            path: "tshirt"
        },
        {
            image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411120178_RLLZ_1_360x.jpg?v=1661206958",
            title: "WOMEN'S DENIM",
            path: "tshirt"
        },
        {
            image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/pd6460y1_360x.jpg?v=1661347714",
            title: "JEWELLERY",
            path: "tshirt"
        }
    ]
    return (
        <div>
            <Heading mt="10" mb="20" as="h1" size="2xl" fontFamily={"Tiemann,serif"}
                fontWeight="400"
                lineHeight="1">SHOP BY CATEGORY</Heading>
            <Grid templateColumns='repeat(5, 1fr)' gap="6" w="90%" m="auto">
                {
                    category.map(({ image, title,path }) => (
                        <Link to={path}>
                            <Box key={image}>
                                <Image _hover={{ transform: "scale(1.03)", transitionDuration: "1s" }} w="100%" h="200px" objectFit="cover" src={image} />
                                <Text mt="5" letterSpacing={"0.2em"} fontFamily="Futura,sans-serif" textAlign="center">{title}</Text>
                            </Box>
                        </Link>
                    ))
                }
            </Grid>
        </div>
    )
}

export default ShopByCategory