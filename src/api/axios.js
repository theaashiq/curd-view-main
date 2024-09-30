import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://curd-server-five.vercel.app',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default axiosInstance