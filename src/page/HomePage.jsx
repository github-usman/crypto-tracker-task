import React from 'react'
import styles from "./homePage.module.css"
import CoinList from '../components/coin-list/CoinList'
import Navbar from '../components/navbar/Navbar'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <CoinList />
    </div>
  )
}

export default HomePage