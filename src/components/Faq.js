import React, { useState } from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import IconText from './IconText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCreditCard,
    faWallet,
    faUserTie,
    faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import './Faq.css';

const Faq = () => {
    const options = [
        { icon: faCreditCard, text: 'Cartão de crédito e débito' },
        { icon: faWallet, text: 'Conta e abertura' },
        { icon: faShieldAlt, text: 'Token digital' },
        { icon: faUserTie, text: 'Produtos e serviços' },
    ];

    const [index, setIndex] = useState(0);

    return (
        <section className="faq py-3">
            <Container className="py-5">
                <Row className="d-flex align-items-center">
                    <Col className="d-lg-none mb-5" xs={12}>
                        <Row>
                            {options.map(({ icon }, key) => (
                                <Col
                                    className="d-flex justify-content-center"
                                    key={key}
                                >
                                    <FontAwesomeIcon
                                        icon={icon}
                                        size="2x"
                                        color="#FFF"
                                        onClick={() => setIndex(key)}
                                    />
                                </Col>
                            ))}
                            ;
                        </Row>
                    </Col>

                    <Col className="d-none d-lg-block">
                        {options.map(({ icon, text }, key) => (
                            <IconText
                                icon={icon}
                                size={3}
                                className="faq-clickable mb-3"
                                textClassName="icon-text"
                                color="#FFF"
                                onClick={() => setIndex(key)}
                                key={key}
                            >
                                {text}
                            </IconText>
                        ))}
                        ;
                    </Col>

                    <Col>
                        <Accordion defaultActiveKey="0" activeKey={`${index}`}>
                            <Accordion.Item className="faq__item" eventKey="0">
                                <Accordion.Header className="accordion-header">
                                    Lorem ipsum dolor sit amet
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore
                                    eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className="faq__item" eventKey="1">
                                <Accordion.Header className="accordion-header">
                                    Nulla porttitor eros ac ex tristique posuere
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore
                                    eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className="faq__item" eventKey="2">
                                <Accordion.Header className="accordion-header">
                                    Quisque fringilla tincidunt arcu
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore
                                    eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className="faq__item" eventKey="3">
                                <Accordion.Header className="accordion-header">
                                    Nam elementum lobortis purus a maximus tortor
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore
                                    eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Faq;
