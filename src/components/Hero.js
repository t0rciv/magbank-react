import React from "react";
import { Row, Col, Button, Image } from 'react-bootstrap';
import logo from "../assets/logo__magic-pay--mobile.png";
import logoDesktop from "../assets/logo__magic-pay.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Hero.css";


const Hero = () => (
    <div className="jumbotron text-center text-light hero">
        <Row className="my-lg-5">
            <Col lg className="text-lg-end my-lg-5">
                <Image className="d-lg-none" src={logo} />
                <Image className="d-none d-lg-inline-block" src={logoDesktop} />
            </Col>    
            <Col lg className="text-lg-start my-lg-5">
                <p>Pague suas contas pelo nosso APP.</p>
                <Button variant="outline-light">Abra sua conta</Button>
            </Col>
        </Row>
    </div>
);

export default Hero;