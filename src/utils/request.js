import axios from 'axios';
import { Message } from 'element-ui';
import store from '@/store';
import basicConfig from '@/config/index';
// create an axios instance
const service = axios.create({
  baseURL: `${basicConfig.baseUrl}`, 
  timeout: 15000 
});

// request interceptor
service.interceptors.request.use(
  config => {
    if (!config.headers.Authorization && store.getters.token) {
      config.headers.Authorization = store.getters.token;
    }
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data;
    return res;
    // if (res.code === 0) {
    //   return res;
    // } else {
    //   Message({
    //     message: res.msg || 'Error',
    //     type: 'error',
    //     duration: 5 * 1000
    //   });
    // }
  },
  error => {
    console.log('err' + error); // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);
export default service;

