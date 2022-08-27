import { ChevronUpIcon } from '@chakra-ui/icons'
import { Box, Checkbox, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const SidebarData = ({ data, title }) => {
    return (
        <Box borderBottom={'1px solid #bebebe'} p={2}>
            <Flex alignItems={'center'} gap={1} pb={1}>
                <ChevronUpIcon w={5} h={5} color={'#666666'} _hover={{color:'pink.500', fontWeight:"500"}} />
                <Box noOfLines={2} textAlign="left">
                    <Text  textTransform='uppercase' color={'#666666'} fontSize={15} fontFamily="Futura,sans-serif" fontWeight={'400'}>{title}</Text>
                </Box>
            </Flex>
            <Flex direction={'column'} gap={1}>
                {data.map((ele) => (
                    <Flex gap={2}>
                        <Checkbox size={"md"} border="#666666" />
                        <Text color={'#666666'} fontSize={16}>{ele}</Text>
                    </Flex>
                ))}
            </Flex>
        </Box>
    )
}

export default SidebarData