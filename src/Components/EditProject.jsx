import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import uplimg from "../assets/images/imgupload.jpg"
import { SERVER_URL } from '../Services/serverUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editProjectAPI } from '../Services/allAPI';
import { editProjectResponseContext } from '../ContextAPI/ContextShare';


function EditProject({ project }) {
  console.log(project);
  const [projectData, setProjectData] = useState({
    id: project._id, title: project.title, languages: project.languages, overview: project.overview, github: project.github, website: project.website, projectImage: ""
  })
  const {editProjectResponse,setEditProjectResponse} = useContext(editProjectResponseContext)
  const [preview,setPreview] = useState("")
  useEffect(()=>{
    if(projectData.projectImage){
      setPreview(URL.createObjectURL(projectData.projectImage))
    }else{
      setPreview("")
    }
  },[projectData.projectImage])
  const [show, setShow] = useState(false);
  const handleUpdate = async()=>{
    const {id,title,languages,overview,github,website,projectImage} = projectData
    if(!title || !languages || !overview || !github || !website ){
      toast.info("Please fill the form completely")
    }else{
       // api call - reqBody
       const reqBody = new FormData()
       reqBody.append("title",title)
       reqBody.append("languages",languages)
       reqBody.append("overview",overview )
       reqBody.append("github",github )
       reqBody.append("website",website)
      preview?reqBody.append("projectImage",projectImage):reqBody.append("projectImage",project.projectImage)
       
       const token = sessionStorage.getItem("token")
       console.log(token);
       if(token){       
          const reqHeader = {
            "Content-Type":preview?"multipart/form-data":"application/json",
            "Authorization":`Bearer ${token}`
          }
          // api cal
          try{
              const result = await editProjectAPI(id,reqBody,reqHeader)
              console.log(result);
              if(result.status ==200){
                // toast.warning(`Project "${result.data.title}" updated successfully..`)
                handleClose()
                setEditProjectResponse(result.data)
              }else{
                toast.danger(result.response.data)
              }
          }catch(err){
            console.log(err);
          }
        
       }
    }
    }

  const handleClose = () => {
    setShow(false)
    setProjectData({
      id: project._id, title: project.title, languages: project.languages, overview: project.overview, github: project.github, website: project.website, projectImage: ""
    })
    setPreview("")
  };
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
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <div className="row ">
            <div className="col-lg-6">
              <label >
                <input type="file" style={{ display: 'none' }} onChange={e=>setProjectData({...projectData,projectImage:e.target.files[0]})} />
                <img style={{ height: '310px' }} className='w-100' src={preview?preview:`${SERVER_URL}/uploads/${project.projectImage}`} alt="" />
              </label>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <input type="text" placeholder='Project Title ' className='form-control' onChange={e=>setProjectData({...projectData,title:e.target.value})} value={projectData.title} />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Language Used ' className='form-control' onChange={e=>setProjectData({...projectData,languages:e.target.value})} value={projectData.languages} />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Project Github Link ' className='form-control' onChange={e=>setProjectData({...projectData,github:e.target.value})} value={projectData.github} />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Project Website Link' className='form-control' onChange={e=>setProjectData({...projectData,website:e.target.value})} value={projectData.website} />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Project Overview ' className='form-control' onChange={e=>setProjectData({...projectData,overview:e.target.value})} value={projectData.overview} />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpdate} variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer autoClose={2000} theme="colored"/>
    </>
  )
}

export default EditProject
