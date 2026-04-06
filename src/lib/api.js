import axios from "axios";
import { getCookie, setCookie } from '@/utils/cookie.js'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
    req => {
        const accessToken = getCookie('accessToken');
        if(accessToken) {
            req.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return req;
    },
    err => {
        return Promise.reject(err);
    },
);

api.interceptors.response.use(
    res => { return res },
    async (err) => {
        const originalRequest = err.config;
        if(err.response.status === 401 && !originalRequest._retry){
            originalRequest._retry = true;
        }

        const res = await getNewTokens();
        if(res?.response?.status === 201) {
            setCookie('accessToken' , res?.response?.data?.accessToken , 30);
            setCookie('refreshToken' , res?.response?.data?.refreshToken , 360);
            return api(originalRequest);
        } else {
            setCookie('accessToken' , '' , 0);
            setCookie('refreshToken' , '' , 0);
        }
        return Promise.reject(err.response.data);
    }
)


const getNewTokens = async () => {
    const refreshToken = getCookie('refreshToken');
    if(!refreshToken) return;

    try{
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh-token` , { refreshToken });
        return { response };
    } catch (err) {
        return { err };
    }
};

const updateUserProfile = async data => {
    const res = await api.put('/user/profile' , ...data);
    return res.data;
}

export { updateUserProfile };
export default api;