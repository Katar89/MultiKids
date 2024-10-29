import React from 'react';
import './estyles.css';
function Estudiantes() {
  return (
    <div className='origen'>
        <div className='body'>
            <div className="container">
            <input type="text" className="search-bar" placeholder="Busqueda" />
            <h1>Estudiantes</h1>
            <div className="students-background"></div>
            <div className="students-list">
                <StudentCard name="Castro Salinas Miguel Angel" gender="boy" />
                <StudentCard name="Delgado Vargas Paula Andrea" gender="girl" />
                <StudentCard name="Gomez Fernandez Ana Maria" gender="girl" />
                <StudentCard name="Hernandez Garcia Jose" gender="boy" />
                <StudentCard name="Ortiz Mendoza Laura Isabel" gender="girl" />
                <StudentCard name="Perez Ortiz Juan Carlos" gender="boy" />
                <StudentCard name="Torres Gutierrez Maria Jose" gender="girl" />
            </div>
            <button className="view-all-button">Ver todos</button>
            </div>
        </div>
    </div>
  );
}

function StudentCard({ name, gender }) {
  return (
    <div className={`student-card ${gender}`}>
      <div className="avatar"></div>
      <span>{name}</span>
    </div>
  );
}

const styles = {
    body: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#333',
      fontFamily: '"Fredoka", sans-serif',
    },
};

export default Estudiantes;
