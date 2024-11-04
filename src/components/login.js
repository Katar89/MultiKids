import React, { useState } from 'react';
import '../css/lstyles.css'; 
import logo from '../assets/logo.png'; 
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

function Login() {
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        Correo: '',
        Contraseña: ''
    });
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', formData);
            if (response.status === 200) {
                // Guardar los datos del docente en localStorage
                localStorage.setItem('docente', JSON.stringify(response.data.docente));
                console.log('Inicio de sesión exitoso:', response.data);

                // Redirigir a la página de inicio
                navigate('/inicio');
            }
        } catch (error) {
            setError('Credenciales inválidas. Intente nuevamente.');
            console.error('Error en el inicio de sesión:', error);
        }
    };

    const handleClick2 = () => {
        navigate('/registro'); 
    };

    return (
        <div className="form">
            <main className="mainFormulario">
                <img src={logo} alt="Multikids logo" id="imagenlogin"></img>
                <h1 id="titulo" className='h1Login'>INGRESAR</h1>
                
                <form id="survey-form" onSubmit={handleSubmit}>
                    <hr />
                    
                    <label htmlFor="email" id="correo-label">
                        <p className='pLogin'>Correo:</p>
                        <input 
                            id="Correo" 
                            type="email" 
                            required 
                            className='inputLogin' 
                            value={formData.Correo} 
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    
                    <label htmlFor="contrasena" id="contrasena-label">
                        <p className='pLogin'>Contraseña:</p>
                        <input 
                            id="Contraseña" 
                            type="password" 
                            required 
                            className='inputLogin' 
                            value={formData.Contraseña} 
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    
                    {error && <p className="error">{error}</p>}

                    <button id="acceder" type="submit">Acceder</button>
                    <br />
                    <button id="registrarse" type="button" onClick={handleClick2}>Registrarse</button>
                    <br />
                </form>
            </main>
        </div>
    );
}

export default Login;
