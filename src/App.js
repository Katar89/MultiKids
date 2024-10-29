import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ingresar from './components/ingresar.js';
import Login from './components/login.js';
import Inicio from './components/inicio.js';
import Estudiantes from './components/estudiantes.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Ingresar/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/estudiantes' element={<Estudiantes/>}/>
      </Routes>
    </Router>
  );
}

export default App;