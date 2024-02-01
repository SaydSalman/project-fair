import React, { useState } from 'react'
import { Card,Col,Modal, Row } from 'react-bootstrap'
import MediaPlayer from "../assets/images/MediaPlayer.png"

function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{width:'28rem'}} onClick={handleShow} className='shadow btn '>
      <Card.Img width={'100%'} variant="top" src={MediaPlayer} />
      <Card.Body>
        <Card.Title style={{height:'30px'}}>MediaPlayer App</Card.Title>
        
      </Card.Body>
    </Card>
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <img className="img-fluid" style={{height:'250px'}} src={MediaPlayer} alt="" />
            </Col>
            <Col md={6}>
              <h2 style={{height:'50px'}} className='fw-bolder text-white   '>Project Title</h2>
              <p>Project Overview: <span className='fw-bolder' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusamus tenetur reprehenderit est quos animi, soluta praesentium perspiciatis itaque sint neque cumque autem id culpa! Alias aut molestias harum iste.</span></p>
              <p>Language Used: <span>HTML,CSS,JS,ReactJs</span></p>
            </Col>
          </Row>
          <div className="mt-3">
            <a href="https://github.com/SaydSalman/MediaPlayer" target='_blank' className='btn me-3'><i style={{height:'35px'}} className='fa-brands fa-github fa-2x'></i></a>
            <a href="" target='_blank' className='btn me-3'><i style={{height:'35px'}} className='fa-solid fa-link fa-2x'></i></a>
          </div> 
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default ProjectCard
