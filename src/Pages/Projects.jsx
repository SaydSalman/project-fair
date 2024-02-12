
import { Col, Row } from "react-bootstrap"
import Header from "../Components/Header"
import ProjectCard from "../Components/ProjectCard"
import { useEffect, useState } from "react"
import { getAllProjectAPI, getUserProjectAPI } from "../Services/allAPI"
function Projects() {
  const [searchKey,setSearchKey] = useState("")
  const [allProjects,setAllProjects] = useState([])
 

  const getAllProjects =async ()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
      }
      const result = await getAllProjectAPI(searchKey,reqHeader)
      if(result.status==200){
        setAllProjects(result.data)
      }else{
        console.log(result);
      }
    }
    
  }
  useEffect(()=>{
    getAllProjects()
  },[searchKey])
  return (
    <>
      <Header/>
      <div style={{marginTop:'100px'}} className="project-page-design">
        <div className="d-flex justify-content-between m-5">
          <h1 style={{height:'50px'}}>All Projects</h1>
          <input onChange={e=>setSearchKey(e.target.value)} style={{width:'300px'}} className="rounded form-control" type="text" placeholder="Search Projects by Languages Used" />
        </div>
        <Row className="mt-5 container-fluid">
          {allProjects?.length>0? allProjects.map((project,index)=>(
            <Col key={index} sm={12} md={6} lg={4}>
            <ProjectCard project={project}/>
          </Col>
          )):
          <div>
            <h1 className="text-danger">not found</h1>
          </div>}
        </Row>
      </div>
    </>
  )
}

export default Projects
