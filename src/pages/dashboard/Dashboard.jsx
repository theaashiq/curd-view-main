import React, { useContext, useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ResponsivePie } from '@nivo/pie';
import CreateCustomer from '../../compounets/createCustomer';
import './dashboard.css'
import { MainContext } from '../../context/mainContext.jsx';
import { useNavigate } from 'react-router-dom';
import GenerateReport from '../../compounets/generateReport.jsx'

const Dashboard = () => {

  const {
    createCustomerToggle,
    setCreateCustomerToggle,
    generateReportToggle,
    setGenerateReportToggle,
    dashBoardData,
    loading
  } = useContext(MainContext)

  const navigate = useNavigate()

  const [ graphAgeToggle, setGraphAgeToggle ] = useState(false)
  const [ pieChartData, setPieChartData ] = useState([])

  useEffect(() => {
    if(graphAgeToggle) {
      setPieChartData([
        {
          id: 'Youth',
          label: 'Youth',
          value: dashBoardData.young
        },
        {
          id: 'Adult',
          label: 'Adult',
          value: dashBoardData.adult
        },
        {
          id: 'Senior',
          label: 'Senior',
          value: dashBoardData.senior
        }
      ])
    } else {
      setPieChartData([
        {
          id: 'Male',
          label: 'Males',
          value: dashBoardData.males
        },
        {
          id: 'Female',
          label: 'Females',
          value: dashBoardData.females
        },
        {
          id: 'Others',
          label: 'Others',
          value: dashBoardData.others
        }
        ])
    }

  },[dashBoardData, graphAgeToggle])

  // const pieChartData = [
  //   {
  //     id: 'Male',
  //     label: 'Males',
  //     value: 7
  //   },
  //   {
  //     id: 'Female',
  //     label: 'Females',
  //     value: 17
  //   },
  //   {
  //     id: 'Others',
  //     label: 'Others',
  //     value: 4
  //   }
  // ];

  const handleCreateCustomer = () => {
    setCreateCustomerToggle(true); // Toggle the state
  };

  const state = 'create'

  return (
    <>
      {loading 
        ? <div className='loading-container' style={{marginTop:'160px'}}>
            <img src='loading.gif' />
          </div> 
        : <div className='dashboard-container'>
            <div className='dashboard-createCustomerBlock'>
              <button onClick={() => handleCreateCustomer()}>
                <AddIcon /> Create Customer
              </button>
              <button
                onClick={() => setGenerateReportToggle(true)}
                style={{ backgroundColor: '#ffb600' }}>
                <InsertDriveFileIcon style={{ backgroundColor: 'transparent' }} /> Generate Report
              </button>
            </div>
            <div className='dashboard-totalCustomerBlock'>
              <div className='dashboard-totalCustomer'>Customers: 
                <span>{dashBoardData.customers < 10 ? `0${dashBoardData.customers}` : dashBoardData.customers}</span>
              </div>
              <div className='dashboard-totalCustomerGender'>
                <div>Males: 
                  <span>{dashBoardData.males < 10 ? `0${dashBoardData.males}` : dashBoardData.males}</span>
                </div>
                <div>Females: 
                  <span>{dashBoardData.females < 10 ? `0${dashBoardData.females}` : dashBoardData.females}</span>
                </div>
                <div>Others: 
                  <span>{dashBoardData.others < 10 ? `0${dashBoardData.others}` : dashBoardData.others}</span>
                </div>
              </div>
            </div>
            <div className='dashboard-customersGraphBlock'>
              <div className='dashboard-customersGraphHeading'>
                {graphAgeToggle? 'Age' : 'Gender'} <ArrowDropDownIcon />
                <div className='dashboard-customersGraphHeadingOption' onClick={() => setGraphAgeToggle(!graphAgeToggle)}>
                  {graphAgeToggle ? 'Gender' : 'Age'}
                </div>
              </div>
              <div className='dashboard-customersGraphContainer'>
                <ResponsivePie
                  data={pieChartData.filter(item => item.value > 0)}
                  innerRadius={0.5}
                  activeOuterRadiusOffset={10}
                  isInteractive={false}
                  theme={{
                    labels: {
                      text: {
                        fontFamily: 'Montserrat, sans-serif',  // Change the font family
                        fontSize: 12, 
                        fontWeight: 600 // You can also adjust font size
                      },
                    },
                  }}/>
              </div>
            </div>
            <div className='dashboard-customerByAgeBlock'>
              <div className='dashboard-customerByAgeHeading'>
                Age-wise Customer Breakdown
              </div>
              <div className='dashboard-customerByAge'>
                <div>
                  <div className='dashboard-customerByAge-Number'>
                    <span>{dashBoardData.young < 10 ? `0${dashBoardData.young}` : dashBoardData.young}</span>
                  </div>
                  <div>Youth</div>
                  <div>(Under 18)</div>
                </div>
                <div className='dashboard-customerByAge-middle'>
                  <div className='dashboard-customerByAge-Number'>
                    <span>{dashBoardData.adult < 10 ? `0${dashBoardData.adult}` : dashBoardData.adult}</span>
                  </div>
                  <div>Adult</div>
                  <div>(18-45)</div>
                </div>
                <div>
                  <div className='dashboard-customerByAge-Number'>
                    <span>{dashBoardData.senior < 10 ? `0${dashBoardData.senior}` : dashBoardData.senior}</span>
                  </div>
                  <div>Senior</div>
                  <div>(Above 45)</div>
                </div>
              </div>
            </div>
            <div className='dashboard-generateBtn'>
              <button onClick={() => navigate('/customers')}>
                View Customers
              </button>
            </div>
          </div> }

      {createCustomerToggle && <CreateCustomer state={state} />}

      {generateReportToggle
        && <GenerateReport setGenerateReportToggle={setGenerateReportToggle} />}
    </>
  )
}

export default Dashboard
