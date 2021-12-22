import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button,
} from 'reactstrap'
import '../App.css'
import logo from '../assets/images/Logo.png'
import { useContext } from 'react'
import { UserContext } from '../App'
import RenderMenu from './RenderMenu'



function NavbarMain() {

  const [isOpen, setIsOpen] = useState(false)
  const {state , dispatch} = useContext(UserContext);
    
    

 

  return (
    <div>
      <Navbar
        color="faded"
        dark
        expand="md"
        fixed={`top`}
        className="navDark"
      >
        <Container>
          <Link to="/">
            <NavbarBrand>
              <img
                src={logo}
                alt="website logo"
                style={{
                  width: '100px',
                  height: '50px',
                  marginRight: '10px',
                }}
              />
              Infinity Places
            </NavbarBrand>
          </Link>
          <NavbarToggler onClick={()=>setIsOpen(!isOpen)} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#packageBody">Package</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#servicesBody">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#contactBody">Contact</NavLink>
              </NavItem>
              <RenderMenu/>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarMain








