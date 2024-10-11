import React, { useContext, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './customerDelete.css'
import { deleteData } from '../../services/operationServices';
import { MainContext } from '../../context/mainContext.jsx';
import DeleteIcon from '@mui/icons-material/Delete';

const CustomerDelete = (props) => {

const { setDeleteToggle, id, firstName, lastName } = props

const { getData } = useContext(MainContext)

const [ deleteNotify, setDeleteNotify ] = useState(false)
const [ loading, setLoading ] = useState(false)

const handleDelete = async () => {
    setLoading(true)
    let postData = { id : id }
    const response = await deleteData(postData)
    console.log(response, 'RESPONSE')
    if(response.message === "Deleted Sucessfully") {
        setDeleteNotify(true)
        setLoading(false)
    }
}



    return (

    <React.Fragment>
        <div className='customerDelete-container'>
            <div className='customerDelete-Block' style={{minHeight:'100px', minWidth:'260px'}}>
               {!deleteNotify 
                ?   <div style={{display: 'flex', flexDirection:'column', justifyContent:'space-between',}}>
                        {loading && <div className='createCustomer-loading'>
                            <img src='loading.gif' />
                        </div>}
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
                :   <div className='customerDelete-nofify'>
                        <div>Deleted Successfully <DeleteIcon /> </div>
                        <button onClick={() => {setDeleteToggle(false), getData('date')}}>
                            Done
                        </button> 
                    </div>}
            </div>
        </div>
    </React.Fragment>

  )
}

export default CustomerDelete
