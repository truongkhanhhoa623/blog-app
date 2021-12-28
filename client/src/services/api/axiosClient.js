import axios from 'axios';
const token = localStorage.getItem("token");
export const axiosClient = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? "/api/" : "http://localhost:5000/api/",
    headers: {
        'content-text': 'application/json',
        credentials: 'include',
},
});

axiosClient.interceptors.request.use(async (config) => {
    return config
})

axiosClient.interceptors.response.use(async (response) => {
    return response
}, (error) => {
    throw error;
})