import { ChevronUpIcon } from '@chakra-ui/icons'
import { Box, Checkbox, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const SidebarData = ({ data, title }) => {
    return (
        <Box borderBottom={'1px solid #bebebe'} p={2}>
            <Flex alignItems={'center'} gap={1} pb={1}>
                <ChevronUpIcon w={5} h={5} color={'#666666'} />
                <Text textTransform='uppercase' fontSize={14} fontWeight={'bold'}>{title}</Text>
            </Flex>
            <Flex direction={'column'} gap={1}>
                {data.map((ele) => (
                    <Flex gap={2}>
                        <Checkbox />
                        <Text color={'#666666'} fontSize={14}>{ele}</Text>
                    </Flex>
                ))}
            </Flex>
        </Box>
    )
}

export default SidebarData