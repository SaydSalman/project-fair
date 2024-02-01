import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function Header({insideDashboard}) {
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
              <button className='btn btn-light' ><i class="fa-solid fa-right-from-bracket me-2"></i>Logout</button>
            </div>
          }
        </Container>
      </Navbar>
    </>
  )
}

export default Header
