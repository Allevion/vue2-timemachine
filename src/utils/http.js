// 'use strict'

import axios from 'axios'

var config = require('../../config');
import qs from 'qs'

axios.defaults.withCredentials = true;
//
// axios.interceptors.request.use(utils => {
//   // loading
//   return utils
// }, error => {
//   return Promise.reject(error)
// })
//
// axios.interceptors.response.use(response => {
//   return response
// }, error => {
//   return Promise.resolve(error.response)
// })
function checkStatus(response) {
  if (response && response.status === 200) {
    return response
  } else {
    return Promise.reject({code: "9999", msg: "网络异常"})
  }
}

function checkJsonResult(response) {
  try {
    let data = JSON.parse(response.data);
    if ("00000000" === data.code) {
      return data.result
    } else if (data.code === "1010") {
      return Promise.reject({code: "1010", msg: "未登录"})
    } else {
      return Promise.reject({code: "9999", msg: data.message})
    }
  } catch (e) {
    return Promise.reject({code: "9999", msg: "网络异常"})
  }
}


function getReqConcig(reqConfig) {
  return {
    url: reqConfig.url,
    method: reqConfig.method ? reqConfig.method : 'post',
    baseURL: reqConfig.baseURL ? reqConfig.baseURL : process.apiHost,
    params: reqConfig.params && reqConfig.method == 'get' ? reqConfig.params : {},
    data: reqConfig.params ? qs.stringify(reqConfig.params) : "",
    // paramsSerializer: function (params) {
    //     return qs.stringify(params)
    // },
    maxRedirects: 5,
    timeout: 5000,
    maxContentLength: 2000,
    // responseType: 'json',
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    transformRequest: [function (data) {
      return data
    }],
    transformResponse: [function (data) {
      return data
    }],
    // //  `withCredentails`选项表明了是否是跨域请求
    withCredentials: true,
    // //  `adapter`适配器选项允许自定义处理请求，这会使得测试变得方便
    // //  返回一个promise,并提供验证返回
    // adapter: function (utils) {
    //   //
    // },
    // //  `httpAgent/httpsAgent`定义了当发送http/https请求要用到的自定义代理
    // //  keeyAlive在选项中没有被默认激活
    // // httpAgent: new http.Agent({keeyAlive: true}),
    // // httpsAgent: new https.Agent({keeyAlive: true}),
    // //  `validateStatus`定义了是否根据http相应状态码，来resolve或者reject promise
    // //  如果`validateStatus`返回true(或者设置为`null`或者`undefined`),那么promise的状态将会是resolved,否则其状态就是rejected
    // onUploadProgress: function (progressEvent) {
    // },
    // onDownloadProgress: function (progressEvent) {
    // }
    // cancelToken: new cancelToken(function (cancel) {
    //
    // })
  }
}

export default {
  name: "http",
  request(config) {
    return axios(getReqConcig(config)
    ).then(
      (response) => {
        return checkStatus(response)
      }
    ).catch(error => {
      console.log(error)
    })
  },
  requestJson(config) {
    return this.request(config
    ).then(
      (response) => {

        return checkJsonResult(response)
      }
    )
  }

}
