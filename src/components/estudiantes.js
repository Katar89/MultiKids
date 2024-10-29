import React, { useState } from 'react';
import './estyles.css';

function Estudiantes() {
  // State to hold search query and list of students
  const [searchQuery, setSearchQuery] = useState('');
  const [students, setStudents] = useState([
    { name: "Castro Salinas Miguel Angel", gender: "boy", code: generateCode() },
    { name: "Delgado Vargas Paula Andrea", gender: "girl", code: generateCode() },
    { name: "Gomez Fernandez Ana Maria", gender: "girl", code: generateCode() },
    { name: "Hernandez Garcia Jose", gender: "boy", code: generateCode() },
    { name: "Ortiz Mendoza Laura Isabel", gender: "girl", code: generateCode() },
    { name: "Perez Ortiz Juan Carlos", gender: "boy", code: generateCode() },
    { name: "Torres Gutierrez Maria Jose", gender: "girl", code: generateCode() }
  ]);
  
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentGender, setNewStudentGender] = useState('');

  function generateCode() {
    return Math.floor(10000 + Math.random() * 90000).toString();
  }

  // Filter students based on search query
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateStudent = () => {
    if (newStudentName.trim() && newStudentGender.trim()) {
      const newStudent = {
        name: newStudentName,
        gender: newStudentGender.toLowerCase(),
        code: generateCode(),
      };
      setStudents([...students, newStudent]);
      setNewStudentName('');
      setNewStudentGender('');
    } else {
      alert("Ingrese un nombre y un genero");
    }
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
          <h1>Estudiantes</h1>
          <div className="students-background"></div>
          <div className="students-list">
            {filteredStudents.map((student, index) => (
              <StudentCard key={index} name={student.name} gender={student.gender} code={generateCode()} />
            ))}
          </div>
          <input
            type="text"
            className="crearStudent"
            placeholder="Nombre"
            value={newStudentName}
            onChange={(e) => setNewStudentName(e.target.value)}
          />
          <input
            type="text"
            className="crearGenero"
            placeholder="Genero"
            value={newStudentGender}
            onChange={(e) => setNewStudentGender(e.target.value)}
          />
          <button className="view-all-button" onClick={handleCreateStudent}>Crear Estudiante</button>
        </div>
      </div>
    </div>
  );
}

function StudentCard({ name, gender, code }) {
  return (
    <div className={`student-card ${gender}`}>
      <div className="avatar"></div>
      <span>{name} | Genero: {gender} | Codigo: {code} </span>
    </div>
  );
}

export default Estudiantes;