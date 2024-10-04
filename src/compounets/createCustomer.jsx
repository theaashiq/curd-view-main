import React, { useContext, useState, useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './css/createCustomer.css'
import { MainContext } from '../context/mainContext';
import { createData } from '../services/operationServices';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const CreateCustomer = (prop) => {

const { setCreateCustomerToggle,  getData } = useContext(MainContext)

const { state } = prop

const initialCustomerDetails = {
    firstName: '',
    lastName: '',
    gender: '',
    phoneNumber: '',
    email: '',
    age: '',
    dob: '',
};

const [ customerDetailsInput,  setCustomerDetails ] = useState(initialCustomerDetails)
const [ isFormValid, setIsFormValid ] = useState(false);
const [ doneNotify, setDoneNotify ] = useState(false)
const [ loading, setLoading ] = useState(false)

const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

const handleInput = (event) => {
    const { name, value } = event.target
    if(name === 'dob') {
        const getAge = calculateAge(value)
        setCustomerDetails({
            ...customerDetailsInput,
            [name] : value,
            age: getAge
        })
    } else {
        setCustomerDetails({ ...customerDetailsInput, [name]: value})
    }
}

const today = new Date();
const maxDate = new Date(today.setFullYear(today.getFullYear() - 14)).toISOString().split('T')[0];

useEffect(() => {
    const isValid =
        customerDetailsInput.firstName &&
        customerDetailsInput.lastName &&
        customerDetailsInput.gender &&
        customerDetailsInput.phoneNumber && 
        customerDetailsInput.email &&
        customerDetailsInput.dob; 
    setIsFormValid(isValid);
}, [customerDetailsInput]);

const handleForm = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
        const response = await createData(customerDetailsInput)
        console.log(response)
        setLoading(false)
        setDoneNotify(true)
    } catch (err) {
        console.log('Error fetching data', err)
    }   
}

  return (
    <>
        <div className='createCustomer-container'>
            <div className='createCustomer'>
                {!doneNotify ?
                <form onSubmit={handleForm}>
                    {loading && <div className='createCustomer-loading'>
                        <img src='loading.gif' />
                    </div>}
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
                                    name='firstName'
                                    pattern="^[A-Za-z\s]*$"
                                    required
                                    onChange={handleInput}
                                    value={customerDetailsInput.firstName}/>                            
                            </div>
                            <div>
                                <p>Last Name</p>
                                <input 
                                    type='text' 
                                    name='lastName' 
                                    pattern="^[A-Za-z\s]*$"  
                                    required
                                    onChange={handleInput}
                                    value={customerDetailsInput.lastName}/>
                            </div>
                            <div>
                                <p>Date of Birth</p>
                                <input 
                                    type='date'
                                    name='dob'
                                    required
                                    max={maxDate}
                                    onChange={handleInput}
                                    value={customerDetailsInput.dob}/>
                            </div>
                            <div>
                                <p>Age</p>
                                <input 
                                    type='number'  
                                    name='age' 
                                    placeholder='Age will be calculated from DOB'
                                    value={customerDetailsInput.age}/>
                            </div>
                            <div>
                                <p>Gender</p>
                                <select 
                                    required 
                                    value={customerDetailsInput.gender} 
                                    onChange={handleInput}
                                    name='gender'>
                                  <option value="" disabled selected>Select</option>  
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                  <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <p>Phone Number</p>
                                <input 
                                    type='text'  
                                    name='phoneNumber'
                                    pattern="[1-9]{1}[0-9]{9}"   // Pattern to enforce exactly 10 digits
                                    title="Please enter a valid 10-digit Indian phone number"
                                    onWheel={(e) => e.target.blur()}
                                    value={customerDetailsInput.phoneNumber}
                                    onChange={handleInput}
                                    required />
                            </div>
                            <div className='createCustomer-full-column'>
                                <p>Email</p>
                                <input 
                                    type='email'
                                    name='email'
                                    value={customerDetailsInput.email}
                                    onChange={handleInput}
                                    required  />
                            </div>
                        </div>
                        <div className='createCustomer-btns'>
                            <button 
                                onClick={() => {
                                    setCustomerDetails(initialCustomerDetails), 
                                    setCreateCustomerToggle(false)}}>
                                Discard
                            </button>
                            <input 
                                type='submit' 
                                style={{ opacity: isFormValid ? 1 : 0.5, cursor: isFormValid ? 'pointer' : 'not-allowed' }}
                                value={state}/>
                        </div>
                    </div>
                </form> :
                <div className='createCustomer-successStatement'>
                    <div><TaskAltIcon /> Created Successfully</div>
                    <button onClick={() => {setCreateCustomerToggle(false), getData()}}>
                        Done
                    </button>               
                </div>}
            </div>

        </div>
    </>
  )
}

export default CreateCustomer
