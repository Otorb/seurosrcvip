import React, { useState } from "react";
import styles from "./Mision.module.css";

function Mision() {
    const [services] = useState([
        {
         
          title: "Misión",
          desc: "Satisfacer de forma legal, transparente, técnica y humana, las necesidades requeridas por los asegurados o tomadores, asumiendo sus riesgos, brindándoles tranquilidad, respuesta, prevención, solidaridad y confianza en la prestación del servicio integral.",
          active: false,
        },
        {
        
          title: "Visión",
     
          desc: "Desarrollarse como el Emprendimiento de Seguros líder del sector Asegurador Cooperativo Nacional, manteniendo una participación continúa con los Órganos de Participación Ciudadana, sector Público, Privado y Mixto en la Actividad Aseguradora. En permanentes acciones sociales y gremiales, con una activa interacción con la Comunidad.",
          active: true,
        },
       
      ]);
  return (
    <section className="services-experience">
    <div className={styles.container1}>
        {services.map((service, i) => (
          <div key={i} className={styles.cardContainer}>
            <div className={styles.SvgContainer}>{service.icon}</div>
            <div className={styles.titleCard}>{service.title}</div>
            <p>{service.desc}</p>
         
          
           
          </div>
        ))}
      </div>

  </section>
  )
}

export default Mision