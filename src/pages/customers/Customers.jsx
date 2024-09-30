import React, { useContext, useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import './customers.css'
import CustomersList from './customersList';
import { MainContext } from '../../context/mainContext.jsx';
import CreateCustomer from '../../compounets/createCustomer';

const Customers = () => {
  const { createCustomerToggle, setCreateCustomerToggle } = useContext(MainContext)

  let value = [1, 2, 3, 4, 5, 8]

  const handleCreateCustomer = () => {
    setCreateCustomerToggle(true); // Toggle the state
  };


  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []); // Empty dependency array ensures this runs only once when component mounts

  return (
    <>
      <div className='customer-container'>
        <div className='customer-header'>
          <button onClick={() => handleCreateCustomer()}>
            <AddIcon/> Create Customer
          </button>
          <div>
            <input type='text' placeholder='Search by name or email'/> <SearchIcon/>
          </div>
        </div>
        <div style={{marginTop:'20px'}}>
          {value.map(val => <CustomersList/>)}
        </div>
      </div>

      {createCustomerToggle && <CreateCustomer/>}
    
    </>
  )
}

export default Customers
