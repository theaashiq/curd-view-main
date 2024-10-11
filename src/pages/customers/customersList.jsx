import React, { useContext, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { MainContext } from '../../context/mainContext';
import CustomerDelete from './CustomerDelete.jsx';
import './customersList.css'

const CustomersList = (props) => {

const {
    firstName,
    lastName, 
    dob,
    age,
    gender,
    phoneNumber,
    email,
    customerId, 
    createdAt,
    lastUpdatedAt
} = props

const { createCustomerToggle, setCreateCustomerToggle } = useContext(MainContext)

const [ deleteToggle, setDeleteToggle ] = useState(false)


function formatDate(isoDateStr) {
    const date = new Date(isoDateStr);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
}

function formatDateTime(isoDateStr) {
    const date = new Date(isoDateStr);
    const day = date.getUTCDate();
    const month = date.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' });
    const year = date.getUTCFullYear();
    const hours = date.getUTCHours().toString().padStart(2, '0'); 
    const minutes = date.getUTCMinutes().toString().padStart(2, '0'); 

    return `${day}-${month}-${year} at ${hours}.${minutes}`;
}



  return (
    <React.Fragment>
        <div className='customerList-Block' style={{position:'relative'}}>
            <div className='customerList-header'> 
                {firstName} {lastName}
                <div>
                    <EditIcon onClick={() => setCreateCustomerToggle(true)}/>
                    <DeleteIcon onClick={() => setDeleteToggle(true)}/>
                </div>
            </div>
            <div className='customerList-Details'>
                <div>
                    Date of Birth <span>{formatDate(dob)}</span>
                </div>
                <div>
                    Age <span>{age}</span>
                </div>
                <div>
                    Gender <span style={{textTransform:'capitalize'}}>{gender}</span>
                </div>
                <div>
                    Phone Number <span>+91 {phoneNumber}</span>
                </div>
                <div>
                    Email <span>{email}</span>
                </div>
                <div>
                    Customer Id <span>{customerId}</span>
                </div>
            </div>
            <div className='customerList-createdDetails'>
                <div>Created on {formatDateTime(createdAt)}</div>
                {lastUpdatedAt && <div>Last updated on {formatDateTime(lastUpdatedAt)}</div>}
            </div>
        </div>

        {deleteToggle 
        && <CustomerDelete setDeleteToggle={setDeleteToggle}/>}

    </React.Fragment>

  )
}

export default CustomersList