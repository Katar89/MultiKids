import React from 'react';

function Actividades() {
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
            backgroundColor: '#1E1E1E',  // Fondo original
            minHeight: '100vh'
        }}>
            {/* Título con estilo similar al de las tarjetas */}
            <h2 style={{
                marginBottom: '30px',
                fontSize: '42px',  // Tamaño del título más grande
                color: 'white',
                fontWeight: 'bold',
                backgroundColor: '#AB47BC',  // Color de fondo morado
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
                    gap: '20px',  // Ajuste del espacio entre cuadros
                    marginBottom: '20px'
                }}>
                    {actividades.map((activity, index) => (
                        <div key={index} style={{
                            backgroundColor: activity.color,
                            width: '300px',  // Aumento del tamaño de los cuadros
                            height: '300px',  // Aumento proporcional
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '24px',  // Letra más grande
                            borderRadius: '12px',
                            textAlign: 'center',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'  // Sombras para darle efecto
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
                    width: '300px',  // Ajuste del espacio para el docente
                    height: '500px',  // Altura ajustada para mantener proporción
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    borderRadius: '10px',
                    textAlign: 'center',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'  // Sombras para darle efecto
                }}>
                    <div style={{
                        borderRadius: '50%',
                        backgroundColor: '#9575CD',
                        width: '120px',  // Tamaño del círculo aumentado
                        height: '120px',
                        marginBottom: '20px'
                    }}></div>
                    <h3>Docente</h3>
                    <p>Yanneth Perez</p>
                    <p>yannethP@gmail.com</p>
                </div>
            </div>
        </div>
    );
}

export default Actividades;
