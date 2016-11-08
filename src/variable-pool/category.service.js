import API from '../api';
import axios from 'axios';

export const create = (categoryDetails) => {
    console.log('experimentDetails', categoryDetails);
    return axios.post(`${API.url}/api/category`, categoryDetails);
};

