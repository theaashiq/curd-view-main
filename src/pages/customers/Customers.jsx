import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import './customers.css'
import CustomersList from './customersList';

const Customers = () => {
  let value = [1, 2, 3, 4, 5, 8]

  return (
    <div className='customer-container'>
      <div className='customer-header'>
        <button>
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
  )
}

export default Customers
