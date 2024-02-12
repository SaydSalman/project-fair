import React, { useState } from 'react'
import { Card,Col,Modal, Row } from 'react-bootstrap'

import { SERVER_URL } from '../Services/serverUrl';


function ProjectCard({project}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {project&&<Card style={{width:'28rem'}} onClick={handleShow} className='shadow btn '>
      <Card.Img width={'100%'} variant="top" src={`${SERVER_URL}/uploads/${project?.projectImage}`} />
      <Card.Body>
        <Card.Title style={{height:'30px'}}>{project?.title}</Card.Title>
        
      </Card.Body>
    </Card>}
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>All Projects</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <img className="img-fluid" style={{height:'250px'}} src={`${SERVER_URL}/uploads/${project?.projectImage}`} alt="" />
            </Col>
            <Col md={6}>
              <h2 style={{height:'50px'}} className='fw-bolder text-white'>{project?.title}</h2>
              <p>Project Overview: <span className='fw-bolder' style={{textAlign:'justify'}}>{project?.overview}</span></p>
              <p>Language Used: <span>{project?.languages}</span></p>
            </Col>
          </Row>
          <div className="mt-3">
            <a href={project?.github} target='_blank' className='btn me-3'><i style={{height:'35px'}} className='fa-brands fa-github fa-2x'></i></a>
            <a href={project?.website} target='_blank' className='btn me-3'><i style={{height:'35px'}} className='fa-solid fa-link fa-2x'></i></a>
          </div> 
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default ProjectCard
