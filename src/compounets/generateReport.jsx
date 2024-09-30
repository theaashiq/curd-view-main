import React, { useContext, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './css/generateReport.css'

const CreateCustomer = (props) => {

const { setGenerateReportToggle } = props

  return (
    <>
        <div className='generateReport-container'>
            <div className='generateReport'>
                <div className='generateReport-header'>
                    Generate Report 
                    <CloseIcon onClick={() => setGenerateReportToggle(false)}/>
                </div>
                <div className='generateReport-options'>
                    <div>
                        <input type='checkbox' name='today'/>
                        <label name='today'>Today</label>
                    </div>
                    <div>
                        <input type='checkbox' name='lastTenDays'/>
                        <label name='lastTenDays'>Last 10 Days</label>
                    </div>
                    <div>
                        <input type='checkbox' name='all'/>
                        <label name='all'>All</label>
                    </div>
                </div>
                <div className='generateReport-btns'>
                    <button onClick={() => setGenerateReportToggle(false)}>Discard</button>
                    <button>Download</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default CreateCustomer
