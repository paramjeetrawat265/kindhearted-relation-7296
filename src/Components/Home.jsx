import React from 'react'
import BottomCategory from './BottomCategory'
import { CarouselData } from './CarouselData'
import Carousels from './Carousels'
import MidCarousel from './MidCarousel'
import NewArrivals from './NewArrivals'
import Offer from './Offer'
import ShopByCategory from './ShopByCategory'
import TopPromo from './TopPromo'
import TrendingNow from './TrendingNow'

const Home = () => {
  return (
    <div>
        <Carousels slides={CarouselData}/>
        <TopPromo/>
        <ShopByCategory/>
        <MidCarousel slides={CarouselData}/>
        <NewArrivals/>
        <TrendingNow/>
        
    </div>
  )
}

export default Home