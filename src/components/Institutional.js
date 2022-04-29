import React from 'react';
import IconText from './IconText.js';
import { Container, Col, Row, Button } from 'react-bootstrap';
import './Institutional.css';
import { faMobileAlt, faMobile, faGlobe, faShieldAlt } from "@fortawesome/free-solid-svg-icons";


const Institutional = () => (
    <section className='institutional text-light my-4 py-5'>
        <Container>
            <Row>
                <Col xs={12} lg={5} />
                <Col xs={12} lg={7}>
                    <h2 className='institutional-title mb-4'>Já nascemos digital</h2>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                    <div className='px-2'>
                        <IconText icon={faMobileAlt} color='#fff' className='mb-2'>
                            Sem fila e sem burocracia
                        </IconText>

                        <IconText icon={faMobile} color='#fff' className='mb-2'>
                            Simples e prático
                        </IconText>

                        <IconText icon={faGlobe} color='#fff' className='mb-2'>
                            Abertura de conta 100% online
                        </IconText>

                        <IconText icon={faShieldAlt} color='#fff' className='mb-2'>
                            Transações mais seguras
                        </IconText>
                    </div>
                    <Button variant='outline-light' className='mt-3'>
                        Abra sua conta
                    </Button>
                </Col>
            </Row>
        </Container>
    </section>    
);

export default Institutional;