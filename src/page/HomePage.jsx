
import React, { useState, useEffect } from 'react';
import  fetchTopCoinsData  from '../services/api';

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTopCoinsData('inr', 10, 1);
        setCoins(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();

    // Cleanup function if needed
    return () => {
      // Any cleanup code
    };
  }, []);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
     
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

export default HomePage;
