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
            id: 0,
            path:"/womendress"
        },
        {
            title: "SHOES",
            id: 1,
            path:"/pumpheel"
        },
        {
            title: "HANDBAGS & ACCESSORIES",
            id: 2,
            path:"/handbag"
        },
        {
            title: "DESIGNERS",
            id: 3,
            path:"/womensneaker"
        },
        {
            title: "SUNGLASSES",
            id: 4,
            path:"/sunglass"
        },
        {
            title: "JEWELRY & WATCHES",
            id: 5,
            path:"tshirt"
        },
        {
            title: "UNDER $50",
            id: 6,
            path:"sunglass"
        },
        {
            title: "BEAUTY",
            id: 7,
            path:"sunglass"
        },
    ]
    return (
        <div className='main'>
            <Flex gap="10" alignItems="center" justifyContent="center" mt="10">
                {
                    menus.map(({ title, id, path }) => {
                        if (title === "CLOTHING") {
                            return (
                                <li className={styles.link} key={id}
                                    // onMouseEnter={() => setDropdown(true)}
                                    onMouseLeave={() => setDropdown(false)} >
                                    <Link to={path}><Text>{title}</Text></Link>
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