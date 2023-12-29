import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'; 
import { BsCart4 } from "react-icons/bs";
 import { Link } from 'react-router-dom';


function Header({ cartCounter }) {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
       <Container>
         <Navbar.Brand href="#home" className="navbar-brand">
           <img width={80} src='https://qne.com.pk/cdn/shop/files/logoJ_daf662c5-f0b9-4c84-9e2f-361e9db18911_65x@2x.png?v=1668771053'/>
         GROCERY STORE
         </Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">
             <Nav.Link href="#home" className="nav-link">
Home             </Nav.Link>
             <Nav.Link href="#link" className="nav-link">
    Categories
             </Nav.Link>
          

             <NavDropdown title="products" id="basic-nav-dropdown">
               <NavDropdown.Item href="#action/3.1" className="nav-dropdown-item">
                 Action
               </NavDropdown.Item>
               <NavDropdown.Item href="#action/3.2" className="nav-dropdown-item">
                 Another action
               </NavDropdown.Item>
               <NavDropdown.Item href="#action/3.3" className="nav-dropdown-item">
                 Something
               </NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item href="#action/3.4" className="nav-dropdown-item">
                 Separated link
               </NavDropdown.Item>
             </NavDropdown>
             <Nav.Link href="#admin" className='nav-link'>
              <Link to='/admin' className='nav-link'>Admin</Link>
              </Nav.Link>
           </Nav>
         </Navbar.Collapse>
       </Container>

       <button class="btn cart-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
          cart ({cartCounter})
          <BsCart4 className='cart'/>
         </button>

    </Navbar>
  );
}

export default Header;

