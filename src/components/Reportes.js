import React, { useState, useEffect } from 'react';
import '../css/reportes.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Reportes() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [reports, setReports] = useState([]);
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

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/reportes');
        setReports(response.data);
      } catch (error) {
        console.error('Error al obtener reportes:', error);
      }
    };

    fetchReports();
  }, []);

  const filteredReports = reports.filter(report =>
    report.estudianteCodigo && report.estudianteCodigo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className='reportes-origen'>
      <div className='reportes-body'>
        <div className="reportes-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Buscar reporte por código de estudiante..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <h1 className='h1Reporte'>Reportes</h1>
          <button className="back-button" onClick={handleBack}>
            Regresar
          </button>
          <div className="reports-list">
            {filteredReports.map((report) => (
              <div key={report._id} className="report-square">
                <h2>Código de Estudiante: {report.estudianteCodigo}</h2>
                
                {/* Renderizar actividadResultados */}
                <h3>Resultados de Actividades:</h3>
                <ul>
                  {Object.entries(report.actividadResultados || {}).map(([key, value]) => (
                     <li key={key}>
                     {key}: {value} <span>%</span> {/* Aquí se puede reemplazar con el valor real */}
                   </li>
                  ))}
                </ul>
                <h3>Recomendaciones:</h3>
                <ul>
                  {Object.entries(report.recomendaciones || {}).map(([key, value]) => (
                     <li key={key}>
                     {key}: {value}{/* Aquí se puede reemplazar con el valor real */}
                   </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reportes;
