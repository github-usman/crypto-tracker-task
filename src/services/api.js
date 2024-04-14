import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_API_URL;

const fetchTopCoinsData = async (vsCurrency = 'inr', perPage = 10, currentPage) => {

  try {

    const response = await axios.get(`${BASE_URL}/coins/markets`, {
      params: {
        vs_currency: vsCurrency,
        order: 'market_cap_desc',
        per_page: perPage,
        page: currentPage,
        sparkline: false,
        price_change_percentage: '24h,7d',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch top coins data');
  }
};

export default fetchTopCoinsData;
