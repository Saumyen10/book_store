import React from 'react'
import Banner from '../components/Banner'
import Favourites from './Favourites'
import BestSeller from './BestSeller'

const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSeller/>
      <Favourites/>
    </div>
  )
}

export default Home