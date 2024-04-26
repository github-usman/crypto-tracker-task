import styles from "./coinList.module.css";
import React, { useState, useEffect } from 'react';
import fetchTopCoinsData from '../../../services/api';
import Loading from '../../loading/Loading';
import CoinListItem from "../coin-list-item/CoinListItem";
import { usePageContext } from "../../../contexts/PageContext";
import { GoArrowDown } from "react-icons/go";

const CoinList = () => {
  const [coinData, setCoinData] = useState([]);
  const [error, setError] = useState(null);
  const { currentPage, loading, setLoading } = usePageContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTopCoinsData('inr', 10, currentPage);
        setCoinData(data);
        console.log('working')
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
    
  }, [currentPage]);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message} due to API rate limit please try after some time</div>;

  return (
    <div>
      
      <div className={styles.coinTableHeading}>
        <p className={styles.indexing}>#</p>
        <p className={styles.name}>NAME</p>
        <p className={styles.alignRight}>PRICE</p>
        <p className={styles.alignRightH}>24H <GoArrowDown className={styles.arrowIcon} /></p>
        <p className={styles.alignRight}>7D</p>
        <p className={styles.alignRight}>MARKET CAP</p>
        <p className={styles.alignRight}>VOLUME(24H)</p>
        <p className={styles.alignRight}>CIRCULATING SUPPLY</p>
      </div>
      
      <div className={styles.coinTableHeadingMobile}>
        <p></p>
        <p className={styles.name}>NAME</p>
        <p >PRICE</p>
        <p className={styles.alignRightH}>24H <GoArrowDown className={styles.arrowIcon} /></p>
      </div>

      <ul>
        {coinData.map((coin, index) => (
          <div key={coin.id}>
            <CoinListItem coin={coin} index={index} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CoinList;
