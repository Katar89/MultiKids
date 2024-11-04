export function SidebarMainButton({ nombreBoton, imgBoton, onClick }) {  
    const coloresBoton = {
        ESTUDIANTES: 'rgb(41, 97, 181)',
        ACTIVIDADES: 'rgb(167, 41, 181)',
        REPORTES: 'rgb(181, 144, 41)',
        AJUSTES: 'rgb(41, 181, 120)',
        Default: 'rgb(100, 100, 100)'
    };

    const colorBoton = coloresBoton[nombreBoton] || coloresBoton.Default;

    return (
        <button 
            className="tw-Main-Button" 
            style={{ '--button-color': colorBoton }}
            onClick={onClick}
        >
            <img 
                className="tw-Main-Button-Image" 
                src={imgBoton} 
                alt={`${nombreBoton} icon`}
            />
            <h2 className="tw-Main-Button-Text">{nombreBoton}</h2>
        </button>
    );
}