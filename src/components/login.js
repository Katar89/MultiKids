import React from 'react';
import '../css/lstyles.css'; 
import logo from '../assets/logo.png'; 
import { useNavigate } from 'react-router-dom'; 


function Login() {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate('/inicio'); 
  };
  return (
    <div className="form">
    
      <main>
        <img src={logo} alt="Multikids logo" id="imagen" />
        <h1 id="titulo" className='h1Login'>INGRESAR</h1>
        
        <form id="survey-form">
          <hr />
          
          <label htmlFor="email" id="correo-label">
            <p className='pLogin'>Correo:</p>
            <input id="email" type="email" required className='inputLogin'/>
          </label>
          <br />
          
          <label htmlFor="contrasena" id="contrasena-label">
            <p className='pLogin'>Password:</p>
            <input id="contrasena" type="password" minLength="10" maxLength="15" className='inputLogin'/>
          </label>
          <br />
          
          <button id="acceder" type="submit" onClick={handleClick}>Acceder</button>
          <br />
          <button id="registrarse" type="button">Registrarse</button>
          <br />
          
        </form>
      </main>
    </div>
  );
}

export default Login;
