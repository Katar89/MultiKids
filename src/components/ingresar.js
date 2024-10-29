import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './cstyles.css'; 
import logo from '../assets/logo.png';

function Ingresar() {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate('/login'); 
  };

  return (
    <div>
      <img src={logo} alt="Multikids" /> 
      <div className="menu">
        <main>
          <button className="boton1" onClick={handleClick}>Ingresar</button>
        </main>
      </div>
      <footer>
        <p className="watermark">by BetPlay</p>
      </footer>
    </div>
  );
}

export default Ingresar