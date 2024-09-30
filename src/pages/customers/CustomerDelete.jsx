import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './customerDelete.css'

const CustomerDelete = (props) => {

    const { setDeleteToggle } = props

    return (

    <React.Fragment>
        <div className='customerDelete-container'>
            <div className='customerDelete-Block'>
                <div className='customerDelete-header'>
                    Delete Customer 
                    <CloseIcon onClick={() => setDeleteToggle(false)}/>
                </div>
                <div className='customerDelete-details'>
                    <p>Do you want to delete Christian Espinoza's information?</p>
                </div>
                <div className='customerDelete-btns'>
                    <button onClick={() => setDeleteToggle(false)}>
                        No
                    </button>
                    <button>
                        Yes
                    </button>
                </div>
            </div>
        </div>
    </React.Fragment>

  )
}

export default CustomerDelete
