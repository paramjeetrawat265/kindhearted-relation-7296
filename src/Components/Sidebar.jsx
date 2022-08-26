import { Box } from '@chakra-ui/react'
import React from 'react'
import SidebarData from './sidebarData'

const Sidebar = () => {
    const collections = ['Women', 'Men', 'Baby & kids', 'Home & Beauty', 'Shop All']
    return (
        <Box boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' >
            <SidebarData data={collections} title={'Collections'} />
            <SidebarData data={collections} title={'Collections'} />
        </Box>
    )
}

export default Sidebar