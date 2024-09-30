import React, { useContext, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './css/createCustomer.css'
import { MainContext } from '../context/mainContext';

const CreateCustomer = () => {

const { setCreateCustomerToggle } = useContext(MainContext)
const [ customerDetailsInput,  setCustomerDetails ] = useState({
    name: ""
})
  return (
    <>
        <div className='createCustomer-container'>
            <div className='createCustomer'>
                <form>
                    <div className='createCustomer-header'>
                        Create Customer 
                        <CloseIcon onClick={() => setCreateCustomerToggle(false)}/>
                    </div>
                    <div className='createCustomer-innerBlock'>
                        <div className='createCustomer-block'>
                            <div>
                                <p>First Name</p>
                                <input 
                                    type='text'  
                                    pattern="^[A-Za-z\s]*$"  />
                            </div>
                            <div>
                                <p>Last Name</p>
                                <input type='text'  pattern="^[A-Za-z\s]*$"  />
                            </div>
                            <div>
                                <p>Date of Birth</p>
                                <input type='date' />
                            </div>
                            <div>
                                <p>Age</p>
                                <input type='text'  pattern="^[A-Za-z\s]*$"  />
                            </div>
                            <div>
                                <p>Gender</p>
                                <select>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </select>
                            </div>
                            <div>
                                <p>Phone Number</p>
                                <input type='text'  pattern="^[A-Za-z\s]*$"  />
                            </div>
                            <div className='createCustomer-full-column'>
                                <p>Email</p>
                                <input type='text'  pattern="^[A-Za-z\s]*$"  />
                            </div>
                            <div                            className='createCustomer-full-column'>
                                < p>Bank Account Number</p>
                                <input type='text'  pattern="^[A-Za-z\s]*$"  />
                            </div>
                        </div>
                        <div className='createCustomer-btns'>
                            <button>
                                Discard
                            </button>
                            <input type='submit' value='Create'/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default CreateCustomer
