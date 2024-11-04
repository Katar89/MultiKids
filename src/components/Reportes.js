import React, { useState } from 'react';
import '../css/reportes.css';
import { useNavigate } from 'react-router-dom';

function Reportes() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');


  const [reports, setReports] = useState([
    { id: 1, title: "Reporte 1", description: "Descripción del reporte 1" },
    
    // añadir reportes y tal
  ]);

  // barra de busqueda nuevamente
  const filteredReports = reports.filter(report =>
    report.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBack = () => {
    navigate(-1); // Botones de regreso (la cague)
  };

  return (
    <div className='reportes-origen'>
      <div className='reportes-body'>
        <div className="reportes-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Buscar reporte..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <h1 className='h1Reporte'>Reportes</h1>
          <div className="reports-list">
            {filteredReports.map((report) => (
              <div key={report.id} className="report-square">
                <h2>{report.title}</h2>
                <p>{report.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reportes;
