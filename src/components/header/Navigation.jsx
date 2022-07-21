import React from 'react'
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

const Navigation = () => {
    
    const styleLogo ={
        width: '40px',
        heigth: '15px'
        
    }

    return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">
                <img src= 'https://savmedia.mo.cloudinary.net/saillogo1.png' alt ='S A I L' style={styleLogo}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#Home">Home</Nav.Link>
                        <Nav.Link href="#About-us">About Us</Nav.Link>
                        <NavDropdown title="Pilot Programmes" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#Sail-Tech-Talent">SAIL TECH TALENT</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#Business-101">Business 101 for Artisans and Creatives</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#Startup-Accelerator">Startup Accelerator</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#Teachers'-Fellowship">Teachers' Fellowship</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#Stem">STEM</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#Apply" style={{color:'#f28406'}}>APPLY NOW</Nav.Link>
                        <Nav.Link eventKey={2} href="#Tech news">
                            Tech News
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Container>
</Navbar>

    </div>
  )
}

export default Navigation