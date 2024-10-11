import React, { useContext, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { MainContext } from '../../context/mainContext';
import CustomerDelete from './CustomerDelete.jsx';
import './customersList.css'
import CreateCustomer from '../../compounets/createCustomer';

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

const {  
    setCreateCustomerToggle,
    setActivityState } = useContext(MainContext)

const [ deleteToggle, setDeleteToggle ] = useState(false)
const [ updateToggle, setUpdateToggle ] = useState(false)

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


const handleEdit = async () => {
    await setActivityState('Update')
    setUpdateToggle(true)
}


  return (
    <React.Fragment>
        <div className='customerList-Block' style={{position:'relative'}}>
            <div className='customerList-header'> 
                {firstName} {lastName}
                <div>
                    <EditIcon onClick={() => handleEdit()}/>
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

        {updateToggle 
            && <CreateCustomer 
                    setUpdateToggle={setUpdateToggle}
                    firstName={firstName}
                    lastName={lastName}
                    gender={gender}
                    phoneNumber={phoneNumber}
                    email={email}
                    age={age}
                    dob={new Date(dob).toISOString().split('T')[0]} />}

    </React.Fragment>

  )
}

export default CustomersList