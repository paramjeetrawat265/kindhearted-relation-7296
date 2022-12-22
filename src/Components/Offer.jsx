import { tablePaginationUnstyledClasses } from '@mui/base';
import { textAlign } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { Flex } from "@chakra-ui/react"


const Offer = () => {
    var title1 = "WELCOME TO BLUEFLY", text1 = "Luxury brands at discounted prices"
    var title2 = "FREE SHIPPING", text2 = "On Orders Over $99";
    const [title, setTitle] = useState("WELCOME TO BLUEFLY")
    const [text, setText] = useState("Luxury brands at discounted prices")
    const [count, setCount] = useState(0);
    let id; let i = 0
    useEffect(() => {
        const id = setInterval(() => {
            if (count % 2 === 0) {
                setText(text2);
                setTitle(title2);
            }
            if (count % 2 !== 0) {
                setText(text1)
                setTitle(title1)
            }
            setCount(count + 1)
        }, 2000)
        return () => clearInterval(id)
    })


    return (
        <div >
            <div style={{ backgroundColor: "black",height:"40px", color: "white", marginTop:"10px"}}>
                <Flex h="2.5rem" alignItems="center" justifyContent="center" gap="5"><b>{title}</b> : <i>{text}</i></Flex>
            </div>
        </div>
    )
}

export default Offer