import axios from 'axios';
import pexels_api_key from '../../secrets'

export default axios.create({
    baseURL: `https://api.pexels.com`,
    headers: {
        Authorization: pexels_api_key
    }
});