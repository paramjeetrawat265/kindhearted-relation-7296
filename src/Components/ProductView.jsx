import { Box, Grid, Image, Text, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'

const ProductView = ({ data = [] }) => {
  return (
    <div>
      <Grid templateColumns='repeat(3, 1fr)' gap={2} mb="20" width="100%" justifyContent="center">
        {
          data.map(({ image, title, price, discount, id, brand, image2 }) => {
            const save = price / 100 * discount
            const sellprice = Math.floor(price - save)
            let img=image;
            function MouseEnter(){
              img=image2
              // console.log(img)
            }
            function MouseExit(){
              img=image
            }
            return (<Box key={id}>
              <Box w="100%" h="250">
                <Image w="90%" h="230" src={img} onMouseEnter={MouseEnter} onMouseLeave={MouseExit} ></Image>
              </Box>

              <Text mt="0" color={"#747474"} fontSize="16.6px"
                fontFamily="Futura,sans-serif"
                letterSpacing=".025em">{brand}</Text>
              
              <Text color={"#0288d1"} letterSpacing={"0em"}>{title}</Text>
              
              <Box fontSize={"16px"} fontFamily="Futura,sans-serif" mb="5">
                <Flex fontWeight={"400"} letterSpacing={".025em"} alignItems="center" gap="5" justifyContent="center">
                  <Text><strike>${price}</strike></Text>
                  <Text >${sellprice}</Text>
                  <Text color="#ff4e4e">Save {discount}%</Text>
                </Flex>
              </Box>
            </Box>
            )
          })
        }
      </Grid>
    </div>
  )
}

export default ProductView