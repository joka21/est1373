import axios from 'axios';

const WooCommerceAPI = axios.create({
  baseURL: 'https://est1373.de//wp-json/wc/v3/',
  auth: {
    username: process.env.WC_CONSUMER_KEY || '',
    password: process.env.WC_CONSUMER_SECRET || '',
  },
});

export default WooCommerceAPI;

