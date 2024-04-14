import styles from "./coinList.module.css";
import React, { useState, useEffect } from 'react';
import fetchTopCoinsData from '../../../services/api';
import Loading from '../../loading/Loading';
import CoinListItem from "../coin-list-item/CoinListItem";
import { usePageContext } from "../../../contexts/PageContext";

const CoinList = () => {
  const [coinData, setCoinData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { currentPage } = usePageContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTopCoinsData('inr', 10,currentPage);
        setCoinData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
    return () => {
    };
  }, [currentPage]);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className={styles.coinTableHeading}>
        <p style={{ textAlign: 'right', paddingRight: '8px' }}>#</p>
        <p style={{ textAlign: 'left', padding: '0 8px' }}>NAME</p>
        <p style={{ textAlign: 'right' }}>PRICE</p>
        <p style={{ textAlign: 'right' }}>24H</p>
        <p style={{ textAlign: 'right' }}>7D</p>
        <p style={{ textAlign: 'right' }}>MARKET CAP</p>
        <p style={{ textAlign: 'right' }}>VOLUME(24H)</p>
        <p style={{ textAlign: 'right' }}>CIRCULATING SUPPLY</p>
      </div>

      <ul>
        {coinData.map((coin,index) => (
          <div key={coin.id}>
            <CoinListItem coin={coin} index={index} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CoinList;
