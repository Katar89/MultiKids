import React, { useState } from 'react';

function Actividades() {
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
            "¿El estudiante puede visualizar imágenes mentales con facilidad?",
            "¿Muestra interés en actividades como dibujo o modelado?",
            "¿Es bueno interpretando gráficos y diagramas?",
            "¿Se orienta fácilmente en espacios nuevos o desconocidos?",
            "¿Disfruta de actividades que implican construcción, diseño o manipulación visual?"
        ],
        linguistica: [
            "¿El estudiante tiene facilidad para leer y escribir?",
            "¿Le gusta contar historias o hablar en público?",
            "¿Muestra habilidad para aprender nuevos idiomas?",
            "¿Tiene un vocabulario más amplio que la mayoría de sus compañeros?",
            "¿Disfruta de juegos de palabras o rompecabezas verbales?"
        ],
        cineticoCorporal: [
            "¿El estudiante se destaca en actividades físicas como deportes o danza?",
            "¿Tiene buen control sobre sus movimientos corporales?",
            "¿Disfruta de actividades que implican el uso de sus manos, como el bricolaje?",
            "¿Se le facilita el aprendizaje a través del movimiento físico?",
            "¿Prefiere actividades físicas a actividades académicas?"
        ],
        interpersonal: [
            "¿El estudiante se comunica bien con sus compañeros?",
            "¿Muestra empatía hacia los demás?",
            "¿Es un buen líder o mediador en situaciones de grupo?",
            "¿Le gusta trabajar en equipo más que individualmente?",
            "¿Entiende las emociones y perspectivas de los demás fácilmente?"
        ],
        logicoMatematica: [
            "¿El estudiante disfruta resolviendo problemas matemáticos?",
            "¿Muestra interés en rompecabezas lógicos?",
            "¿Le gustan las actividades que implican clasificaciones o análisis?",
            "¿Tiene habilidad para hacer cálculos rápidamente?",
            "¿Tiende a buscar patrones o secuencias en la información?"
        ],
        naturalista: [
            "¿El estudiante tiene interés por los animales y la naturaleza?",
            "¿Es capaz de distinguir diferencias entre especies, plantas o animales?",
            "¿Muestra curiosidad por cómo funcionan los ecosistemas?",
            "¿Le gusta pasar tiempo al aire libre observando su entorno?",
            "¿Disfruta de actividades relacionadas con la naturaleza, como jardinería o acampada?"
        ],
    };

    const recomendaciones = {
        visualEspacial: {
            0: "Explora actividades básicas de dibujo y juegos visuales para iniciar el desarrollo de esta habilidad.",
            20: "Intenta crear mapas mentales o practicar con rompecabezas para fortalecer esta inteligencia.",
            40: "Desarrolla habilidades con actividades de diseño básico o programas de modelado 2D.",
            60: "Practica diseño en 3D y actividades complejas como arquitectura o fotografía.",
            80: "Participa en proyectos de diseño visual avanzado, como animación digital o arquitectura."
        },
        linguistica: {
            0: "Realiza ejercicios básicos de vocabulario y lectura guiada para mejorar la comprensión.",
            20: "Involúcrate en lecturas cortas y ejercicios de escritura creativa básica.",
            40: "Intensifica con escritura de cuentos cortos y prácticas de oratoria.",
            60: "Desarrolla habilidades en escritura formal y presenta en debates o exposiciones.",
            80: "Publica escritos o artículos y explora habilidades en múltiples idiomas."
        },
        cineticoCorporal: {
            0: "Practica ejercicios básicos de coordinación como juegos físicos simples.",
            20: "Realiza actividades de baja intensidad como caminatas y juegos de coordinación.",
            40: "Involúcrate en deportes moderados y actividades como el yoga.",
            60: "Desarrolla habilidades físicas en deportes intensivos o danzas especializadas.",
            80: "Practica deportes de alto rendimiento o disciplinas físicas de competencia."
        },
        interpersonal: {
            0: "Participa en juegos colaborativos básicos para iniciar el desarrollo de habilidades sociales.",
            20: "Involúcrate en actividades de grupo y proyectos colaborativos simples.",
            40: "Intensifica en roles de equipo y participa en debates para mejorar la empatía.",
            60: "Desarrolla habilidades de liderazgo participando como líder en proyectos de equipo.",
            80: "Desarrolla proyectos de alto impacto en la comunidad, liderando equipos."
        },
        logicoMatematica: {
            0: "Realiza juegos básicos de lógica como rompecabezas simples.",
            20: "Intenta resolver problemas matemáticos sencillos y juegos de lógica básicos.",
            40: "Practica problemas complejos y participa en actividades de razonamiento lógico.",
            60: "Desarrolla tus habilidades con problemas avanzados y análisis de datos.",
            80: "Participa en proyectos de investigación o desarrollo de algoritmos complejos."
        },
        naturalista: {
            0: "Realiza observaciones básicas de la naturaleza como paseos simples.",
            20: "Participa en actividades de cuidado de plantas o mascotas.",
            40: "Involúcrate en proyectos ecológicos o estudios de flora y fauna.",
            60: "Desarrolla investigaciones de campo y actividades de conservación.",
            80: "Participa en proyectos ambientales de alto impacto o estudios avanzados en ecología."
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

    const getRecomendacion = (inteligencia, porcentaje) => {
        if (porcentaje <= 20) return recomendaciones[inteligencia][0];
        if (porcentaje <= 40) return recomendaciones[inteligencia][20];
        if (porcentaje <= 60) return recomendaciones[inteligencia][40];
        if (porcentaje <= 80) return recomendaciones[inteligencia][60];
        return recomendaciones[inteligencia][80];
    };

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

            {step === 0 && (
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
                    <button onClick={handleSubmitTest} style={{
                        padding: '10px 20px',
                        backgroundColor: '#FF7043',
                        border: 'none',
                        borderRadius: '5px',
                        color: 'white',
                        cursor: 'pointer',
                        marginTop: '10px',
                        marginLeft: '10px'
                    }}>
                        Finalizar Test
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
