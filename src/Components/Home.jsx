import React from 'react'
import { CarouselData } from './CarouselData'
import Carousels from './Carousels'

const Home = () => {
  return (
    <div>
        <Carousels slides={CarouselData}/>
    </div>
  )
}

export default Home