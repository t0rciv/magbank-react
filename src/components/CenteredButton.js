import React from "react";
import { Container, Row, Button } from 'react-bootstrap';

const CenteredButton = ({ children}) => (
    <Container>
        <Row xs={2} lg={5} className='d-flex justify-content-center'>
            <Button className='my-4 px-4 py-3' variant='success' size='lg'>
                {children}
            </Button>
        </Row>
    </Container>
);

export default CenteredButton;


