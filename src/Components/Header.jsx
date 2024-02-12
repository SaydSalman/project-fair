import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { tokenAuthenticationContext } from '../ContextAPI/TokenAuth';


function Header({insideDashboard}) {
  const {isAuthorized,setIsAuthorized} = useContext(tokenAuthenticationContext)
  const navigate = useNavigate()
  const handleLogout = ()=>{
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("username")
    setIsAuthorized(false)
    navigate("/")
  }
  return (
    <>
      <Navbar className="bg-info">
        <Container>
          <Navbar.Brand className='fs-4'>
           <Link style={{textDecoration:'none'}} to={'/'}>
             <i style={{height:'26px'}} className='fa-solid fa-paperclip me-2 '></i>
             <span>Project Fair</span>
           </Link>
          </Navbar.Brand>
          {
            insideDashboard && 
            <div className='ms-auto'>
              <button onClick={handleLogout} className='btn btn-light' ><i class="fa-solid fa-right-from-bracket me-2"></i>Logout</button>
            </div>
          }
        </Container>
      </Navbar>
    </>
  )
}

export default Header
