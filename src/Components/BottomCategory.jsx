import React from 'react'
import { Box, Image, Flex } from "@chakra-ui/react"
const BottomCategory = () => {

    const product = [
        {
            url: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/denim_540x.jpg?v=1615204984",
            title: "UP TO 85% OFF THE DENIM SHOP FOR HIM & HER",
            desc: "From Hudson Jeans, Joe's Jeans, J Brand & More",
            cat: "SHOP DENIM"
        },
        {
            url: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/shutterstock_1112754335--RESIZED2_540x.jpg?v=1656342120",
            title: "UP TO 90% OFF TRENDING JUMPSUITS & ROMPERS",
            desc: "Must-Haves From Halston, BCBGMAXAZRIA, Iro & More",
            cat: "SHOP JUMPSUITS"
        },
        {
            url: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/shutterstock_210297940-resized_for_viewing_540x.jpg?v=1656342603",
            title: "UP TO 90% OFF WOMEN'S MUST-HAVE ACCESSORIES",
            desc: "Shop Wallets, Belts, Hats, Sunglasses & More",
            cat: "SHOP WOMEN'S ACCESSORIES"
        }

    ]

    return (
        <Box>
            <Flex p="6" justifyContent="space-evenly" gap="4">
                {
                    product.map(({ url, title, desc, cat }) => (

                        <Box borderWidth='1px' overflow='hidden' key={title}>
                            <Box w="500px">
                                <Image height="400px" w="500px" src={url} alt={title} />
                            </Box>

                            <Box p='6'>
                                <Box
                                    mt='1'
                                    fontStyle="Tiemann, serif"
                                    fontWeight='semibold'
                                    fontSize="24px"
                                    as='h4'
                                    lineHeight='tight'
                                    noOfLines={2}
                                >
                                    {title}
                                </Box>
                                {desc}
                                {cat}
                            </Box>
                        </Box>
                    ))
                }
            </Flex>
        </Box>
    )
}

export default BottomCategory