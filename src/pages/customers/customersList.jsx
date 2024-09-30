import React, { useContext } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { MainContext } from '../../context/mainContext';
import './customersList.css'

const CustomersList = () => {

const { createCustomerToggle, setCreateCustomerToggle } = useContext(MainContext)

  return (
    <div className='customerList-Block'>
        <div className='customerList-header'> 
            Christian Espinoza
            <div>
                <EditIcon onClick={() => setCreateCustomerToggle(true)}/>
                <DeleteIcon/>
            </div>
        </div>
        <div className='customerList-Details'>
            <div>
                Date of Birth <span>17.07.1994</span>
            </div>
            <div>
                Age <span>28</span>
            </div>
            <div>
                Gender <span>Male</span>
            </div>
            <div>
                Phone Number <span>+91 9448343941</span>
            </div>
            <div>
                Email <span>mdaashiqin2000@gmail.com</span>
            </div>
            <div>
                Bank Account Number <span>987654213562897</span>
            </div>
        </div>
    </div>
  )
}

export default CustomersList