import { Link, useNavigate } from "react-router-dom"
import img1 from "../assets/images/Naruto.jpg"
import ProjectCard from "../Components/ProjectCard"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getHomeProjectAPI } from "../Services/allAPI";

function Home() {
  const navigate = useNavigate()
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [allProjects,setAllProjects] = useState([])
// console.log(allProjects);
  const getHomeProject = async()=>{
    const result = await getHomeProjectAPI()
    if(result.status==200){
      setAllProjects(result.data)
    }else{
      toast("Error Occured while fetching projects")
    }
  }

  useEffect(()=>{
    getHomeProject()
    if(sessionStorage.getItem("token")){
      setIsLoggedIn(true);
    }else{
      setIsLoggedIn(false)
    }
  },[])
  const handleProjectPage = ()=>{
    if(sessionStorage.getItem("token")){
      navigate('/projects')
    }else{
      toast.warning("Please Login")
    }
    
  }
  return (
    <>
      {/*landing page*/}
      <div className="bg-info rounded" style={{width:'100%',height:'90vh'}}>
        
          <div style={{height:'100%'}} className="row d-flex align-items-center">
            <div  className="col-lg-5  ms-5 mt-5">
              
                <span style={{fontSize:'85px'}} className="text-white "><i style={{height:'90px'}} className="fa-solid fa-paperclip mt-3"></i>Project <span className="">Fair</span></span>
                <p className="text-white">One Stop Destination for all Software Development Projects.Where User can add and manage their Projects.As well as access all projects available in our website... what are you waiting for!!!.</p>
              {isLoggedIn?<Link to={"/dashboard"} className="btn btn-warning mt-3">Manage Your Projects <i className="fa-solid fa-arrow-right ms-2"></i></Link>:<Link to={"/login"} className="btn btn-warning mt-3">Starts to Explore <i className="fa-solid fa-arrow-right ms-2"></i></Link>}
            </div>
            <div className="col-lg-2"/>
            <div className="col-lg-4 d-flex justify-content-center align-items-center ">
              <div className="mt-5"><img className="img-fluid rounded-circle " src={img1} alt="" /></div>
            </div>
            <div className="col-lg-1"/>
          </div>
        
      </div>
      {/*all projects*/}
      <div className="projects mt-5">
    <h1 className="text-center mb-5 text-white" style={{height:'50px'}}>Explore Our Projects</h1>
    <marquee >
      <div className="d-flex justify-content-between">
        {allProjects.length>0?allProjects.map((project,index)=>(
          <div key={index} className="me-5">
          <ProjectCard project={project}/>
        </div>
        )):null
        }
      </div>
    </marquee>
    <div className="text-center">
      <button onClick={handleProjectPage} className="btn btn-link text-warning">View More Projects</button>
    </div>
      </div>
      <ToastContainer autoClose={2000} theme="colored"/>
    </>
  )
}

export default Home
