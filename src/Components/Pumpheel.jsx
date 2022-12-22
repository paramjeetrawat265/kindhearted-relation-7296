import { Box, Flex, Heading, Select, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { GetProduct } from '../Api/GetProduct';
import ProductView from './ProductView';
import Sidebar from './Sidebar';

function getData() {
  return axios.get(`https://cyclic-server.onrender.com/BlueflyHeels`)
    .then(res => {
      return res
    })
}

const Pumpheel = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    hell()
  }, [])


  function hell() {
    getData().then(res => {
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
        db: "BlueflyHeels",
        sort: "title",
        order: "ASC"
      }).then(res => {
        console.log(res)
        setData(res.data)
      })
    }
    if (query == "ZA") {
      GetProduct({
        db: "BlueflyHeels",
        sort: "title",
        order: "DESC"
      }).then(res => {
        setData(res.data)
      })
    }
    if (query == "LH") {
      GetProduct({
        db: "BlueflyHeels",
        sort: "price",
        order: "ASC"
      }).then(res => {
        setData(res.data)
      })
    }
    if (query == "HL") {
      GetProduct({
        db: "BlueflyHeels",
        sort: "price",
        order: "DESC"
      }).then(res => {
        setData(res.data)
      })
    }
  }
  return (
    <div>
      <Heading mt="10" mb="10">Women's Pump & Heels</Heading>
      <Flex w="80%" margin="auto" p="10" justifyContent={"space-between"}>
        <Text>Showing {data.length + 1400} results for "Women's Pump & Heels"</Text>
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

export default Pumpheel