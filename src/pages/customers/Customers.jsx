import React, { useContext, useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import './customers.css'
import CustomersList from './customersList';
import { MainContext } from '../../context/mainContext.jsx';
import CreateCustomer from '../../compounets/createCustomer';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import GenerateReport from '../../compounets/generateReport.jsx'

const Customers = () => {

  const {
    createCustomerToggle,
    setCreateCustomerToggle,
    generateReportToggle,
    setGenerateReportToggle,
    customersData,
    sortByState,
    setSortByState,
    getData,
    loading,
    setActivityState
  } = useContext(MainContext)

  const handleCreateCustomer = async () => {
    await setActivityState('Create')
    await setCreateCustomerToggle(true); 
  };

  console.log(customersData, 'Data')
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []); 

  const handleSort = async (state) => {
    setSortByState(state)
    getData(state)
  }

  return (
    <>
      <div className='customer-container'>
        <div className='customer-header'>
          <button onClick={() => handleCreateCustomer()}>
            <AddIcon /> Create Customer
          </button>
          <div>
            <input type='text' placeholder='Search by name or email' /> <SearchIcon />
          </div>
          <button
            onClick={() => setGenerateReportToggle(true)}
            style={{ backgroundColor: '#ffb600', marginLeft: 'auto' }}>
            <InsertDriveFileIcon style={{ backgroundColor: 'transparent' }} /> Generate Report
          </button>
        </div>
        <div className='customer-sortByBlock'>
          <div>Sort By</div>
          <div>
            <button
              onClick={() => handleSort('name')} 
              style={{
                borderColor: sortByState === 'name' && '#4643d3',
                backgroundColor: sortByState === 'name' && '#fff',
                color: sortByState === 'name' && '#4643d3'}}>
                By Name
            </button>
            <button 
              onClick={() => handleSort('date')} 
              style={{
                borderColor: sortByState === 'date' && '#4643d3',
                backgroundColor: sortByState === 'date' && '#fff',
                color: sortByState === 'date' && '#4643d3'}}>
                By Date
            </button>
          </div>
        </div>
        <div style={{ marginTop: '20px' }}>
          {loading 
            ? <div className='loading-container' style={{marginTop:'100px'}}>
                <img src='loading.gif'/>
              </div> 
            : <div>
                {customersData.map(val => 
                  <CustomersList 
                    firstName={val.firstName}
                    lastName={val.lastName}
                    dob={val.dob}
                    age={val.age}
                    gender={val.gender}
                    phoneNumber={val.phoneNumber}
                    email={val.email}
                    customerId={val.customerId}
                    createdAt={val.createdAt}
                    lastUpdatedAt={val.updatedAt}
                    id={val._id} />)}
              </div>}
        </div>
      </div>

      {createCustomerToggle && <CreateCustomer/>}

      {generateReportToggle
        && <GenerateReport setGenerateReportToggle={setGenerateReportToggle} />}

    </>
  )
}

export default Customers
