import React, { useContext, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ResponsivePie } from '@nivo/pie';
import CreateCustomer from '../../compounets/createCustomer';
import './dashboard.css'
import { MainContext } from '../../context/mainContext.jsx';

const Dashboard = () => {

  const { createCustomerToggle, setCreateCustomerToggle } = useContext(MainContext)

  console.log(createCustomerToggle, 'STATE')

  const pieChartData = [
    {
      id: 'Male',
      label: 'Male',
      value: 7
    },
    {
      id: 'Female',
      label: 'Female',
      value: 17
    },
  ];

  const handleCreateCustomer = () => {
    setCreateCustomerToggle(true); // Toggle the state
  };

  return (
    <>
      <div className='dashboard-container'>
        <div className='dashboard-createCustomerBlock'>
          <button onClick={() => handleCreateCustomer()}>
            <AddIcon/> Create Customer
          </button>
        </div>
        <div className='dashboard-totalCustomerBlock'>
          <div className='dashboard-totalCustomer'>Total Customers: <span>57</span></div>
          <div className='dashboard-totalCustomerGender'>
            <div>Total Males: <span>07</span></div>
            <div>Total Females: <span>17</span></div>
          </div>
        </div>
        <div className='dashboard-customersGraphBlock'>
          <div className='dashboard-customersGraphHeading'>
            Gender <ArrowDropDownIcon/>
            <div className='dashboard-customersGraphHeadingOption'>
              Age
            </div>  
          </div>
          <div className='dashboard-customersGraphContainer'>
            <ResponsivePie
              data={pieChartData}
              innerRadius={0.5}
              enableArcLinkLabels={false}/>
          </div>
        </div>
        <div className='dashboard-customerByAgeBlock'>
          <div className='dashboard-customerByAgeHeading'>
            Age-wise Customer Breakdown
          </div>
          <div className='dashboard-customerByAge'>
            <div>
              <div className='dashboard-customerByAge-Number'>44</div>
              <div>Youth</div>
              <div>(Under 18)</div>
            </div>
            <div className='dashboard-customerByAge-middle'>
              <div className='dashboard-customerByAge-Number'>15</div>
              <div>Adult</div>
              <div>(18-45)</div>
            </div>
            <div>
              <div className='dashboard-customerByAge-Number'>00</div>
              <div>Senior</div>
              <div>(Above 45)</div>
            </div>
          </div>
        </div>
        <div className='dashboard-generateBtn'>
            <button>
              <InsertDriveFileIcon/> Generate Report
            </button>
        </div>
      </div>

      {createCustomerToggle && <CreateCustomer/>}
    </>
    )
}

export default Dashboard
