import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import uplimg from "../assets/images/imgupload.jpg"

function EditProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button onClick={handleShow} className='btn btn-primary'><i className="fa-solid fa-edit"></i>Edit Project</button>
      <Modal size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <div className="row ">
            <div className="col-lg-6">
              <label >
                <input type="file" style={{display:'none'}} />
                <img style={{height:'310px'}} className='w-100' src={uplimg} alt="" />
              </label>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <input type="text" placeholder='Project Title ' className='form-control' />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Language Used ' className='form-control' />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Project Github Link ' className='form-control' />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Project Website Link' className='form-control' />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Project Overview ' className='form-control' />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Edit</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditProject
