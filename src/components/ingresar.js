import React from 'react';
import './cstyles.css'; 
import logo from '../assets/logo.png';
function Ingresar() {
  return (
    <div>
    <img src={logo} alt="Multikids" /> 
    <div className="menu">
      <main>
        <button className="boton1">Ingresar</button>
      </main>
    </div>
    <footer>
      <p className="watermark">by BetPlay</p>
    </footer>
  </div>
  );
}

export default Ingresar;