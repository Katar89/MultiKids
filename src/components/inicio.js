import React, { useState, useEffect } from 'react';
// Importar estilos y componentes necesarios
import '../micro-components/SidebarMainButton.css';
import '../micro-components/SidebarCardContainer.css';
import '../micro-components/SidebarCard.css';
import { SidebarMainButton } from '../micro-components/SidebarMainButton.jsx';
import { SidebarCardContainer } from '../micro-components/SidebarCardContainer.jsx';
import { SidebarCard } from '../micro-components/SidebarCard';
import logoEstudiante from '../assets/logoEstudiante.png';
import logoActividades from '../assets/logoActividades.png';
import logoAjustes from '../assets/logoAjustes.png';
import logoAyuda from '../assets/logoAyuda.png';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const Inicio = () => {
  const navigate = useNavigate();
  const [docente, setDocente] = useState(null); // Estado para almacenar información del profesor
  
  useEffect(() => {
    // Obtener datos del docente autenticado desde el almacenamiento local
    const storedDocente = JSON.parse(localStorage.getItem('docente'));
    if (storedDocente) {
      setDocente(storedDocente);
    } else {
      // Si no hay un docente autenticado, redirigir al inicio de sesión
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    console.log('El docente ha cerrado sesión'); // Mensaje en la consola del navegador
    localStorage.removeItem('docente');
    navigate('/login');
  };

  const handleClick = () => {
    navigate('/estudiantes'); 
  };
  const handleClick2 = () => {
    navigate('/actividades'); 
  };
  const handleClick3 = () => {
    navigate('/reportes');
  };
  const handleClick4 = () => {
    navigate('/ajustes'); 
  };

  return (
    <main className="Contenedor">
      <section className="Sidebar">
        <SidebarCardContainer />
        {/* Botón de cerrar sesión */}
        <button onClick={handleLogout} className="LogoutButton">Cerrar sesión</button>
      </section>
      <aside className="Menu">
        <SidebarMainButton onClick={handleClick} nombreBoton="ESTUDIANTES" imgBoton={logoEstudiante} />
        <SidebarMainButton onClick={handleClick2} nombreBoton="ACTIVIDADES" imgBoton={logoActividades} />
        <SidebarMainButton onClick={handleClick3} nombreBoton="REPORTES" imgBoton={logoAjustes} />
        <SidebarMainButton onClick={handleClick4} nombreBoton="AJUSTES" imgBoton={logoAyuda} />
      </aside>
    </main>
  );
};

export default Inicio;
