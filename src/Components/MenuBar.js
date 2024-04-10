import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../style/images/logos/LL-Logo-340x80.png'
import '../style/css/MenuBar.css'

export default function MenuBar() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className='navbar'>
        <Container>
          <Navbar.Brand href="#home" className='navbar-brand' ><img src={logo}/></Navbar.Brand>
          <Nav className="font-weight-bold me-auto">
            <Nav.Link href="#home" >ABOUT</Nav.Link>
            <Nav.Link href="#features">DONATE</Nav.Link>
            <Nav.Link href="#pricing">WORK WITH LIONS</Nav.Link>
            <Nav.Link href="#pricing">VOLUNTEER</Nav.Link>
            <Nav.Link href="#pricing">BECOME A LION</Nav.Link>
            <Nav.Link href="#pricing">CONTACT US</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
