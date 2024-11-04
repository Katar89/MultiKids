import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../css/cstyles.css'; 
import logo from '../assets/logo.png';

function Ingresar() {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate('/login'); 
  };

  return (
      <div className="menu">
      <img src={logo} alt="Multikids" className='imgIngresar'/> 
      <div className="menu2">
        <main>
          <button className="boton1" onClick={handleClick}>Ingresar</button>
        </main>
      </div>
      <footer className='footerIngresar'>
        <p className="watermark">by BetPlay</p>
      </footer>
    </div>
  );
}

export default Ingresar