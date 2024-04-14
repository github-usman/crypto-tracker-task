import React from 'react'
import Carousel from '../components/carousel/Carousel'
import CoinList from '../components/crypto-currencies/coin-list/CoinList'
import CryptoNav from '../components/crypto-navbar/CryptoNav'
import Pagination from '../components/pagination/Pagination'
import styles from "./homePage.module.css"

const HomePage = () => {

  return (
    <div className={styles.container}>
      <Carousel />
      <h2 className={styles.title}>Top 100 Cryptocurrencies by Market Cap</h2>
      <CryptoNav />
      <CoinList />
      <div className={styles.paginationBtn}>
          <Pagination totalPage={10} />
      </div>
    </div>
  )
}

export default HomePage