import React from 'react'
import {Navbar ,Nav ,Container ,Badge} from "react-bootstrap"
import { IoCart } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbarr = ({cartCount , favoriteCount}) => {
 


  return (
    <>
     <Navbar sticky="top" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>RecipeHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
          
          <Nav.Link as={Link} to="/receipes">Recipes</Nav.Link>
            <Nav.Link as={Link} to="/cart"><IoCart /><Badge bg="secondary">{cartCount}</Badge> </Nav.Link>
            <Nav.Link as={Link} to="/favorite"><FaHeart /> <Badge bg="secondary">{favoriteCount}</Badge></Nav.Link>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Navbarr