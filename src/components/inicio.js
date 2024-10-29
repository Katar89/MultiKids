import React from 'react';
import './istyles.css';
import logoEstudiante from '../assets/logoEstudiante.png';
import logoActividades from '../assets/logoActividades.png';
import logoAjustes from '../assets/logoAjustes.png';
import logoAyuda from '../assets/logoAyuda.png';


const Inicio = () => {
  return (
    
    <div>
      <nav className="menu" tabIndex="0">
        <div className="smartphone-menu-trigger"></div>
        <header className="avatar">
          <img
            src={logoEstudiante}
            alt="Avatar"
          />
          <h2>Docente Yaneth Perez</h2>
          <h3>correo@ejemplo.com</h3>
        </header>
        <ul>
          <li id="ClasesTag" tabIndex="0" className="icon-clases">
            <h2>Clases</h2>
          </li>
          <li tabIndex="0" className="icon-clase">
            <span>Fisica</span>
          </li>
          <li tabIndex="0" className="icon-clase">
            <span>Fisica 2</span>
          </li>
          <li id="ColaboradoresTag" tabIndex="0" className="icon-colaboradores">
            <h2>Colaboradores</h2>
          </li>
          <li tabIndex="0" className="icon-colaborador">
            <span>Colaborador 1</span>
          </li>
          <li tabIndex="0" className="icon-colaborador">
            <span>Colaborador 2</span>
          </li>
          
        </ul>
      </nav>
    
      <main>
        <div className="superContenedor">
          <div className="Estudiantes">
          <img id="logoEstudiantes" src={logoEstudiante} alt="Estudiantes Logo" />
            Estudiantes 
          </div>
        
        
          <div className="Actividades">
          <img id="logoActividades" src={logoActividades} alt="Actividades Logo" />
                 
          </div>
          <p className='texto'>Actividades</p>
          <div className="Ajustes">
          <img id="logoAjustes" src={logoAjustes} alt="Ajustes Logo" />
            Ajustes
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