import React, { createContext, useEffect, useState } from 'react'
import { fetchData } from '../services/mainServices'

export const MainContext = createContext()

export const MainProvider = ({children}) => {
    const [ createCustomerToggle, setCreateCustomerToggle ] = useState(false)
    const [ generateReportToggle , setGenerateReportToggle ] = useState(false)
    const [ fetchedData, setFetchedData ] = useState({})

    useEffect(() => {
        fetchData()
            .then((data) => {
                setFetchedData(data)
            })
            .catch((err) => {
                console.err('Error fetching data:', err)
            })
    },[])

    return (
        <MainContext.Provider 
            value={{
                createCustomerToggle, 
                setCreateCustomerToggle,
                generateReportToggle , 
                setGenerateReportToggle,
                fetchedData 
            }}>
            {children}
        </MainContext.Provider>
    )
}