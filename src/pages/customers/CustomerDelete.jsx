import React, { useContext } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './customerDelete.css'
import { deleteData } from '../../services/operationServices';
import { MainContext } from '../../context/mainContext.jsx';

const CustomerDelete = (props) => {

const { setDeleteToggle, id, firstName, lastName } = props

const { getData } = useContext(MainContext)

const handleDelete = async () => {
    let postData = { id : id }
    await deleteData(postData)
    setDeleteToggle(false)
    getData('name')
}



    return (

    <React.Fragment>
        <div className='customerDelete-container'>
            <div className='customerDelete-Block' style={{display: 'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <div className='customerDelete-header'>
                    Delete Customer 
                    <CloseIcon onClick={() => setDeleteToggle(false)}/>
                </div>
                <div className='customerDelete-details'>
                    <p>Do you want to delete <span style={{textTransform:'capitalize'}}>{firstName} {lastName}</span> information?</p>
                </div>
                <div className='customerDelete-btns'>
                    <button onClick={() => setDeleteToggle(false)}>
                        No
                    </button>
                    <button onClick={() => handleDelete()}>
                        Yes
                    </button>
                </div>
            </div>
        </div>
    </React.Fragment>

  )
}

export default CustomerDelete
