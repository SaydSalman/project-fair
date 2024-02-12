import React, { useContext, useEffect, useState } from 'react'
import AddProject from "../Components/AddProject"
import EditProject from "../Components/EditProject"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteProjectAPI, getUserProjectAPI } from '../Services/allAPI'
import { addProjectResponseContext, editProjectResponseContext } from '../ContextAPI/ContextShare'
function MyProjects() {
  const [userProjects,setUserProjects] = useState([])
  const {addProjectResponse,setAddProjectResponse} = useContext(addProjectResponseContext)
  const {editProjectResponse,setEditProjectResponse} = useContext(editProjectResponseContext)
  const getUserProjects =async ()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      const result = await getUserProjectAPI(reqHeader)
      if(result.status==200){
        setUserProjects(result.data)
      }else{
        console.log(result);
      }
    }
  }
  const handleDeleteProject = async(pid)=>{
    const token =sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      try{
        const result= await deleteProjectAPI(pid,reqHeader)
        if(result.status == 200){
          getUserProjects()
        }else{
          toast.warning(result.response.data)
        }
      }catch(err){
        console.log(err);
      }
    }
  }
  useEffect(()=>{
    getUserProjects()
  },[addProjectResponse,editProjectResponse])
  return (
    <div className='card shadow p-3'>
      <div className="d-flex justify-content-between">
        <h2 style={{height:'40px'}} className='text-light '>My Projects</h2>
        <div><AddProject/></div>
      </div>
      <div className="mt-4">
        {userProjects.length>0? userProjects.map((project,index)=>(
          <div key={index} className="border rounded justify-content-between d-flex align-items-center text-danger mb-3 p-2">
          <h5 style={{height:'25px'}} className='text-light'>{project?.title}</h5>
          <div className="d-flex icons align-items-center gap-1">
            <EditProject project={project} />
            <a target='_blank' className='btn' href={project?.github}><i style={{height:'34px'}} className="fa-brands fa-github fa-2x text-warning"></i></a>
            <button onClick={()=>handleDeleteProject(project?._id)} className='btn'><i style={{height:'34px'}} className="fa-solid fa-trash fa-2x text-danger"></i></button>
          </div>
        </div>
        )):<div className='text-danger fs-4 fw-bolder'>No Projects Found!!</div>
        }
      </div>
      <ToastContainer autoClose={2000} theme="colored"/>
    </div>
  )
}

export default MyProjects

