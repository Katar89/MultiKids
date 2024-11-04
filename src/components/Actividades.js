import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/astyles.css'
function Actividades() {
    const [students, setStudents] = useState([]); 
    const [selectedStudent, setSelectedStudent] = useState(null); 
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
      };
    const [docente, setDocente] = useState(null); // Estado para almacenar información del profesor
  
    useEffect(() => {
        // Obtener datos del docente autenticado desde el almacenamiento local
        const storedDocente = JSON.parse(localStorage.getItem('docente'));
        if (storedDocente) {
          setDocente(storedDocente);
        } else {
          // Si no hay un docente autenticado, redirigir al inicio de sesión
          navigate('/login');
        }
      }, [navigate]);  

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/estudiantes'); // Cambia esto a tu endpoint de estudiantes
                setStudents(response.data);
            } catch (error) {
                console.error('Error al cargar estudiantes', error);
            }
        };
        fetchStudents();
    }, []);

    const actividades = [
        { name: 'Visual Espacial', key: 'visualEspacial', color: '#FFA726' },
        { name: 'Lingüística', key: 'linguistica', color: '#66BB6A' },
        { name: 'Cinético Corporal', key: 'cineticoCorporal', color: '#FF7043' },
        { name: 'Interpersonal', key: 'interpersonal', color: '#AB47BC' },
        { name: 'Lógico Matemática', key: 'logicoMatematica', color: '#8E24AA' },
        { name: 'Naturalista', key: 'naturalista', color: '#29B6F6' }
    ];

    const [step, setStep] = useState(0); // 0 = inicio, 1 = test, 2 = resultados
    const [selectedIntelligence, setSelectedIntelligence] = useState(null);
    const [responses, setResponses] = useState({
        visualEspacial: Array(5).fill(0),
        linguistica: Array(5).fill(0),
        cineticoCorporal: Array(5).fill(0),
        interpersonal: Array(5).fill(0),
        logicoMatematica: Array(5).fill(0),
        naturalista: Array(5).fill(0),
    });
    const [percentages, setPercentages] = useState(null);
    const [showRecommendations, setShowRecommendations] = useState(false);

    const preguntas = {
        visualEspacial: [
            "¿Al niño le gusta dibujar o hacer construcciones con bloques?",
            "¿Disfruta mirando imágenes, colores y formas?",
            "¿Puede recordar lugares que ha visitado?",
            "¿Se orienta bien en lugares nuevos, como su escuela o la casa de un amigo?",
            "¿Le gusta armar rompecabezas o construir cosas?"
        ],
        linguistica: [
            "¿Le gusta escuchar o contar cuentos?",
            "¿Disfruta mirando libros o que le lean?",
            "¿Le gustan los juegos con palabras, como las rimas?",
            "¿Le es fácil recordar palabras nuevas?",
            "¿Le gusta conversar con los demás y compartir historias?"
        ],
        cineticoCorporal: [
            "¿El niño se destaca en actividades físicas como saltar o bailar?",
            "¿Tiene buen control sobre sus movimientos al correr o brincar?",
            "¿Le gusta usar sus manos para actividades como dibujar o armar bloques?",
            "¿Aprende mejor cuando puede moverse o jugar?",
            "¿Prefiere estar en movimiento más que quedarse sentado?"
        ],
        interpersonal: [
            "¿Es amigable y le gusta jugar con otros niños?",
            "¿Ayuda a otros cuando tienen problemas?",
            "¿Es bueno liderando juegos o actividades?",
            "¿Prefiere trabajar en equipo que solo?",
            "¿Entiende cómo se sienten los otros niños?"
        ],
        logicoMatematica: [
            "¿Le gusta contar cosas o jugar con números?",
            "¿Disfruta juegos de construcción y rompecabezas?",
            "¿Le gusta clasificar objetos por colores, formas o tamaños?",
            "¿Encuentra patrones o secuencias en las cosas?",
            "¿Tiene facilidad para resolver problemas sencillos?"
        ],
        naturalista: [
            "¿Le interesan los animales y la naturaleza?",
            "¿Puede distinguir entre diferentes plantas o animales?",
            "¿Le gusta explorar y observar su entorno?",
            "¿Disfruta salir al aire libre, como al parque o al campo?",
            "¿Le gusta cuidar de plantas o mascotas?"
        ]
    };
    

    const recomendaciones = {
        visualEspacial: {
            0: "Fomenta el dibujo libre y actividades con colores y formas.",
            20: "Ofrece rompecabezas simples o juegos de bloques.",
            40: "Anímalo a crear construcciones más complejas con bloques.",
            60: "Introduce actividades de dibujo detallado y modelado básico.",
            80: "Ofrece retos con construcciones avanzadas o proyectos de arte."
        },
        linguistica: {
            0: "Lee cuentos cortos y exploren palabras nuevas juntos.",
            20: "Involúcralo en juegos de palabras y rimas sencillas.",
            40: "Fomenta la escritura de cuentos cortos o poemas simples.",
            60: "Anímalo a leer en voz alta y a participar en pequeñas presentaciones.",
            80: "Ofrece oportunidades para escribir cuentos o compartir historias con otros."
        },
        cineticoCorporal: {
            0: "Fomenta juegos de coordinación como saltar y correr.",
            20: "Involúcralo en actividades de baile y juegos físicos moderados.",
            40: "Introdúcelo a deportes básicos o actividades de expresión corporal.",
            60: "Anímalo a participar en deportes de equipo o clases de baile.",
            80: "Fomenta su participación en competencias o presentaciones de baile."
        },
        interpersonal: {
            0: "Invítalo a jugar con otros niños en juegos colaborativos.",
            20: "Involúcralo en proyectos simples en grupo, como armar rompecabezas juntos.",
            40: "Dale roles de responsabilidad en juegos en equipo.",
            60: "Anímalo a liderar actividades en equipo.",
            80: "Fomenta su participación en actividades de liderazgo en grupo."
        },
        logicoMatematica: {
            0: "Introduce juegos de lógica como rompecabezas simples.",
            20: "Dale problemas básicos de contar o clasificar objetos.",
            40: "Ofrece juegos de patrones y secuencias más complejos.",
            60: "Introduce problemas matemáticos y actividades de lógica.",
            80: "Fomenta proyectos de investigación básica en ciencias o matemáticas."
        },
        naturalista: {
            0: "Salgan a observar la naturaleza en el parque.",
            20: "Anímalo a cuidar una planta o mascota.",
            40: "Involúcralo en proyectos de jardín o exploración de la naturaleza.",
            60: "Llévalo a excursiones para estudiar la naturaleza.",
            80: "Participa en proyectos de conservación y estudio ambiental."
        }
    };
    

    const handleSelectIntelligence = (key) => {
        setSelectedIntelligence(key);
        setStep(1);
    };

    const handleResponseChange = (index, value) => {
        setResponses(prev => ({
            ...prev,
            [selectedIntelligence]: prev[selectedIntelligence].map((resp, i) => (i === index ? value : resp))
        }));
    };  

    const handleSaveResponses = () => {
        setSelectedIntelligence(null);
        setStep(0);
    };
    const handleSaveReport = async () => {
        // Verificación de que percentages tenga un valor válido
        if (!percentages) {
            console.error("Percentages no está definido.");
            return;
        }

        const reporteData = {
            estudianteCodigo: selectedStudent?.Codigo ?? selectedStudent, // Enviar solo el código si selectedStudent es un objeto
            actividadResultados: Object.keys(percentages).reduce((acc, key) => {
                acc[key] = percentages[key]?.toString() || "0"; // Convertir cada valor a string o establecer un valor por defecto
                return acc;
            }, {}),
            recomendaciones: Object.keys(percentages).reduce((acc, key) => {
                acc[key] = getRecomendacion(key, percentages[key])?.toString() || ""; // Convertir cada recomendación a string
                return acc;
            }, {})
        };
    
        console.log("Intentando guardar el siguiente reporte:", reporteData);
    
        try {
            const response = await axios.post('http://localhost:5000/api/reportes', reporteData);
            alert(response.data.message);
        } catch (error) {
            console.error('Error al guardar el reporte:', error);
            alert('Error al guardar el reporte');
        }
    };

    const handleSubmitTest = () => {
        const calcularPorcentaje = (respuestas) => {
            const total = 25;
            return Math.round((respuestas.reduce((acc, curr) => acc + curr, 0) / total) * 100);
        };

        const newPercentages = Object.keys(responses).reduce((acc, key) => {
            acc[key] = calcularPorcentaje(responses[key]);
            return acc;
        }, {});

        setPercentages(newPercentages);
        setStep(2);
    };
    useEffect(() => {
        if (percentages) {
            handleSaveReport();
        }
    }, [percentages]);
    
    const getRecomendacion = (inteligencia, porcentaje) => {
        if (porcentaje <= 20) return recomendaciones[inteligencia][0];
        if (porcentaje <= 40) return recomendaciones[inteligencia][20];
        if (porcentaje <= 60) return recomendaciones[inteligencia][40];
        if (porcentaje <= 80) return recomendaciones[inteligencia][60];
        return recomendaciones[inteligencia][80];
    };
 
    return (
        
        <div className="ContenedorActividades"style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '20px',
            backgroundColor: '#1E1E1E',
            minHeight: '100vh'
         }}>
        
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
            {step === 0 && !selectedStudent && (
                <div>
                    <h2 style={{ color: 'white' }}>Selecciona un estudiante</h2>
                    <center><select onChange={(e) => setSelectedStudent(e.target.value)} value={selectedStudent}>
                        <option value="">-- Selecciona un estudiante --</option>
                        {students.map(student => (
                            <option key={student.Codigo} value={student.Codigo}>
                                {student.Nombre}
                            </option>
                        ))}
                    </select></center>
                    <center><button className="back-button" onClick={handleBack}>
                        Regresar
                    </button></center>
                </div>
            )}
            {step === 0 && selectedStudent && (
                <div>
                    <h2 style={{
                        textAlign: 'center',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        color: 'white'
                    }}>Seleccionar actividad para {students.find(student => student.Codigo === selectedStudent)?.Nombre}</h2>
                    
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '20px'
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
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                                cursor: 'pointer'
                            }} onClick={() => handleSelectIntelligence(activity.key)}>
                                {activity.name}
                            </div>
                        ))}
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '20px'
                    }}>
                        <button onClick={handleSubmitTest} style={{
                            padding: '10px 20px',
                            backgroundColor: '#FF7043',
                            border: 'none',
                            borderRadius: '5px',
                            color: 'white',
                            cursor: 'pointer'
                        }}>
                            Finalizar Test
                        </button>
                        <button onClick={() => { setSelectedStudent(null); setStep(0); }} style={{ marginLeft: '10px' }}>Escoger Otro Estudiante</button>
                    </div>
                </div>
            )}

            {step === 1 && (
                <div style={{
                    width: '500px',
                    padding: '20px',
                    backgroundColor: '#333',
                    borderRadius: '10px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
                }}>
                    <h2 style={{ color: 'white', marginBottom: '20px' }}>{selectedIntelligence}</h2>
                    {preguntas[selectedIntelligence].map((pregunta, index) => (
                        <div key={index} style={{ marginBottom: '10px' }}>
                            <p style={{ color: 'white' }}>{pregunta}</p>
                            <input
                                type="range"
                                min="0"
                                max="5"
                                value={responses[selectedIntelligence][index]}
                                onChange={(e) => handleResponseChange(index, parseInt(e.target.value))}
                                style={{ width: '100%' }}
                            />
                        </div>
                    ))}
                    <button onClick={handleSaveResponses} style={{
                        padding: '10px 20px',
                        backgroundColor: '#AB47BC',
                        border: 'none',
                        borderRadius: '5px',
                        color: 'white',
                        cursor: 'pointer',
                        marginTop: '20px'
                    }}>
                        Guardar Respuestas
                    </button>
                    <button onClick={() => setStep(0)} style={{
                        padding: '10px 20px', backgroundColor: '#AB47BC', border: 'none', borderRadius: '5px', color: 'white', cursor: 'pointer', marginTop: '20px'
                    }}>
                        Regresar
                    </button>
                </div>
            )}

            {step === 2 && (
                <div style={{
                    width: '500px',
                    padding: '20px',
                    backgroundColor: '#333',
                    borderRadius: '10px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
                }}>
                    <h2 style={{ color: 'white', marginBottom: '20px' }}>Resultados del Test</h2>
                    {Object.keys(percentages).map((inteligencia) => (
                        <div key={inteligencia} style={{
                            backgroundColor: '#444', padding: '10px', marginBottom: '10px', borderRadius: '5px'
                        }}>
                            <h3 style={{ color: 'white' }}>{inteligencia.replace(/([A-Z])/g, ' $1')} - {percentages[inteligencia]}%</h3>
                        </div>
                    ))}
                    <button onClick={() => setShowRecommendations(true)} style={{
                        padding: '10px 20px', backgroundColor: '#AB47BC', border: 'none', borderRadius: '5px', color: 'white', cursor: 'pointer', marginTop: '20px'
                    }}>
                        Ver Recomendaciones
                    </button>
                    <button onClick={() => setStep(0)} style={{
                        padding: '10px 20px', backgroundColor: '#AB47BC', border: 'none', borderRadius: '5px', color: 'white', cursor: 'pointer', marginTop: '20px'
                    }}>
                        Regresar
                    </button>
                </div>
            )}

            {showRecommendations && (
                <div style={{
                    width: '500px',
                    padding: '20px',
                    backgroundColor: '#333',
                    borderRadius: '10px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                    marginTop: '20px'
                }}>
                    <h2 style={{ color: 'white', marginBottom: '20px' }}>Recomendaciones</h2>
                    {Object.keys(percentages).map((inteligencia) => (
                        <div key={inteligencia} style={{
                            backgroundColor: '#444', padding: '10px', marginBottom: '10px', borderRadius: '5px'
                        }}>
                            <h3 style={{ color: 'white' }}>{inteligencia.replace(/([A-Z])/g, ' $1')}</h3>
                            <p style={{ color: 'white' }}>{getRecomendacion(inteligencia, percentages[inteligencia])}</p>
                        </div>
                    ))}
                    <button onClick={() => setShowRecommendations(false)} style={{
                        padding: '10px 20px', backgroundColor: '#AB47BC', border: 'none', borderRadius: '5px', color: 'white', cursor: 'pointer', marginTop: '20px'
                    }}>
                        Ocultar Recomendaciones
                    </button>
                </div>
            )}
        </div>
    );
}

export default Actividades;
