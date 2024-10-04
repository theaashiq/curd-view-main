import axiosInstance from "../api/axios";

export const fetchData = async () => {
    try{
        const response = await axiosInstance.get('/fetchData')
        return response.data
    } catch(error) {
        console.error(error)
        throw error
    }
}
