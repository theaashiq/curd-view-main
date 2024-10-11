import axios from 'axios'

const axiosInstance = axios.create({
    // baseURL: 'https://curd-server-five.vercel.app',
    baseURL: 'http://localhost:5600/',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default axiosInstance