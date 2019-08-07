import axios from 'axios'

const baseUrl = '';

const service = axios.create({
    baseUrl,
    timeout: 10000
});

export default service;