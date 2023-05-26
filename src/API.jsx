import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://real-time-news-data.p.rapidapi.com/search',
  params: {
    query: '',
    country: 'US',
    lang: 'en'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
  }
};

export const FetchData = async (query) => {
  try {
    const response = await axios.request({
     ...options,params:{query:query}
    });
    return response.data

  } catch (error) {
    return error;
  }
};
