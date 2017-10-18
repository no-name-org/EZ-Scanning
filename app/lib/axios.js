import axios from 'axios';

const localhost = 'http://192.168.1.52:3009/api';

export const getData = (query, handleResult) => {
  axios.get(localhost + query)
    .then(response => {
      handleResult(response.data);
    })
}

export const postData = (query, data, handleResult) => {
  axios.post(localhost + query, data)
    .then(response => {
      !handleResult || handleResult();
    })
}
