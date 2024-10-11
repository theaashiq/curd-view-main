import axiosInstance from "../api/axios";

export const fetchData = async (postData) => {
    try{
        console.log(postData, '/fetchData request')
        const response = await axiosInstance.post('/fetchData', postData)
        console.log(response, '/fetchData response')
        return response.data
    } catch(error) {
        console.error(error)
        throw error
    }
}
