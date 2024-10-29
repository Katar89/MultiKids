import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para manejar la navegación

function Actividades() {
    const navigate = useNavigate(); // Hook para navegar
    const actividades = [
        { name: 'Visual Espacial', color: '#FFA726' },
        { name: 'Lingüística', color: '#66BB6A' },
        { name: 'Cinético Corporal', color: '#FF7043' },
        { name: 'Interpersonal', color: '#AB47BC' },
        { name: 'Lógico Matemática', color: '#8E24AA' },
        { name: 'Naturalista', color: '#29B6F6' }
    ];

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '20px',
            backgroundColor: '#1E1E1E',
            minHeight: '100vh'
        }}>
            {/* Título con estilo similar al de las tarjetas */}
            <h2 style={{
                marginBottom: '30px',
                fontSize: '42px',
                color: 'white',
                fontWeight: 'bold',
                backgroundColor: '#AB47BC',
                padding: '20px 40px',
                borderRadius: '10px',
                textAlign: 'center'
            }}>
                ACTIVIDADES
            </h2>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexWrap: 'wrap'
            }}>
                {/* Grilla de actividades ajustada para mantener la proporción */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '20px',
                    marginBottom: '20px'
                }}>
                    {actividades.map((activity, index) => (
                        <div key={index} style={{
                            backgroundColor: activity.color,
                            width: '300px',
                            height: '300px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '24px',
                            borderRadius: '12px',
                            textAlign: 'center',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
                        }}>
                            {activity.name}
                        </div>
                    ))}
                </div>

                {/* Espacio para la información del docente */}
                <div style={{
                    marginLeft: '20px',
                    padding: '20px',
                    backgroundColor: '#7E57C2',
                    width: '300px',
                    height: '500px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    borderRadius: '10px',
                    textAlign: 'center',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
                }}>
                    <div style={{
                        borderRadius: '50%',
                        backgroundColor: '#9575CD',
                        width: '120px',
                        height: '120px',
                        marginBottom: '20px'
                    }}></div>
                    <h3>Docente</h3>
                    <p>Yanneth Perez</p>
                    <p>yannethP@gmail.com</p>
                </div>
            </div>

            {/* Botón de regresar */}
            <button
                style={{
                    marginTop: '30px',
                    padding: '10px 20px',
                    fontSize: '18px',
                    color: 'white',
                    backgroundColor: '#29B6F6',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
                onClick={() => navigate(-1)} // Regresa a la página anterior
            >
                Regresar
            </button>
        </div>
    );
}

export default Actividades;
