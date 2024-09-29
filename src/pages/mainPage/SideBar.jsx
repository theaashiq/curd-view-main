import React from 'react'
import './sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const SideBar = (props) => {

  const {setSideBarToggle} = props

  return (
    <div className='sideBar-nav-container'>
      <nav>
        <div className='sideBar-logoBlock'>
          <img src='logoV2.png' />
          <p>Data Plus<span>Manage Simply</span></p>
        </div>
        <div className='sideBar-closeBtn'>
          <CloseIcon onClick={() => setSideBarToggle(false)}/>
        </div>
        <div className='sideBar-mainMenu-Block'>
          <div className='sideBar-mainMenu-heading'>Main Menu</div>
          <div className='sideBar-mainMenuItems'>
            <Link to='/dashboard' onClick={() => setSideBarToggle(false)}>
              <DashboardIcon/> <span>Dashboard</span>
            </Link>
            <Link to='/customers' onClick={() => setSideBarToggle(false)}>
              <SupervisorAccountIcon/> <span>Customers</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default SideBar