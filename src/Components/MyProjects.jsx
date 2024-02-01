import React from 'react'
import AddProject from "../Components/AddProject"
import EditProject from "../Components/EditProject"
function MyProjects() {
  return (
    <div className='card shadow p-3'>
      <div className="d-flex justify-content-between">
        <h2 style={{height:'40px'}} className='text-light '>My Projects</h2>
        <div><AddProject/></div>
      </div>
      <div className="mt-4">
        <div className="border rounded justify-content-between d-flex align-items-center text-danger mb-3 p-2">
          <h5 style={{height:'25px'}} className='text-light'>Project Title</h5>
          <div className="d-flex icons align-items-center gap-1">
            <EditProject />
            <a target='_blank' className='btn' href="https://github.com/SaydSalman/MediaPlayer"><i style={{height:'34px'}} className="fa-brands fa-github fa-2x text-warning"></i></a>
            <button className='btn'><i style={{height:'34px'}} className="fa-solid fa-trash fa-2x text-danger"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProjects

