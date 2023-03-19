import axios from "axios";
import router from '../router/index'

const apiService = axios.create({
    baseURL: 'https://vue-online-app-5e315-default-rtdb.firebaseio.com'
})

apiService.interceptors.response.use(null,  error => {
    if(error.response.status === 401) {
        router.push('/auth?message=auth')
    }
    return Promise.reject(error);
  });

export default apiService