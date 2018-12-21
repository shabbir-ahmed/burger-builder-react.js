import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-3s.firebaseio.com/'
});

export default instance;