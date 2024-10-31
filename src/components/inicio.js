import React, { useState, useEffect } from 'react';
import '../css/istyles.css';
import logoEstudiante from '../assets/logoEstudiante.png';
import logoActividades from '../assets/logoActividades.png';
import logoAjustes from '../assets/logoAjustes.png';
import logoAyuda from '../assets/logoAyuda.png';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const Inicio = () => {
  const navigate = useNavigate(); 
  const navigate2 = useNavigate();
  const handleClick = () => {
    navigate('/estudiantes'); 
  };
  const handleClick2 = () => {
    navigate2('/actividades'); 
  };
  return (
    
    <div className='divInicio'>
          <div className="app-container">
      {/* Sección del perfil del docente */}
      <div className="profile">
        <div className="profile-image"></div>
        <h2 className="profile-title">Docente</h2>
            <>
              <h3 className="profile-name">prueba</h3>
              <p className="profile-email">prueba</p>
            </>
      </div>

      {/* Sección de Clases */}
      <div className="classes-section">
        <h4 className="section-title">
          Clases <span className="view-all">Ver Todo</span>
        </h4>
        <div className="class-item">Transicion</div>
      </div>

      {/* Sección de Colaboradores */}
      <div className="collaborators-section">
        <h4 className="section-title">
          Colaboradores <span className="view-all">Ver Todo</span>
        </h4>
        <div className="collaborator-item">
          <div className="collaborator-image"></div>
          <span>Maria Janeth</span>
        </div>
        <div className="collaborator-item">
          <div className="collaborator-image"></div>
          <span>Ana</span>
        </div>
      </div>
    </div>
    
      <main className='mainInicio'>
        <div className="superContenedor">
          <div className="Estudiantes">
          <img id="logoEstudiantes" src={logoEstudiante} alt="Estudiantes Logo" onClick={handleClick}/>
            Estudiantes 
          </div>
        
        
          <div className="Actividades">
          <img id="logoActividades" src={logoActividades} alt="Actividades Logo" onClick={handleClick2}/>
                 
          </div>
          <p className='texto'>Actividades</p>
          <div className="Ajustes">
          <img id="logoAjustes" src={logoAjustes} alt="Ajustes Logo" />
            Reportes
          </div>

          <div className="Ayuda">
          <img id="logoAyuda" src={logoAyuda} alt="Ayuda Logo" />
            Ayuda
          </div>
        </div>
      </main>
      
      
     
      
      </div>
    
  );
};

export default Inicio;
