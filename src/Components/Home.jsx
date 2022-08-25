import React from 'react'
import BottomCategory from './BottomCategory'
import { CarouselData } from './CarouselData'
import Carousels from './Carousels'
import Offer from './Offer'
import TopPromo from './TopPromo'

const Home = () => {
  return (
    <div>
        <Carousels slides={CarouselData}/>
        <TopPromo/>
        <BottomCategory/>
    </div>
  )
}

export default Home