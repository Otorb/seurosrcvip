import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section id="contact">
  <div class="contact-box">
    <div class="contact-links">
      <h2 className='ticlecontact'>CONTACTO</h2>
      <div class="links">
        
        <div class="link">
        <p style={{color: "white"}}>Correo: segurosvip2020@gmail.com</p>
        <br/>
        <p style={{color: "white"}}>Teléfono: +58 424-2817056</p>
        <br/>
        
        </div>
        
      </div>
    </div>
    <div class="contact-form-wrapper">
      <form>
        <div class="form-item">
          <input type="text" name="sender" required/>
          <label>Nombre:</label>
        </div>
        <div class="form-item">
          <input type="text" name="email" required />
          <label>Correo:</label>
        </div>
        <div class="form-item">
          <textarea class="" name="message" required></textarea>
          <label>Mensaje:</label>
        </div>
        <button class="submit-btn">Enviar</button>  
      </form>
    </div>
  </div>
</section>
  )
}

export default Contact