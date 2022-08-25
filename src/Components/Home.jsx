import React from 'react'
import BottomCategory from './BottomCategory'
import { CarouselData } from './CarouselData'
import Carousels from './Carousels'
import MidCarousel from './MidCarousel'
import Offer from './Offer'
import ShopByCategory from './ShopByCategory'
import TopPromo from './TopPromo'

const Home = () => {
  return (
    <div>
        <Carousels slides={CarouselData}/>
        <TopPromo/>
        <ShopByCategory/>
        <MidCarousel slides={CarouselData}/>
        <BottomCategory/>
    </div>
  )
}

export default Home