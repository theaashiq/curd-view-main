import axiosInstance from "../api/axios";

export const createData = async (postData) => {
    try{
        const response = await axiosInstance.post('/operation/create', postData)
        return response.data
    } catch(error) {
        console.error(error)
        throw error
    }
}

export const updateData = async (postData) => {
    try{
        const response = await axiosInstance.get('/update', postData)
        return response.data
    } catch(error) {
        console.error(error)
        throw error
    }
}

export const deleteData = async (postData) => {
    try{
        const response = await axiosInstance.get('/delete', postData)
        return response.data
    } catch(error) {
        console.error(error)
        throw error
    }
}
