import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import './dashboard.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ResponsivePie } from '@nivo/pie';

const Dashboard = () => {

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

  return (
      <div className='dashboard-container'>
        <div className='dashboard-createCustomerBlock'>
          <button>
            <AddIcon/> Create Customers
          </button>
        </div>
        <div className='dashboard-totalCustomerBlock'>
          <div className='dashboard-totalCustomer'>Total customers: <span>57</span></div>
          <div className='dashboard-totalCustomerGender'>
            <div>Total males: <span>07</span></div>
            <div>Total females: <span>17</span></div>
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
            <div>
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
    )
}

export default Dashboard
