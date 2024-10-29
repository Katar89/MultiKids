import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ingresar from './components/ingresar.js';
import Login from './components/login.js';
import Inicio from './components/inicio.js';
import Estudiantes from './components/estudiantes.js';
import Actividades from './components/Actividades.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/"  element={<Ingresar/>} />
        <Route exact path="/login"  element={<Login/>} />
        <Route exact path='/inicio'  element={<Inicio/>}/>
        <Route exact path='/estudiantes'  element={<Estudiantes/>}/>
        <Route exact path='/actividades'  element={<Actividades/>}/>
      </Routes>
    </Router>
  );
}

export default App;