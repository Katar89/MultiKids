import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ingresar from './components/ingresar.js';
import Login from './components/login.js';
import Inicio from './components/inicio.js';
import Estudiantes from './components/estudiantes.js';
import Actividades from './components/Actividades.js';
import Registro from './components/registro.js';
import Reportes from './components/Reportes.js';
import Acerca from './components/acerca.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/"  element={<Ingresar/>} />
        <Route exact path="/login"  element={<Login/>} />
        <Route exact path="/registro"  element={<Registro/>} />
        <Route exact path='/inicio'  element={<Inicio/>}/>
        <Route exact path='/estudiantes'  element={<Estudiantes/>}/>
        <Route exact path='/actividades'  element={<Actividades/>}/>
        <Route exact path='/reportes'  element={<Reportes/>}/>
        <Route exact path='/acerca'  element={<Acerca/>}/>
      </Routes>
    </Router>
  );
}

export default App;