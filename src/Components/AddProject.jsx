import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import uplimg from "../assets/images/imgupload.jpg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddProject() {
  const [fileStatus,setFileStatus] = useState(false)
  const [preview,setPreview] = useState("")
  const [show, setShow] = useState(false);
  const [projectData,setProjectData] = useState({
    title:"",languages:"",overview:"",github:"",website:"",projectImage:""
  })
  console.log(projectData);
  const handleAddProject = ()=>{
    const {title,languages,overview,github,website,projectImage} = projectData
    if(!title || !languages || !overview || !github || !website || !projectImage){
      toast.info("Please fill the form completely")
    }else{
      // api call - reqBody
      const reqBody = new FormData()
      reqBody.append("title",title)
      reqBody.append("languages",languages)
      reqBody.append("overview",overview )
      reqBody.append("github",github )
      reqBody.append("website",website)
      reqBody.append("projectImage",projectImage)
      // api call -reqHeader

      const reqHeader = {
        "Content-Type":"multipart/form-data"
      }
    }
  }
  useEffect(()=>{
    if(projectData.projectImage.type=="image/jpg" || projectData.projectImage.type=="image/jpeg" || projectData.projectImage.type=="image/png" || projectData.projectImage.type=="image/webp"){
      // console.log("generate image url");
      setPreview(URL.createObjectURL(projectData.projectImage))
      setFileStatus(false)
    }else{
      // console.log("Please Upload Following file extensions only");
      setPreview("")
      setFileStatus(true)
      setProjectData({...projectData,projectImage:""})
    }
  },[projectData.projectImage])
  const handleClose = () => {
    setShow(false)
    setProjectData({
      title:"",languages:"",overview:"",github:"",website:"",projectImage:""
    })
  setPreview("")
  };
  const handleShow = () => setShow(true)
  
  return (
    <>
      <button onClick={handleShow} className='btn btn-primary'><i className="fa-solid fa-plus"></i>Add Project</button>
      <Modal size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <div className="row ">
            <div className="col-lg-6">
              <label >
                <input type="file" style={{display:'none'}} onChange={e=>setProjectData({...projectData,projectImage:e.target.files[0]})} />
                <img style={{height:'310px'}} className='w-100' src={preview?preview:uplimg} alt="" />
              </label>
              {fileStatus&&<div className="text-danger mt-2">*Please Upload file with following extensions (png,jgg,jpeg,webp) only*</div>}
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <input type="text" placeholder='Project Title ' className='form-control' value={projectData.title} onChange={e=>setProjectData({...projectData,title:e.target.value})} />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Language Used ' className='form-control' value={projectData.languages} onChange={e=>setProjectData({...projectData,languages:e.target.value})} />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Project Github Link ' className='form-control' value={projectData.github} onChange={e=>setProjectData({...projectData,github:e.target.value})} />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Project Website Link' className='form-control' value={projectData.website} onChange={e=>setProjectData({...projectData,website:e.target.value})} />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Project Overview ' className='form-control' value={projectData.overview} onChange={e=>setProjectData({...projectData,overview:e.target.value})} />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddProject} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer autoClose={2000} theme="colored"/>
    </>
  )
}

export default AddProject
