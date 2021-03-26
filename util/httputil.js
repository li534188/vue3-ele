import axios from 'axios';
import { baseUrl } from '../config/env';
// import router from '../router';
axios.defaults.timeout = 6000000;
axios.defaults.baseURL = '';


// http request 拦截器
axios.interceptors.request.use(
  config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    config.headers['Content-Type'] = 'application/json';
    config.data = JSON.stringify(config.data);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);


// http response 拦截器
axios.interceptors.response.use(
  response => {

    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
      case 401:
        // router.push({
        //   path: '/login',
        // });
        break;
      default:
        console.log('Serve Error');
        return Promise.reject(error);
      }
    } else {
      console.log('Request Timeout');
    }
  });


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export async function get(url, data = {}) {
  try {
    const res = await axios.get(url = baseUrl+url, { params: data });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export async function post(url = baseUrl+url, data = {}) {
  try {
    const res = await axios.post(url, data);
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
}

/***
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      });
  });
}

/***
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      });
  });
}