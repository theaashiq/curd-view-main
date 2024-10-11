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
        const response = await axiosInstance.put('/operation/update', postData)
        return response.data
    } catch(error) {
        console.error(error)
        throw error
    }
}

export const deleteData = async (postData) => {
    try{
        console.log(postData, '/operation/delete Request')
        const response = await axiosInstance.delete('/operation/delete', {
            data: postData  
        })
        console.log(response, '/operation/delete Response')
        return response.data
    } catch(error) {
        console.error(error)
        throw error
    }
}
