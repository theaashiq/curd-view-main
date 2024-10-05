import React, { createContext, useEffect, useState } from 'react'
import { fetchData } from '../services/mainServices'

export const MainContext = createContext()

export const MainProvider = ({children}) => {
    const [ createCustomerToggle, setCreateCustomerToggle ] = useState(false)
    const [ generateReportToggle , setGenerateReportToggle ] = useState(false)
    const [ loading, setLoading ] = useState(false)
    const [ dashBoardData, setdashBoardData ] = useState({})
    const [ customersData, setCustomersData ] = useState([])

    const getData = async () => {
        setLoading(true); 
        try {
            const data = await fetchData(); 
            console.log(data, 'Data')
            setdashBoardData(data.dashboard); 
            setCustomersData(data.customers)
            setLoading(false)
        } catch (err) {
            console.error('Error fetching data:', err); 
        } 
    };

    useEffect(() => {
        getData()
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
                customersData 
            }}>
            {children}
        </MainContext.Provider>
    )
}