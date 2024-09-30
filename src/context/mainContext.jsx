import React, { createContext, useState } from 'react'

export const MainContext = createContext()

export const MainProvider = ({children}) => {
    const [ createCustomerToggle, setCreateCustomerToggle ] = useState(false)
    const [ generateReportToggle , setGenerateReportToggle ] = useState(false)

    return (
        <MainContext.Provider 
            value={{
                createCustomerToggle, 
                setCreateCustomerToggle,
                generateReportToggle , 
                setGenerateReportToggle
            }}>
            {children}
        </MainContext.Provider>
    )
}