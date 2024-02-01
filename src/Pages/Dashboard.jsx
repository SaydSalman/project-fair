import { useEffect, useState } from "react"
import Header from "../Components/Header"
import MyProjects from "../Components/MyProjects"
import Profile from "../Components/Profile"


function Dashboard() {
  const [username,setUsername] = useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("username")){
      setUsername(sessionStorage.getItem("username"))
    }
  })
  return (
    <>
      <Header insideDashboard/>
      <div style={{marginTop:'60px'}} className="dashboard container">
        <h1 style={{height:'50px'}} className="fw-bolder">Welcome <span className="text-warning">{username?.split(" ")[0]}</span></h1>
        <div className="row mt-5">
          <div className="col-lg-8">
          <MyProjects/>
          </div>
          <div className="col-lg-4">
          <Profile/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
