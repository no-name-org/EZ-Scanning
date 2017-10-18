import axios from 'axios';

const localhost = 'http://192.168.1.7:3009/api';

export const getData = (query, handleResult) => {
  console.log(localhost + query);
  return axios.get(localhost + query)
    .then(response => {
      if (handleResult) handleResult(response.data)
        else return response.data;
    })
}

export const postData = (query, data, handleResult) => {
  axios.post(localhost + query, data)
    .then(response => {
      handleResult || handleResult();
    })
}
