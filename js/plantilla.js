async function cargarPlantilla() {
    const contenedor = document.getElementById('contenedor-jugadores');
    const titulo = document.getElementById('nombre-equipo-titulo');
    const seccionPalmares = document.querySelector('.palmares');
    const seccionInfo = document.querySelector('.info-equipo');
    
    const params = new URLSearchParams(window.location.search);
    const nombreEquipo = params.get('equipo');

    if (!nombreEquipo) return;

    const infoEquipos = {
        "FC Barcelona": { estadio: "Spotify Camp Nou", ciudad: "Barcelona", fundado: "1899" },
        "Real Madrid CF": { estadio: "Santiago Bernabéu", ciudad: "Madrid", fundado: "1902" },
        "Atlético de Madrid": { estadio: "Cívitas Metropolitano", ciudad: "Madrid", fundado: "1903" },
        "Athletic Club": { estadio: "San Mamés", ciudad: "Bilbao", fundado: "1898" },
        "Valencia CF": { estadio: "Mestalla", ciudad: "Valencia", fundado: "1919" },
        "Real Sociedad": { estadio: "Reale Arena", ciudad: "San Sebastián", fundado: "1909" },
        "Sevilla FC": { estadio: "Ramón Sánchez-Pizjuán", ciudad: "Sevilla", fundado: "1890" },
        "Real Betis": { estadio: "Benito Villamarín", ciudad: "Sevilla", fundado: "1907" },
        "Villarreal CF": { estadio: "Estadio de la Cerámica", ciudad: "Villarreal", fundado: "1923" },
        "Girona FC": { estadio: "Montilivi", ciudad: "Girona", fundado: "1930" },
        "RC Celta de Vigo": { estadio: "Abanca-Balaídos", ciudad: "Vigo", fundado: "1923" },
        "Real Valladolid CF": { estadio: "José Zorrilla", ciudad: "Valladolid", fundado: "1928" },
        "CD Leganés": { estadio: "Butarque", ciudad: "Leganés", fundado: "1928" },
        "RCD Espanyol": { estadio: "RCDE Stadium", ciudad: "Barcelona", fundado: "1900" },
        "Rayo Vallecano": { estadio: "Vallecas", ciudad: "Madrid", fundado: "1924" },
        "Getafe CF": { estadio: "Coliseum", ciudad: "Getafe", fundado: "1983" },
        "CA Osasuna": { estadio: "El Sadar", ciudad: "Pamplona", fundado: "1920" },
        "RCD Mallorca": { estadio: "Son Moix", ciudad: "Palma", fundado: "1916" },
        "UD Las Palmas": { estadio: "Gran Canaria", ciudad: "Las Palmas", fundado: "1949" },
        "Deportivo Alavés": { estadio: "Mendizorroza", ciudad: "Vitoria", fundado: "1921" }
    };

    const palmaresData = {
        "Real Madrid CF": { liga: 36, copa: 20, supercopa: 13, ucl: 15 },
        "FC Barcelona": { liga: 27, copa: 31, supercopa: 14, ucl: 5 },
        "Atlético de Madrid": { liga: 11, copa: 10, supercopa: 2, ucl: 0 },
        "Athletic Club": { liga: 8, copa: 24, supercopa: 3, ucl: 0 },
        "Valencia CF": { liga: 6, copa: 8, supercopa: 1, ucl: 0 },
        "Real Sociedad": { liga: 2, copa: 3, supercopa: 1, ucl: 0 },
        "Sevilla FC": { liga: 1, copa: 5, supercopa: 1, ucl: 0 },
        "Real Betis": { liga: 1, copa: 3, supercopa: 0, ucl: 0 },
        "RC Celta de Vigo": { liga: 0, copa: 0, supercopa: 0, ucl: 0 },
        "Real Valladolid CF": { liga: 0, copa: 0, supercopa: 0, ucl: 0 },
        "RCD Espanyol": { liga: 0, copa: 4, supercopa: 0, ucl: 0 },
        "CD Leganés": { liga: 0, copa: 0, supercopa: 0, ucl: 0 },
        "Villarreal CF": { liga: 0, copa: 0, supercopa: 0, ucl: 0 },
        "RCD Mallorca": { liga: 0, copa: 1, supercopa: 1, ucl: 0 },
        "Getafe CF": { liga: 0, copa: 0, supercopa: 0, ucl: 0 },
        "CA Osasuna": { liga: 0, copa: 0, supercopa: 0, ucl: 0 },
        "Rayo Vallecano": { liga: 0, copa: 0, supercopa: 0, ucl: 0 },
        "Girona FC": { liga: 0, copa: 0, supercopa: 0, ucl: 0 },
        "UD Las Palmas": { liga: 0, copa: 0, supercopa: 0, ucl: 0 },
        "Deportivo Alavés": { liga: 0, copa: 0, supercopa: 0, ucl: 0 }
    };

    try {
        const respuesta = await fetch('json/jugadores.json');
        const equipos = await respuesta.json();
        const equipo = equipos.find(e => e.equip === nombreEquipo);

        if (equipo) {
            titulo.innerText = `${equipo.equip}`;

            const info = infoEquipos[nombreEquipo] || { estadio: "Desconocido", ciudad: "Desconocida", fundado: "N/A" };
            seccionInfo.innerHTML = `
                <div class="contenedor-info-general">
                    <div class="dato-info">
                        <h3>Equipo</h3>
                        <p>${equipo.equip}</p>
                    </div>
                    <div class="dato-info">
                        <h3>Estadio</h3>
                        <p>${info.estadio}</p>
                    </div>
                    <div class="dato-info">
                        <h3>Ciudad</h3>
                        <p>${info.ciudad}</p>
                    </div>
                    <div class="dato-info">
                        <h3>Fundado</h3>
                        <p>${info.fundado}</p>
                    </div>
                </div>
            `;
            
            const trofeos = palmaresData[nombreEquipo] || { liga: 0, copa: 0, supercopa: 0, ucl: 0 };
            seccionPalmares.innerHTML = `
                <div class="contenedor-palmares">
                    <div class="item-palmares">
                        <img src="img/trofeos/liga.png" alt="La Liga">
                        <h3>La Liga</h3>
                        <span class="cantidad">${trofeos.liga}</span>
                    </div>
                    <div class="item-palmares">
                        <img src="img/trofeos/copa.png" alt="Copa del Rey">
                        <h3>Copa del Rey</h3>
                        <span class="cantidad">${trofeos.copa}</span>
                    </div>
                    <div class="item-palmares">
                        <img src="img/trofeos/supercopa.png" alt="Supercopa">
                        <h3>Supercopa</h3>
                        <span class="cantidad">${trofeos.supercopa}</span>
                    </div>
                    <div class="item-palmares">
                        <img src="img/trofeos/ucl.png" alt="UCL">
                        <h3>Champions League</h3>
                        <span class="cantidad">${trofeos.ucl}</span>
                    </div>
                </div>
            `;

            contenedor.innerHTML = '';
            equipo.jugadors.forEach(jugador => {
                let nombreFoto = jugador.foto.split('\\').pop();
                let rutaFoto = `img/jugadores/${nombreFoto}`;
                const card = document.createElement('div');
                card.className = 'tarjeta-equipo-horizontal';
                card.innerHTML = `
                    <div class="escudo-contenedor">
                        <img src="${rutaFoto}" alt="${jugador.nomPersona}" onerror="this.src='img/logos/default_player.png'">
                    </div>
                    <div class="info-derecha">
                        <h3>${jugador.nomPersona}</h3>
                        <p><strong>Posición:</strong> ${jugador.posicio}</p>
                        <p><strong>Dorsal:</strong> ${jugador.dorsal}</p>
                        <p><strong>Calidad:</strong> ${jugador.qualitat}</p>
                    </div>
                `;
                contenedor.appendChild(card);
            });
        }
    } catch (error) {
        console.error(error);
    }
}
document.addEventListener('DOMContentLoaded', cargarPlantilla);