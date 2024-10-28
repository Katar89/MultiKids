import React from 'react';
import './lstyles.css'; 
import logo from '../assets/logo.png'; 

function Login() {
  return (
    <div className="form">
    
      <main>
        <img src={logo} alt="Multikids logo" id="imagen" />
        <h1 id="titulo">INGRESAR</h1>
        
        <form id="survey-form">
          <hr />
          
          <label htmlFor="email" id="correo-label">
            <p>Correo:</p>
            <input id="email" type="email" required />
          </label>
          <br />
          
          <label htmlFor="contrasena" id="contrasena-label">
            <p>Password:</p>
            <input id="contrasena" type="password" minLength="10" maxLength="15" />
          </label>
          <br />
          
          <button id="acceder" type="submit">Acceder</button>
          <br />
          <button id="registrarse" type="button">Registrarse</button>
          <br />
          
          <a 
            href="https://m.media-amazon.com/images/M/MV5BY2FmZWMxNWMtNTVkZC00ZTcwLTgyMjAtZjJlNjZlYzM0MDA5XkEyXkFqcGc@._V1_QL75_UY281_CR4,0,190,281_.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Términos y Condiciones de Uso
          </a>
        </form>
      </main>
    </div>
  );
}

export default Login;
