import React, { useState } from 'react'
import { Flex, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import styles from "../Styles/Menu.module.css"
import Dropdown from './Dropdown'
const Menu = () => {

    const [dropdown, setDropdown] = useState(false);

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
        <div className='main'>
            <Flex gap="10" alignItems="center" justifyContent="center" mt="10">
                {
                    menus.map(({ title, id }) => {
                        if (title === "CLOTHING") {
                            return (
                                <li className={styles.link} key={id}
                                    onMouseEnter={() => setDropdown(true)}
                                    onMouseLeave={() => setDropdown(false)} >
                                    <Link to="/"><Text>{title}</Text></Link>
                                    {dropdown && <Dropdown />}
                                </li>
                            );
                        }
                        return (
                            <div className={styles.link} key={id}>
                                <Link to="/"><Text>{title}</Text></Link>
                            </div>
                        )
                    })
                }
            </Flex>
        </div>
    )
}

export default Menu