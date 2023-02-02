import request from '@/request/request'
export let baseUrl = 'http://kuonnjiarisu.top:9112'

export  function getlist() {
    // getStorageData();
    console.log(request);
    return request().get(`${baseUrl}/blog/blogtitle/list`, {
    });
  }