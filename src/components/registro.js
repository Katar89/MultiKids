import React, { useState } from 'react';
import '../css/rstyles.css'; 
import logo from '../assets/logo.png'; 
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

function Registro() {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    Nombre: '',
    Apellido: '',
    Correo: '',
    Contraseña: ''
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/registro', formData);
      if (response.status === 201) {
        console.log('Registro creado exitosamente:', response.data); // Mensaje en consola
        navigate('/login'); // Redirige al login en caso de éxito
      }
    } catch (error) {
      setError('Hubo un error en el registro, intente nuevamente.');
      console.error('Error en el registro:', error); // Mensaje en consola para el error
    }
  };

  const handleClick2 = () => {
    navigate('/login'); 
  };

  return (
    <div className="form">
      <main className="formMain">
      <img src={logo} alt="Multikids logo" id="imagen" />
      <h1 id="titulo2" className='h1Login'>REGISTRO DOCENTE</h1>
        <form className="formRegistro" onSubmit={handleSubmit}>
       
          <hr />
          
          <label htmlFor="nombre" id="nombre-label">
            <p className='pRegistro'>Nombres:</p>
            <input 
              id="Nombre" 
              type="text" 
              required 
              className='inputRegistro' 
              value={formData.Nombre} 
              onChange={handleInputChange}
            />
          </label>
          <br />
          
          <label htmlFor="apellido" id="apellido-label">
            <p className='pRegistro'>Apellidos:</p>
            <input 
              id="Apellido" 
              type="text" 
              required 
              className='inputRegistro' 
              value={formData.Apellido} 
              onChange={handleInputChange}
            />
          </label>
          <br />
          
          <label htmlFor="email" id="correo-label">
            <p className='pRegistro'>Correo:</p>
            <input 
              id="Correo" 
              type="email" 
              required 
              className='inputRegistro' 
              value={formData.Correo} 
              onChange={handleInputChange}
            />
          </label>
          <br />
          
          <label htmlFor="contrasena" id="contrasena-label">
            <p className='pRegistro'>Contraseña:</p>
            <input 
              id="Contraseña" 
              type="password" 
              minLength="8" 
              maxLength="15" 
              required 
              className='inputRegistro' 
              value={formData.Contraseña} 
              onChange={handleInputChange}
            />
          </label>
          <br />
          
          {error && <p className="error">{error}</p>}

          <button id="registro" type="submit">Registrarse</button>
          <br />
          <button id="volver" type="button" onClick={handleClick2}>Acceder</button>
          <br />
        </form>
      </main>
    </div>
  );
}

export default Registro;
