async function cargarPlantilla() {
    const contenedor = document.getElementById('contenedor-jugadores');
    const titulo = document.getElementById('nombre-equipo-titulo');
    const seccionPalmares = document.querySelector('.palmares');
    const seccionInfo = document.querySelector('.info-equipo');
    const seccionJugadores = document.querySelector('.jugadores');
    const canvasTactico = document.getElementById('canvas-tactico');
    
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
        "Villarreal CF": { liga: 0, copa: 0, supercopa: 0, ucl: 0 },
        "Girona FC": { liga: 0, copa: 0, supercopa: 0, ucl: 0 },
        "RC Celta de Vigo": { liga: 0, copa: 0, supercopa: 0, ucl: 0 },
        "Real Valladolid CF": { liga: 0, copa: 0, supercopa: 0, ucl: 0 },
        "CD Leganés": { liga: 0, copa: 0, supercopa: 0, ucl: 0 },
        "RCD Espanyol": { liga: 0, copa: 4, supercopa: 0, ucl: 0 },
        "Rayo Vallecano": { liga: 0, copa: 0, supercopa: 0, ucl: 0 },
        "Getafe CF": { liga: 0, copa: 0, supercopa: 0, ucl: 0 },
        "CA Osasuna": { liga: 0, copa: 0, supercopa: 0, ucl: 0 },
        "RCD Mallorca": { liga: 0, copa: 1, supercopa: 1, ucl: 0 },
        "UD Las Palmas": { liga: 0, copa: 0, supercopa: 0, ucl: 0 },
        "Deportivo Alavés": { liga: 0, copa: 0, supercopa: 0, ucl: 0 }
    };

    const ordenPrioridad = { "PORTER": 1, "DEFENSA": 2, "MIGCAMPISTA": 3, "DAVANTER": 4 };
    const traduccionPosiciones = { "PORTER": "Portero", "DEFENSA": "Defensa", "MIGCAMPISTA": "Mediocentro", "DAVANTER": "Delantero" };

    try {
        const respuesta = await fetch('json/jugadores.json');
        const equipos = await respuesta.json();
        const equipo = equipos.find(e => e.equip === nombreEquipo);

        if (equipo) {
            titulo.innerText = equipo.equip;

            seccionInfo.innerHTML = `
                <div class="contenedor-info-general">
                    <div class="dato-info"><h3>Equipo</h3><p>${equipo.equip}</p></div>
                    <div class="dato-info"><h3>Entrenador</h3><p>${equipo.entrenador.nomPersona}</p></div>
                </div>
            `;
            
            const trofeos = palmaresData[nombreEquipo] || { liga: 0, copa: 0, supercopa: 0, ucl: 0 };
            seccionPalmares.innerHTML = `
                <div class="contenedor-palmares">
                    <div class="item-palmares"><img src="img/trofeos/liga.png" alt="La Liga"><h3>La Liga</h3><span class="cantidad">${trofeos.liga}</span></div>
                    <div class="item-palmares"><img src="img/trofeos/copa.png" alt="Copa del Rey"><h3>Copa del Rey</h3><span class="cantidad">${trofeos.copa}</span></div>
                    <div class="item-palmares"><img src="img/trofeos/supercopa.png" alt="Supercopa"><h3>Supercopa</h3><span class="cantidad">${trofeos.supercopa}</span></div>
                    <div class="item-palmares"><img src="img/trofeos/ucl.png" alt="UCL"><h3>Champions League</h3><span class="cantidad">${trofeos.ucl}</span></div>
                </div>
            `;

            dibujarCampoTactico(equipo.jugadors, canvasTactico, equipo.entrenador);

            const jugadoresOrdenados = [...equipo.jugadors].sort((a, b) => {
                const pA = a.posicio.trim().toUpperCase();
                const pB = b.posicio.trim().toUpperCase();
                return (ordenPrioridad[pA] || 99) - (ordenPrioridad[pB] || 99) || b.qualitat - a.qualitat;
            });

            contenedor.innerHTML = '';
            jugadoresOrdenados.forEach(jugador => {
                const posKey = jugador.posicio.trim().toUpperCase();
                const card = document.createElement('div');
                card.className = 'tarjeta-equipo-horizontal';
                card.innerHTML = `
                    <div class="escudo-contenedor">
                        <img src="${jugador.foto}" alt="${jugador.nomPersona}" onerror="this.src='img/logos/default_player.png'">
                    </div>
                    <div class="info-derecha">
                        <h3>${jugador.nomPersona}</h3>
                        <p><strong>Posición:</strong> ${traduccionPosiciones[posKey] || jugador.posicio}</p>
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

function dibujarCampoTactico(jugadores, contenedor, entrenador) {
    const getBest = (p) => jugadores.filter(j => j.posicio.trim().toUpperCase() === p).sort((a, b) => b.qualitat - a.qualitat)[0];
    
    const alineacion = {
        portero: getBest("PORTER"),
        cierre: getBest("DEFENSA"),
        alas: jugadores.filter(j => j.posicio.trim().toUpperCase() === "MIGCAMPISTA").sort((a, b) => b.qualitat - a.qualitat),
        pivot: getBest("DAVANTER")
    };

    let html = `
        <div class="campo-futbol">
            <div class="linea linea-central"></div>
            <div class="circulo-central"></div>
            <div class="area izquierda"></div><div class="area derecha"></div>
            <div class="porteria izquierda"></div><div class="porteria derecha"></div>
            <div class="zona-banquillo">
                <div class="ficha-entrenador"><img src="${entrenador.foto}" onerror="this.src='img/logos/default_player.png'"></div>
                <div class="info-entrenador"><span>Entrenador</span><h4>${entrenador.nomPersona}</h4></div>
            </div>`;

    const pos = [
        { j: alineacion.portero, t: 50, l: 12 },
        { j: alineacion.cierre, t: 50, l: 32 },
        { j: alineacion.alas[0], t: 25, l: 55 },
        { j: alineacion.alas[1] || alineacion.alas[0], t: 75, l: 55 },
        { j: alineacion.pivot, t: 50, l: 82 }
    ];

    pos.forEach(p => {
        if (!p.j) return;
        html += `
            <div class="ficha-jugador local" style="top:${p.t}%; left:${p.l}%; transform:translate(-50%,-50%)">
                <div class="contenedor-foto-ficha">
                    <img src="${p.j.foto}" onerror="this.src='img/logos/default_player.png'">
                </div>
                <div class="nombre-ficha">${p.j.nomPersona.split(' ').pop()}</div>
            </div>`;
    });

    contenedor.innerHTML = html + `</div>`;
}

document.addEventListener('DOMContentLoaded', cargarPlantilla);