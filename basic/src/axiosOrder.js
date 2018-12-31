import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-7abf5.firebaseio.com/'
});

export default instance;
