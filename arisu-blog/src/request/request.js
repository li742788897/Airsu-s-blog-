import axios from 'axios';
// import { Toast } from 'vant';

export default function () {
  const service = axios.create({
    headers: {
      signature: sessionStorage.getItem('signature'),
      encrypt: sessionStorage.getItem('encrypt'),
      nonce: sessionStorage.getItem('nonce'),
      timestamp: sessionStorage.getItem('timestamp'),
    },
  });

  // 请求拦截器
  service.interceptors.request.use(
    (config) => {
      // 在发送请求前做些什么
      // Toast.loading({
      //   duration: 0,
      //   message: '加载中...',
      //   forbidClick: true,
      // });
      return config;
    },
    (err) => {
      // 在请求错误的时候做些什么
      return Promise.reject(err);
    }
  );

  // 响应拦截器
  service.interceptors.response.use(
    (res) => {
      // Toast.clear();
      // 在请求成功对响应数据做处理
      if(res.data.code == 0){
        return res;
  
      }else {
        if(res.data&&res.data.msg!==undefined){
          console.log('img1Path22222:' + res.data.msg);
          // Toast.fail(res.data.msg);
        }
        return res;
      }

      // return res;
    },
    (err) => {
      // 在响应错误的时候做些什么
      // Toast.fail('服务器开个小差');
      return Promise.reject(err);
    }
  );

  return service;
}
