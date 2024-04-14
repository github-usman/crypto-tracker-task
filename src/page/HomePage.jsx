import React from 'react'
import styles from "./homePage.module.css"
import CoinList from '../components/crypto-currencies/coin-list/CoinList'
import Navbar from '../components/navbar/Navbar'
// import Carousel from '../components/carosel/Carousel'
import Carousel from '../components/carousel/Carousel'
import CryptoNav from '../components/crypto-navbar/CryptoNav'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <hr />
      <Carousel />
      <h2 className={styles.title}>Top 100 Cryptocurrencies by Market Cap</h2>
      <CryptoNav/>

      <CoinList />
    </div>
  )
}

export default HomePage