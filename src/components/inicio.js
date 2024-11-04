import React, { useState, useEffect } from 'react';
//import '../css/istyles.css';
import '../micro-components/SidebarMainButton.css'
import '../micro-components/SidebarCardContainer.css'
import '../micro-components/SidebarCard.css'
import { SidebarMainButton } from '../micro-components/SidebarMainButton.jsx'
import { SidebarCardContainer } from '../micro-components/SidebarCardContainer.jsx'
import { SidebarCard } from '../micro-components/SidebarCard'
import logoEstudiante from '../assets/logoEstudiante.png';
import logoActividades from '../assets/logoActividades.png';
import logoAjustes from '../assets/logoAjustes.png';
import logoAyuda from '../assets/logoAyuda.png';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const Inicio = () => {
  const navigate = useNavigate(); 
  const navigate2 = useNavigate();
  const navigate3 = useNavigate();
  const navigate4 = useNavigate();
  const handleClick = () => {
    navigate('/estudiantes'); 
  };
  const handleClick2 = () => {
    navigate2('/actividades'); 
  };
  const handleClick3 = () => {
    navigate3('/actividades'); //ARREGLAR
  };
  const handleClick4 = () => {
    navigate3('/actividades'); //ARREGLAR
  };
  

  return (
    <main className="Contenedor" >
            <section className="Sidebar">
                <SidebarCardContainer></SidebarCardContainer>
                <h2 className="Sidebar-Colaboradores">CLASES</h2>
                <SidebarCard userName="Clasinga" name="Clasonga"></SidebarCard>
                <h2 className="Sidebar-Colaboradores">COLABORADORES</h2>
                <SidebarCard userName="Tainy" name="Tainy Gonzalo"></SidebarCard>
                <SidebarCard userName="Katar" name="Juan David Cuero"></SidebarCard>
            </section>
            <aside className="Menu">
               <SidebarMainButton onClick={handleClick} nombreBoton="ESTUDIANTES" imgBoton={logoEstudiante}></SidebarMainButton>
               <SidebarMainButton onClick={handleClick2} nombreBoton="ACTIVIDADES" imgBoton={logoActividades}></SidebarMainButton>
               <SidebarMainButton nombreBoton="REPORTES" imgBoton={logoAjustes}></SidebarMainButton>
               <SidebarMainButton nombreBoton="AJUSTES" imgBoton={logoAyuda}></SidebarMainButton>
            </aside>
        </main>

    /*---------------- OLD----------------------*/ 
    
  );
};

export default Inicio;
