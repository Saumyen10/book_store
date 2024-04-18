import React from 'react'
import Banner from '../components/Banner'
import Favourites from './Favourites'
import BestSeller from './BestSeller'
import PromoBanner from './PromoBanner'
import Review from './Review'

const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSeller/>         { /* This parts of codes are visible only in Home page of the website */}
      <Favourites/>
      <PromoBanner/>
      <Review/>
    </div>
  )
}

export default Home