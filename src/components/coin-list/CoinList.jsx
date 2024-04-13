// src/components/CoinList/CoinList.js
import React, { useState, useEffect } from 'react';
import fetchTopCoinsData from '../../services/api';

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTopCoinsData('inr', 10, 1);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function if needed
    return () => {
      // Any cleanup code
    };
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Top 10 Coins by Market Cap (INR)</h1>
      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            {coin.name} - ${coin.current_price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoinList;
