import API from '../api';
import axios from 'axios';

export const create = (experimentDetails) => {
    console.log('experimentDetails', experimentDetails);
    return axios.post(`${API.url}/api/experiment`, experimentDetails);
};
