import React from 'react'
import { Flex,Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import styles from "./Menu.module.css"
const Menu = () => {
    const menus = [
        {
            title: "CLOTHING",
            id: 0
        },
        {
            title: "SHOES",
            id: 1
        },
        {
            title: "HANDBAGS & ACCESSORIES",
            id: 2
        },
        {
            title: "DESIGNERS",
            id: 3
        },
        {
            title: "SUNGLASSES",
            id: 4
        },
        {
            title: "JEWELRY & WATCHES",
            id: 5
        },
        {
            title: "UNDER $50",
            id: 6
        },
        {
            title: "BEAUTY",
            id: 7
        },
    ]
    return (
        <Flex gap="10" alignItems="center" justifyContent="center" mt="10">
            {
                menus.map(({title, id}) => (
                    <div className={styles.link} key={id} >
                        <Link to="/"><Text>{title}</Text></Link>
                    </div>
                ))
            }
        </Flex>
    )
}

export default Menu