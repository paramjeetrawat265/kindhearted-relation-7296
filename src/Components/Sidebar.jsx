import { Box } from '@chakra-ui/react'
import React from 'react'
import SidebarData from './sidebarData'

const Sidebar = () => {
    const side = [
        {
            "data": ["Women(10807)", "Shop All(16164)"],
            "title": "COLLECTIONS"
        },
        {
            "data": ["Dresses(16164)"],
            "title": "CATEGORY"
        },
        {
            "data": ["WOMEN'S COCKTAIL PARTY DRESSES(4234", "WOMEN'S DAY DRESSES(11300)", "WOMENS'S FORMAL DRESSES(508)", "WOMEN'S WORK DRESSES(36)"],
            "title": "SUB CATEGORY"
        },
        {
            "data": ["Adrianna Papell(229)", "Alexander McQeen(44)", "Alice + Olivia(143)", "Amiri(7)", "Armani(18)", "Balenciaga(22)", "Balmain(29)", "BCBGMAXAZRIA(45)"],
            "title": "BRAND"
        },
        {
            "data": ["Beige(336)", "Black(3723)", "Blue(3006)", "Brown(743)", "Green(1062)", "Grey(531)", "Multi(1008)", "No Color(745)"],
            "title": "COLOR"
        }
    ]
    return (
        <div>
            {
                side.map(({data,title}) => (
                    <Box boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' >
                        <SidebarData data={data} title={title} />
                    </Box>

                ))
            }
        </div>
    )
}

export default Sidebar