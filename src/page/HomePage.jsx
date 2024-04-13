import React from 'react'
import styles from "./homePage.module.css"
import CoinList from '../components/coin-list/CoinList'
import Navbar from '../components/navbar/Navbar'
// import Carousel from '../components/carosel/Carousel'
import ImageSlider from '../components/carousel/Carousel'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <hr />
      <ImageSlider />

      <CoinList />
    </div>
  )
}

export default HomePage