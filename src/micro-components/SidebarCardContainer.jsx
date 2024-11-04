import React, { useState, useEffect } from 'react';
import { SidebarCard } from '../micro-components/SidebarCard';
export function SidebarCardContainer({userName, name, isFollowing}){
const imageSrc ="https://unavatar.io/x/${userName}"  
const [docente, setDocente] = useState(null);
useEffect(() => {
    // Obtener datos del docente autenticado desde el almacenamiento local
    const storedDocente = JSON.parse(localStorage.getItem('docente'));
    if (storedDocente) {
      setDocente(storedDocente);
    }
  }, []);
return(
<header className="tw-followCardContainer">
    <img className="tw-followCardContainer-avatar"
    alt="avatar"src={imageSrc}>

    </img>
<div className="tw-followCardContainer-info">
        {docente && (
          <div className="Sidebar-Profesor">
            <h2 className="tw-followCardContainer-name">{docente ? docente.Nombre : 'Nombre no disponible'} {docente ? docente.Apellido : 'Apellido no disponible'}</h2>
            <h3 className="tw-followCardContainer-correo">{docente ? docente.Correo : 'Correo no disponible'}</h3>
          </div>
        )}  
</div>
</header>
)
}