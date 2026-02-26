async function cargarPlantilla() {
    const contenedor = document.getElementById('contenedor-jugadores');
    const titulo = document.getElementById('nombre-equipo-titulo');
    const seccionPalmares = document.querySelector('.palmares');
    
    const params = new URLSearchParams(window.location.search);
    const nombreEquipo = params.get('equipo');

    if (!nombreEquipo) return;

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
        if (!respuesta.ok) throw new Error("No se encontró el archivo JSON");
        const equipos = await respuesta.json();

        const equipo = equipos.find(e => e.equip === nombreEquipo);

        if (equipo) {
            titulo.innerText = `${equipo.equip}`;
            
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
        console.error('Error al cargar la plantilla:', error);
    }
}
document.addEventListener('DOMContentLoaded', cargarPlantilla);