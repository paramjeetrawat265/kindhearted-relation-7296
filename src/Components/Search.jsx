import { Box, Flex, Heading, Select, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GetProduct } from '../Api/GetProduct';
import ProductView from './ProductView';
import Sidebar from './Sidebar';

function getData(query) {
    console.log(query)
    return axios.get(`https://chalo-api.herokuapp.com/BlueflyProduct?q=${query}`)
        .then(res => {
            return res
        })
}

const Search = () => {
    const params = useParams();
    const [data, setData] = useState([]);


    useEffect(() => {
        hell()
    }, [])


    function hell() {
        getData(params.id).then(res => {
            setData(res.data)
        })
            .catch(error => {
                console.log(error)
            })
    }


    function changeHandle(e) {
        let query = e.target.value
        if (query == "AZ") {
            GetProduct({
                db: "BlueflyProduct",
                sort: "title",
                order: "ASC"
            }).then(res => {
                console.log(res)
                setData(res.data)
            })
        }
        if (query == "ZA") {
            GetProduct({
                db: "BlueflyProduct",
                sort: "title",
                order: "DESC"
            }).then(res => {
                setData(res.data)
            })
        }
        if (query == "LH") {
            GetProduct({
                db: "BlueflyProduct",
                sort: "price",
                order: "ASC"
            }).then(res => {
                setData(res.data)
            })
        }
        if (query == "HL") {
            GetProduct({
                db: "BlueflyProduct",
                sort: "price",
                order: "DESC"
            }).then(res => {
                setData(res.data)
            })
        }
    }

    return (
        <div>
            <Heading mt="10" mb="10">Search Result of <span style={{textTransform:"uppercase"}}>{params.id}</span></Heading>
            <Flex w="80%" margin="auto" p="10" justifyContent={"space-between"}>
                <Text>Showing {data.length + 1400} results for <span style={{color:"red", textTransform:"uppercase" , fontWeight:"600"}}>{params.id}</span></Text>
                <Select placeholder='Best Selling' w="20%" onChange={changeHandle}>
                    <option value='AZ'>Title A-Z</option>
                    <option value='ZA'>Title Z-A</option>
                    <option value='LH'>Price Low to High</option>
                    <option value='HL'>Price High to Low</option>
                </Select>
            </Flex>
            <Flex w="80%" margin="auto" gap="10" justifyContent="center">
                <Box w="25%">
                    <Sidebar />
                </Box>
                <Box w="75%">
                    <ProductView data={data} />
                </Box>
            </Flex>
        </div>
    )
}
export default Search