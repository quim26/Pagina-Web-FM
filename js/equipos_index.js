async function cargarEquipos() {
    const contenedor = document.querySelector('.div_equipos');
    if (!contenedor) return;

    try {
        const respuesta = await fetch('json/jugadores.json');
        if (!respuesta.ok) throw new Error("No se encontró el JSON");
        const equipos = await respuesta.json();

        const infoAdicional = {
            "FC Barcelona": { estadio: "Spotify Camp Nou", fundado: "1899" },
            "Real Madrid CF": { estadio: "Santiago Bernabéu", fundado: "1902" },
            "Atlético de Madrid": { estadio: "Cívitas Metropolitano", fundado: "1903" },
            "Villarreal CF": { estadio: "Estadio de la Cerámica", fundado: "1923" },
            "Sevilla FC": { estadio: "Ramón Sánchez-Pizjuán", fundado: "1890" },
            "Real Sociedad": { estadio: "Reale Arena", fundado: "1909" },
            "Athletic Club": { estadio: "San Mamés", fundado: "1898" },
            "Real Betis": { estadio: "Benito Villamarín", fundado: "1907" },
            "Valencia CF": { estadio: "Mestalla", fundado: "1919" },
            "CA Osasuna": { estadio: "El Sadar", fundado: "1920" },
            "Girona FC": { estadio: "Montilivi", fundado: "1930" },
            "Rayo Vallecano": { estadio: "Estadio de Vallecas", fundado: "1924" },
            "RC Celta de Vigo": { estadio: "Abanca-Balaídos", fundado: "1923" },
            "RCD Mallorca": { estadio: "Visit Mallorca Estadi", fundado: "1916" },
            "Deportivo Alavés": { estadio: "Mendizorroza", fundado: "1921" },
            "UD Las Palmas": { estadio: "Estadio de Gran Canaria", fundado: "1949" },
            "Getafe CF": { estadio: "Coliseum", fundado: "1983" },
            "CD Leganés": { estadio: "Estadio Municipal de Butarque", fundado: "1928" },
            "RCD Espanyol": { estadio: "RCDE Stadium", fundado: "1900" },
            "Real Valladolid CF": { estadio: "Estadio José Zorrilla", fundado: "1928" }
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
            const extra = infoAdicional[equipo.equip] || { estadio: "Estadio Municipal", fundado: "N/A" };
            const colores = coloresEquipos[equipo.equip] || "#ccc 50%, #ccc 50%";

            const card = document.createElement('div');
            card.className = 'tarjeta-equipo-horizontal'; 
            card.style.cursor = 'pointer';
            card.style.borderImageSource = `linear-gradient(to right, ${colores})`;
            card.style.borderImageSlice = "1";

            card.innerHTML = `
                <div class="escudo-contenedor">
                    <img src="${equipo.escut}" alt="${equipo.equip}" onerror="this.src='img/equipos/default.png'">
                </div>
                <div class="info-derecha">
                    <h3>${equipo.equip}</h3>
                    <p><strong>Entrenador:</strong> ${equipo.entrenador.nomPersona}</p>
                    <p><strong>Estadio:</strong> ${extra.estadio}</p>
                    <p><strong>Fundado:</strong> ${extra.fundado}</p>
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