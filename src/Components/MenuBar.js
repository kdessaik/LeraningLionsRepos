import React from 'react'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../style/images/logos/LL-Logo-340x80.png'
import '../style/css/MenuBar.css'
import iconNavbar from '../style/images/logos/IconNav1.png'
import logoMenuX from '../style/images/logos/Logox.png'
import { NavLink } from 'react-router-dom';





export default function MenuBar() {
  
const [idIconUpdate,setIdIconUpdate]=useState('navlink')



 const showNavbar=()=>{
  if(idIconUpdate=='navlink'){
    setIdIconUpdate('navlinkdislay')
  }
  else{setIdIconUpdate('navlink')} 
 }

 


  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className='navbar'>
        <Container>
          <Navbar.Brand href="#home" className='navbar-brand' >
            
            <NavLink className='navbar-brand' to='/'><img  src={logo} />  </NavLink></Navbar.Brand>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='Navbar-icon'  id="navbar">
              <div >  <img onClick={showNavbar} id='imageMenu'  src={iconNavbar}/>
                     
              </div>
            
              <Nav className="font-weight-bold me-auto"  id="navlink" >
            <Nav.Link href="#home" ><NavLink to='/about'> ABOUT</NavLink></Nav.Link>
            <Nav.Link href="#features">DONATE</Nav.Link>
            <Nav.Link href="#pricing">WORK WITH LIONS</Nav.Link>
            <Nav.Link href="#pricing">VOLUNTEER</Nav.Link>
            <Nav.Link href="#pricing">BECOME A LION</Nav.Link>
            <Nav.Link href="#pricing">CONTACT US</Nav.Link>
           



          </Nav>

            </Nav>

          <Nav className="font-weight-bold me-auto" id={idIconUpdate}>
            <Nav.Link href="#home" ><NavLink className="nav-link" to='/about'>ABOUT</NavLink> </Nav.Link>
            <Nav.Link href="#features"><NavLink to='/donate' className="nav-link" > DONATE</NavLink></Nav.Link>
            <Nav.Link href="#pricing">WORK WITH LIONS</Nav.Link>
            <Nav.Link href="#pricing">VOLUNTEER</Nav.Link>
            <Nav.Link href="#pricing">BECOME A LION</Nav.Link>
            <Nav.Link href="#pricing">CONTACT US</Nav.Link>
           



          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
