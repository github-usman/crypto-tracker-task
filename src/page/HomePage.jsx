import React, { useState } from 'react'
import styles from "./homePage.module.css"
import CoinList from '../components/crypto-currencies/coin-list/CoinList'
import Navbar from '../components/navbar/Navbar'
import Carousel from '../components/carousel/Carousel'
import CryptoNav from '../components/crypto-navbar/CryptoNav'
import Pagination from '../components/pagination/Pagination'

const HomePage = () => {

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className={styles.container}>
      <Navbar />
      <hr />
      <Carousel />
      <h2 className={styles.title}>Top 100 Cryptocurrencies by Market Cap</h2>
      <CryptoNav />
      <CoinList />
      <div className={styles.paginationBtn}>
          <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} totalPage={10} />
      </div>
    </div>
  )
}

export default HomePage