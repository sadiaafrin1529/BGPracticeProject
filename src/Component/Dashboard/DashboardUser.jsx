import React, { useEffect, useState } from 'react';
import { authService } from '../Auth/AuthGuard';
import { Col, Container, Row, Table } from 'react-bootstrap';

const DashboardUser = () => {
  const [user, setUser] = useState(authService.getUser());

  console.log(user)
  /*
  useEffect(() => {
    // Fetch the user data from authService when the component mounts
    const userData = authService.user;
    console.log(userData)
    if (userData) {
      setUser(userData);
    }
  }, []);


  useEffect(()=>{
    fetch('')
  },[])
  */
  return (
    <Container>
      <Row>
        <Col className='mx-auto'>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                {/* <th>AllUser</th>
                <th>Todo</th> */}
                <th>Current user</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                {/* <td></td>
                <td></td> */}
                <td>{user ? user.email : ''}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardUser;
