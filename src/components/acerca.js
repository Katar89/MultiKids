import React, { useState, useEffect } from 'react';
// Importar estilos y componentes necesarios
import '../micro-components/SidebarMainButton.css';
import '../micro-components/SidebarCardContainer.css';
import '../micro-components/SidebarCard.css';
import '../css/acstyles.css';
import { SidebarMainButton } from '../micro-components/SidebarMainButton.jsx';
import { SidebarCardContainer } from '../micro-components/SidebarCardContainer.jsx';
import { SidebarCard } from '../micro-components/SidebarCard';
import logoEstudiante from '../assets/logoEstudiante.png';
import logoActividades from '../assets/logoActividades.png';
import logoAjustes from '../assets/logoAjustes.png';
import logoAyuda from '../assets/logoAyuda.png';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
function AcercaDe()
{
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <main className="ContenedorAcerca">
      <h1 className="titulo">
        SOBRE NOSOTROS
      </h1>
      <strong className="parrafo">
      BetPlay es un equipo apasionado por desarrollar soluciones tecnológicas que transformen la educación, haciendo que el aprendizaje sea más accesible, dinámico y adaptado a las necesidades del mundo actual. Creemos en el poder de la tecnología para enriquecer la experiencia educativa, fomentando el crecimiento de estudiantes y docentes por igual. A través de plataformas y aplicaciones innovadoras, trabajamos para que la educación sea más versátil, inclusiva y alineada con los desafíos del siglo XXI.
      </strong>
      <button className="botonConocer" onClick={handleBack}>Regresar</button>
    </main>
  )
}
  export default AcercaDe;