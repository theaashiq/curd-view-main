import React, { createContext, useEffect, useState } from 'react'
import { fetchData } from '../services/mainServices'

export const MainContext = createContext()

export const MainProvider = ({children}) => {
    const [ createCustomerToggle, setCreateCustomerToggle ] = useState(false)
    const [ generateReportToggle , setGenerateReportToggle ] = useState(false)
    const [ loading, setLoading ] = useState(false)
    const [ dashBoardData, setdashBoardData ] = useState({})
    const [ customersData, setCustomersData ] = useState([])
    const [ sortByState, setSortByState ] = useState('name')

    const getData = async (sortState) => {
        setLoading(true); 
        const postData = { sortBy: sortState }
        try {
            const data = await fetchData(postData); 
            setdashBoardData(data.dashboard); 
            setCustomersData(data.customers)
            setLoading(false)
        } catch (err) {
            console.error('Error fetching data:', err); 
        } 
    };

    useEffect(() => {
        getData(sortByState)
    },[])

    return (
        <MainContext.Provider 
            value={{
                createCustomerToggle, 
                setCreateCustomerToggle,
                generateReportToggle , 
                setGenerateReportToggle,
                dashBoardData,
                getData,
                loading,
                customersData,
                sortByState, setSortByState  
            }}>
            {children}
        </MainContext.Provider>
    )
}