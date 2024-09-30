import React, { createContext, useState } from 'react'

export const MainContext = createContext()

export const MainProvider = ({children}) => {
    const [ createCustomerToggle, setCreateCustomerToggle ] = useState(false)

    return (
        <MainContext.Provider 
            value={{
                createCustomerToggle, setCreateCustomerToggle
            }}>
            {children}
        </MainContext.Provider>
    )
}