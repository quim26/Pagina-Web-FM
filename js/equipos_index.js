async function cargarEquipos() {
    const contenedor = document.querySelector('.div_equipos');
    if (!contenedor) return;

    try {
        const respuesta = await fetch('json/jugadores.json');
        if (!respuesta.ok) throw new Error("No se encontró el JSON");
        const equipos = await respuesta.json();

        const estadios = {
            "FC Barcelona": "Spotify Camp Nou",
            "Real Madrid CF": "Santiago Bernabéu",
            "Atlético de Madrid": "Cívitas Metropolitano",
            "Villarreal CF": "Estadio de la Cerámica",
            "Sevilla FC": "Ramón Sánchez-Pizjuán",
            "Real Sociedad": "Reale Arena",
            "Athletic Club": "San Mamés",
            "Real Betis": "Benito Villamarín",
            "Valencia CF": "Mestalla",
            "CA Osasuna": "El Sadar",
            "Girona FC": "Montilivi",
            "Rayo Vallecano": "Estadio de Vallecas",
            "RC Celta de Vigo": "Abanca-Balaídos",
            "RCD Mallorca": "Visit Mallorca Estadi",
            "Deportivo Alavés": "Mendizorroza",
            "UD Las Palmas": "Estadio de Gran Canaria",
            "Getafe CF": "Coliseum",
            "CD Leganés": "Estadio Municipal de Butarque",
            "RCD Espanyol": "RCDE Stadium",
            "Real Valladolid CF": "Estadio José Zorrilla"
        };

        const coloresEquipos = {
            "FC Barcelona": "#004d98 50%, #a50044 50%",
            "Real Madrid CF": "#ffffff 50%, #ffffff 50%",
            "Atlético de Madrid": "#cb3524 50%, #ffffff 50%",
            "Villarreal CF": "#ffe600 50%, #ffe600 50%",
            "Sevilla FC": "#ffffff 50%, #c4041b 50%",
            "Real Sociedad": "#0067b1 50%, #ffffff 50%",
            "Athletic Club": "#ff0000 50%, #ffffff 50%",
            "Real Betis": "#0bb363 50%, #ffffff 50%",
            "Valencia CF": "#ffffff 50%, #000000 50%",
            "CA Osasuna": "#c4041b 50%, #0c1c33 50%",
            "Girona FC": "#e20612 50%, #ffffff 50%",
            "Rayo Vallecano": "#ffffff 50%, #e20612 50%",
            "RC Celta de Vigo": "#87adce 50%, #87adce 50%",
            "RCD Mallorca": "#e20612 50%, #000000 50%",
            "Deportivo Alavés": "#003ca6 50%, #ffffff 50%",
            "UD Las Palmas": "#fff000 50%, #00529f 50%",
            "Getafe CF": "#00529f 50%, #00529f 50%",
            "CD Leganés": "#00529f 50%, #ffffff 50%",
            "RCD Espanyol": "#007dc5 50%, #ffffff 50%",
            "Real Valladolid CF": "#6d2d91 50%, #ffffff 50%"
        };

        equipos.sort((a, b) => {
            const mediaA = a.jugadors.reduce((t, j) => t + j.qualitat, 0) / a.jugadors.length;
            const mediaB = b.jugadors.reduce((t, j) => t + j.qualitat, 0) / b.jugadors.length;
            return mediaB - mediaA;
        });

        contenedor.innerHTML = '';

        equipos.forEach(equipo => {
            const sumaQualitat = equipo.jugadors.reduce((total, j) => total + j.qualitat, 0);
            const media = (sumaQualitat / equipo.jugadors.length).toFixed(1);
            const nombreEstadio = estadios[equipo.equip] || "Estadio Municipal";
            const colores = coloresEquipos[equipo.equip] || "#ccc 50%, #ccc 50%";
            
            let nombreImagen = equipo.escut.split('\\').pop(); 
            let rutaFinal = `img/equipos/${nombreImagen}`;

            const card = document.createElement('div');
            card.className = 'tarjeta-equipo-horizontal'; 
            card.style.cursor = 'pointer';
            
            card.style.borderImageSource = `linear-gradient(to right, ${colores})`;
            card.style.borderImageSlice = "1";

            card.innerHTML = `
                <div class="escudo-contenedor">
                    <img src="${rutaFinal}" alt="${equipo.equip}">
                </div>
                <div class="info-derecha">
                    <h3>${equipo.equip}</h3>
                    <p><strong>Entrenador:</strong> ${equipo.entrenador.nomPersona}</p>
                    <p><strong>Estadio:</strong> ${nombreEstadio}</p>
                    <p><strong>Media:</strong> ${media}</p>
                </div>
            `;

            card.addEventListener('click', () => {
                window.location.href = `plantilla.html?equipo=${encodeURIComponent(equipo.equip)}`;
            });

            contenedor.appendChild(card);
        });
    } catch (error) {
        console.error(error);
    }
}
document.addEventListener('DOMContentLoaded', cargarEquipos);