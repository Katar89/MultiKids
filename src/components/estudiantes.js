import React, { useState, useEffect } from 'react';
import '../css/estyles.css';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

function Estudiantes() {
  const navigate = useNavigate();

  // Estado para la búsqueda y lista de estudiantes
  const [searchQuery, setSearchQuery] = useState('');
  const [students, setStudents] = useState([]);
  const [docente, setDocente] = useState(null); // Estado para almacenar información del profesor
  
  useEffect(() => {
    const storedDocente = JSON.parse(localStorage.getItem('docente'));
    if (storedDocente) {
      setDocente(storedDocente);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/estudiantes');
        setStudents(response.data);
      } catch (error) {
        console.error('Error al obtener estudiantes:', error);
      }
    };

    fetchStudents();
  }, []);

  const [formData, setFormData] = useState({
    Nombre: '',
    Genero: 'niño', // Valor por defecto para el campo de selección
    Codigo: ''
  });
  const [error, setError] = useState(null);

  const filteredStudents = students.filter(student => {
    const nameMatch = student.Nombre.toLowerCase().includes(searchQuery.toLowerCase());
    const codeMatch = student.Codigo.toLowerCase().includes(searchQuery.toLowerCase());
    const genderMatch = student.Genero.toLowerCase().includes(searchQuery.toLowerCase());
    return nameMatch || codeMatch || genderMatch;
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/estudiantes', formData);
      if (response.status === 201) {
        setStudents([...students, response.data]);
        setFormData({ Nombre: '', Genero: 'niño', Codigo: ''});
        setError(null);
      }
    } catch (error) {
      setError('Hubo un error en el registro, intente nuevamente.');
      console.error('Error en el registro:', error);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className='origen'>
      <div className='body'>
        <div className="container">
          <input
            type="text"
            className="search-bar"
            placeholder="Busqueda"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <h1 className='h1Estudiante'>Estudiantes</h1>
          <div className="students-background"></div>
          <div className="students-list">
            {filteredStudents.map((student, index) => (
              <StudentCard key={index} name={student.Nombre} gender={student.Genero} code={student.Codigo} />
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <input
                id="Nombre" 
                type="text" 
                required 
                className='crearGenero' 
                placeholder='Nombre'
                value={formData.Nombre} 
                onChange={(e) => setFormData({ ...formData, Nombre: e.target.value })}
            />
            <select
                id="Genero"
                required
                className='crearGenero'
                value={formData.Genero}
                onChange={(e) => setFormData({ ...formData, Genero: e.target.value })}
            >
                <option value="niño">Niño</option>
                <option value="niña">Niña</option>
            </select>
            <input
                id="Codigo" 
                type="number" 
                required 
                className='crearGenero' 
                placeholder='Codigo'
                value={formData.Codigo} 
                onChange={(e) => setFormData({ ...formData, Codigo: e.target.value })}
            />
            {error && <p className="error">{error}</p>}
            <button className="view-all-button" type="submit">Crear Estudiante</button>
          </form>
          <center><button className="back-button" onClick={handleBack}>
            Regresar
          </button></center>
        </div>
      </div>
    </div>
  );
}

function StudentCard({ name, gender, code }) {
  return (
    <div className={`student-card ${gender}`}>
      <div className="avatar"></div>
      <span>{name} | Género: {gender} | Código: {code} </span>
    </div>
  );
}

export default Estudiantes;
