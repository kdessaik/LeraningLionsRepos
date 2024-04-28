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
   const imageIcon= document.getElementById('imageMenu')
   imageIcon.src=`${logoMenuX}`
  

  }
  else{
    setIdIconUpdate('navlink')
    const imageIcon= document.getElementById('imageMenu')
   imageIcon.src=`${iconNavbar}`
    } 
 }

 


  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className='navbar'>
        <Container>
         
            
            <NavLink className='navbar-brand' to='/'><img  src={logo} />  </NavLink>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='Navbar-icon'  id="navbar">
              <div >  <img onClick={showNavbar} id="imageMenu"
              src={iconNavbar}/>
                     
              </div>
            
             
            </Nav>

          <Nav className="font-weight-bold me-auto" id={idIconUpdate}>
            <NavLink className="nav-link" to='/about'>ABOUT</NavLink> 
            <NavLink to='/donate' className="nav-link" > DONATE</NavLink>
            <NavLink className="nav-link"  to='/Work-with-Us'>WORK WITH LIONS</NavLink>
            <NavLink className="nav-link"  to='/Volunteer'>VOLUNTEER</NavLink>
            <NavLink className="nav-link"  to='/Become-a-lion'>BECOME A LION</NavLink>
            <NavLink className="nav-link"  to='/Contact'>CONTACT US</NavLink>
           



          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
