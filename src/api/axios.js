import axios from 'axios';
import { ElNotification } from 'element-plus'

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://sgu-rank.vercel.app/api' : 'http://localhost:3000/api'
});

export const handleError = (error) => {
  if(!error) {
    throw new Error('Missing error param')
  }
  
  ElNotification({
    title: "Lỗi",
    message: error.response && error.response.data && error.response.data.error ? error.response.data.error : error.message,
    type: 'error'
  });
}

export default instance;