import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Footer() {
    const [date,setDate] = useState(0);

    const getYear = ()=>{
        setDate(new Date().getFullYear())
    }
    useEffect(()=>{
        getYear();
    },[])
    

  return (
    <div style={{width:'100%',height:'340px'}} className=' mt-5 bg-info'>
        <div className="container   ">
            <div className="row m-2 ">
                <div className="col-lg-3">
                    <div className='d-flex flex-column justify-content-center align-items-center fw-bolder'>
                    <h4 className='mt-5' style={{height:'30px',color:'white'}}>Project Fair</h4>
                    <span className='text-white'>Designed and built with all the love in the world by  Luminar team with the help of our contributors</span>
                    <span className='mt-1 text-white'>Code Licensed Luminar,done CC BY 3.0</span>
                    <span className='mt-1 mb-2 text-white'>Currently v1.0.0</span>
                    </div>
                </div>
                <div className="col-lg-3 ">
                    <h4 className='ms-3 text-center text-white mt-5' style={{height:'30px'}}>Links</h4>
                    <ul className='list-unstyled'>
                        <Link style={{textDecoration:'none'}} to={'/'}><li  className='text-center '>Home</li></Link>
                        <Link style={{textDecoration:'none'}} to={'/login'}><li className='text-center'>Login</li></Link>
                        <Link style={{textDecoration:'none'}} to={'/register'}><li className='text-center'>Register</li></Link>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <h4 className='ms-3 text-center text-white mt-5 ' style={{height:'30px'}}>Guides</h4>
                    <ul className='list-unstyled'>
                        <Link style={{textDecoration:'none'}} to={'/https://react.dev/'}><li className='text-center'>React</li></Link>
                        <Link style={{textDecoration:'none'}} to={'/https://react-bootstrap.netlify.app/'}><li className='text-center'>React Bootstrap</li></Link>
                        <Link style={{textDecoration:'none'}} to={'/https://www.w3schools.com/react/react_router.asp'}><li className='text-center'>Routing</li></Link>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <h4 className='text-white mt-5' style={{height:'30px'}}>Contact Us</h4>
                    <div className='d-flex'>
                        <input placeholder='Enter Your Email' className='form-control' type="text" />
                        <button className='btn btn-warning ms-2'><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className='d-flex justify-content-between mt-2'>
                    <i style={{height:'50px',color:'black'}} className="fa-brands fa-linkedin fa-2x "></i>
                    <i style={{color:'black'}} className="fa-brands fa-github fa-2x "></i>
                    <i  style={{color:'black'}}  className="fa-brands fa-youtube fa-2x  "></i>
                    <i  style={{color:'black'}} className="fa-brands fa-twitter fa-2x "></i>
                    <i  style={{color:'black'}} className="fa-brands fa-facebook fa-2x "></i>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className='text-center '>
                    <span className='text-white'>Copyright @ {date} Project Fair .Built with React</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
