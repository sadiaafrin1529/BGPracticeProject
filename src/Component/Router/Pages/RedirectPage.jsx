import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const RedirectPage = () => {
    return (
        <Container>
            <Row>
                <Col md={7} className='border border-1'>
                   <div>
                    <p>You must login to view page at <Link to="/login">Login</Link></p>
                   </div>
                </Col>
            </Row>

        </Container>
    );
};

export default RedirectPage;