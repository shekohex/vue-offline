import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
let Config = require('../config.json');
export const HTTP = axios.create({
  baseURL: `https://www.baseUrl.com/`,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});
