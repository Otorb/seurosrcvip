import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './About.css'
import Mision from './Mision';

function About() {
  return (
    <div className="aboutpagebackground" id="about">
         <h3 className="aboutmetext">
           Nosotros 
          </h3>
    <Container>
      <Row className="textbackground">
        <Col md={7}>
         
          <br />
          {/* <h2 className="aboutmetext" style={{ textAlgin: "center" }}>
            ¡Por la gracia de Dios!{" "}
          </h2> */}

          <p className="aboutdetails" style={{ textAlign: "justify" }}>
          Seguros VIP 2020 es un Emprendimiento Venezolano de Responsabilidad Limitada, 
          con visión Corporativa y Humana, especializados en Seguros para Vehículos, 
          en la actualidad específicamente Seguros de Responsabilidad Civil Vehicular (RCV) 
          el cuál es de obligatorio cumplimiento para circular vehículos en todo el
           territorio nacional según lo establecido en el Articulo 58 de la Ley de 
           Transporte Terrestre «Todo vehículo a motor debe estar amparado por una 
           póliza de seguro de responsabilidad civil, para responder suficientemente 
           por los daños que ocasione al Estado o a los y las particulares.»
            <br /> <br />
           
          </p>

          <Mision />
        </Col>
        <Col md={5}>
          <div className="webimage"></div>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default About