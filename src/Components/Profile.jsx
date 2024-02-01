import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'
import upload from '../assets/images/upload.png'

function Profile() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="d-flex border border-success rounded p-2 justify-content-between">
        <h2 className='text-light'>Profile</h2>
        <button onClick={() => setOpen(!open)} className='btn btn-outline-warning'><i className="fa-solid fa-chevron-down"></i></button>
      </div>
      <Collapse in={open}>
        <div className='row shadow p-5 justify-content-center mt-3' id="example-collapse-text">
        <label className='text-center' >
        
          <input style={{display:'none'}} type="file" />
          <img className='rounded-circle' style={{width:'200px',height:'200px'}}  src={upload} alt="uploaded image" />
        </label>
        <div className='mt-3'><input placeholder='Enter Your Github URL' className='form-control' type="text" /></div>
        <div className='mt-3'><input placeholder='Enter Your Linkedin URL' className='form-control' type="text" /></div>
        <div className='d-grid mt-3'>
          <button className='btn btn-warning'>Update</button>
        </div>
        </div>
      </Collapse>
    </>
  )
}

export default Profile
