import axios from 'axios';

const api = axios.create({
    baseURL : 'http://localhost:6500',
    headers : {
        "Content-Type": "application/json",
    },
});

api.interceptors.response.use(res => res , async (err) => {
    if(err.response?.status === 401){
        console.log('UnAuthorized!');
    }

    return Promise.reject(err)
})


export default api;