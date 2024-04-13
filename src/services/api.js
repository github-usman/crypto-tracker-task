// src/services/api.js
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_API_URL;

const fetchTopCoinsData = async (vsCurrency = 'inr', perPage = 10, page = 1) => {
  try {
    // const response = await axios.get(`${BASE_URL}/coins/markets`, {
    const response = await axios.get(`${BASE_URL}/data`, {
      // params: {
      //   vs_currency: vsCurrency,
      //   order: 'market_cap_desc',
      //   per_page: perPage,
      //   page: page,
      //   sparkline: false,
      //   price_change_percentage: '24h,7d',
      // },
    });
    console.log('api call test',response.data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch top coins data');
  }
};

export default fetchTopCoinsData ;
