import React from "react";
import './Home.css'
import { Container, Row, Col } from 'react-bootstrap'
import whatsapp from '../../assets/whatsapp.svg'

function Home() {
  return (
    <div className="homepagebackground homepagebackground2" id="home">
      <div className="homepagebackground2">
        <Container>
          <Row>
            <Col md={7}>
              {/* <h2 className='headtext'>Hola <span className='wave'>👋 </span></h2> */}
              <div className="bgtitle">
              <h2 className="nametext"><span className="segurosvip">Seguros VIP </span> 2020 </h2>
              
              <h2 className="nametext2">Asumimos tus Riesgos y Aseguramos tu Tranquilidad.</h2>
              </div>
             
              <br />
              <br />

           </Col>

            <Col md={5}>
              <div className="imagedeveloper"></div>
            </Col>
          </Row>
        </Container>
        <a href="https://api.whatsapp.com/send?phone=58">
      <img src={whatsapp} className="btnFlotante" alt="whatsapp"/>
      </a>
        <button href="/#" text="Proyectos" className="btnFlotante2">Adquiere tu R.C.V. Online</button> 
      </div>
    </div>
  );
}

export default Home;
