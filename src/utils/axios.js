import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import * as config from './config';



const Axios = axios.create({
  baseURL: config.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default Axios;
