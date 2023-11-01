import React from 'react';

import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
const NavBar = () => {
 const navigate = useNavigate()
  const handleLogOut = () => {

  alert('logout')
  navigate('/login')
  };
    return (
        <div>
<Container fluid className='bg-light ' style={{ boxShadow:" 10px 5px 5px Thistle"}}>
      <Row>
          <Col>
          <Navbar collapseOnSelect expand="lg"  variant="dark">
            <Container>
              <Navbar.Brand href="#home" >
                <div className='fs-2 fw-bold' style={{color:"brown" , fontFamily:"cursive"}}>
                BGProject
                </div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor:"gray"}} />
              <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="me-auto">
                
                  
                </Nav>
                <Nav >
                  <ul style={{display:"flex",justifyContent:"space-around",alignItems:'center',gap:"20px"}}>
                    <li style={{listStyle:"none"}}><Link style={{textDecoration:"none"}} to='/dashboard'>Dashboard</Link></li>
                    <li style={{listStyle:"none"}}><Link style={{textDecoration:"none"}} to='/about'>About</Link></li>
                  </ul>
                  
                  
                {/* <button onClick={handleLogOut} class="w3-button w3-padding-small">LogOut</button> */}

                  
                  
                  {/* style={{color:'green',textDecoration:'none',fontWeight:'600'}} */}
                </Nav>
              </Navbar.Collapse>
             </Container>
            </Navbar>
          </Col>
      </Row>
  </Container>
        </div>
    );
};

export default NavBar;