// 1. CARGA DE COMPONENTES (HEADER/FOOTER)
fetch('header.html').then(res => res.text()).then(data => { 
    const h = document.getElementById('header'); 
    if (h) h.innerHTML = data; 
}).catch(e => console.error('Error header:', e));

fetch('footer.html').then(res => res.text()).then(data => { 
    const f = document.getElementById('footer'); 
    if (f) f.innerHTML = data; 
}).catch(e => console.error('Error footer:', e));

// 2. CONSTANTES DE DATOS
const dadesEquips = [
    { "equip": "FC Barcelona", "escut": "img/escudos/barcelona.png" },
    { "equip": "Real Madrid", "escut": "img/escudos/real-madrid.png" },
    { "equip": "Atlético de Madrid", "escut": "img/escudos/atletico-madrid.png" },
    { "equip": "Sevilla FC", "escut": "img/escudos/sevilla.png" },
    { "equip": "Real Sociedad", "escut": "img/escudos/real-sociedad.png" },
    { "equip": "Real Betis", "escut": "img/escudos/betis.png" },
    { "equip": "Athletic Club", "escut": "img/escudos/athletic.png" },
    { "equip": "Villarreal CF", "escut": "img/escudos/villarreal.png" },
    { "equip": "Valencia CF", "escut": "img/escudos/valencia.png" },
    { "equip": "Celta de Vigo", "escut": "img/escudos/celta.png" },
    { "equip": "RCD Mallorca", "escut": "img/escudos/mallorca.png" },
    { "equip": "Girona FC", "escut": "img/escudos/girona.png" },
    { "equip": "CA Osasuna", "escut": "img/escudos/osasuna.png" },
    { "equip": "Getafe CF", "escut": "img/escudos/getafe.png" },
    { "equip": "UD Las Palmas", "escut": "img/escudos/las-palmas.png" },
    { "equip": "RCD Espanyol", "escut": "img/escudos/espanyol.png" },
    { "equip": "CD Leganés", "escut": "img/escudos/leganes.png" },
    { "equip": "Real Valladolid", "escut": "img/escudos/valladolid.png" },
    { "equip": "Rayo Vallecano", "escut": "img/escudos/rayo.png" },
    { "equip": "Deportivo Alavés", "escut": "img/escudos/alaves.png" }
];

const coloresEquipos = {
    "FC Barcelona": { principal: "#004170", secundario: "#AA0637" },
    "Real Madrid": { principal: "#FFFFFF", secundario: "#000000" },
    "Atlético de Madrid": { principal: "#CB3524", secundario: "#1C355E" },
    "Villarreal CF": { principal: "#FEEB01", secundario: "#005187" },
    "Athletic Club": { principal: "#E2021A", secundario: "#FFFFFF" },
    "Real Sociedad": { principal: "#0067B1", secundario: "#FFFFFF" },
    "Girona FC": { principal: "#E2201C", secundario: "#FFFFFF" },
    "RCD Mallorca": { principal: "#E2011A", secundario: "#000000" },
    "Real Betis": { principal: "#0BB363", secundario: "#FFFFFF" },
    "CA Osasuna": { principal: "#C31A41", secundario: "#1B365D" },
    "Rayo Vallecano": { principal: "#FFFFFF", secundario: "#E30613" },
    "Sevilla FC": { principal: "#FFFFFF", secundario: "#C4122E" },
    "Celta de Vigo": { principal: "#83B7E1", secundario: "#FFFFFF" },
    "Deportivo Alavés": { principal: "#00519E", secundario: "#FFFFFF" },
    "CD Leganés": { principal: "#005BA4", secundario: "#FFFFFF" },
    "Getafe CF": { principal: "#00519E", secundario: "#FFFFFF" },
    "UD Las Palmas": { principal: "#F7D417", secundario: "#00539F" },
    "Valencia CF": { principal: "#FFFFFF", secundario: "#FF5C00" },
    "Real Valladolid": { principal: "#4D236D", secundario: "#FFFFFF" },
    "RCD Espanyol": { principal: "#007CC3", secundario: "#FFFFFF" }
};

const proximaJornada = [
    { local: "Real Madrid", visitante: "RCD Mallorca", fecha: "2026-03-20", hora: "21:00", estadio: "Santiago Bernabéu", tv: "DAZN" },
    { local: "FC Barcelona", visitante: "Getafe CF", fecha: "2026-03-21", hora: "16:15", estadio: "Spotify Camp Nou", tv: "Movistar+ LaLiga" },
    { local: "Villarreal CF", visitante: "Valencia CF", fecha: "2026-03-21", hora: "18:30", estadio: "Estadio de la Cerámica", tv: "DAZN" },
    { local: "Atlético de Madrid", visitante: "Sevilla FC", fecha: "2026-03-21", hora: "21:00", estadio: "Cívitas Metropolitano", tv: "Movistar+ LaLiga" },
    { local: "Real Sociedad", visitante: "Athletic Club", fecha: "2026-03-22", hora: "14:00", estadio: "Reale Arena", tv: "DAZN" }
];

const goleadores = [
    { nombre: "Robert Lewandowski", equipo: "FC Barcelona", cantidad: 17 },
    { nombre: "Raphinha", equipo: "FC Barcelona", cantidad: 12 },
    { nombre: "Kylian Mbappé", equipo: "Real Madrid", cantidad: 10 },
    { nombre: "Ante Budimir", equipo: "CA Osasuna", cantidad: 9 },
    { nombre: "Ayoze Pérez", equipo: "Villarreal CF", cantidad: 9 }
];

const asistentes = [
    { nombre: "Lamine Yamal", equipo: "FC Barcelona", cantidad: 9 },
    { nombre: "Raphinha", equipo: "FC Barcelona", cantidad: 8 },
    { nombre: "Álex Baena", equipo: "Villarreal CF", cantidad: 7 },
    { nombre: "Óscar Mingueza", equipo: "Celta de Vigo", cantidad: 6 },
    { nombre: "Vinícius Júnior", equipo: "Real Madrid", cantidad: 5 }
];

const zamora = [
    { nombre: "Jan Oblak", equipo: "Atlético de Madrid", cantidad: 9 },
    { nombre: "Thibaut Courtois", equipo: "Real Madrid", cantidad: 8 },
    { nombre: "Iñaki Peña", equipo: "FC Barcelona", cantidad: 7 },
    { nombre: "Álex Remiro", equipo: "Real Sociedad", cantidad: 7 },
    { nombre: "Dominik Greif", equipo: "RCD Mallorca", cantidad: 6 }
];

const mapeo = {
        "FC Barcelona": "barcelona", "Real Madrid": "real-madrid", "Atlético de Madrid": "atletico-madrid",
        "Villarreal CF": "villarreal", "Athletic Club": "athletic", "Real Sociedad": "real-sociedad",
        "Girona FC": "girona", "RCD Mallorca": "mallorca", "Real Betis": "betis", "CA Osasuna": "osasuna",
        "Rayo Vallecano": "rayo", "Sevilla FC": "sevilla", "Celta de Vigo": "celta",
        "Deportivo Alavés": "alaves", "CD Leganés": "leganes", "Getafe CF": "getafe",
        "UD Las Palmas": "las-palmas", "Valencia CF": "valencia", "Real Valladolid": "valladolid", "RCD Espanyol": "espanyol"
    };

const dadesClasificacio = [
    { pos: 1, equip: "FC Barcelona", escut: "img/escudos/barcelona.png", pj: 19, pg: 16, pe: 1, pp: 2, gf: 55, gc: 15, pts: 49 },
    { pos: 2, equip: "Real Madrid", escut: "img/escudos/real-madrid.png", pj: 19, pg: 14, pe: 3, pp: 2, gf: 42, gc: 12, pts: 45 },
    { pos: 3, equip: "Atlético de Madrid", escut: "img/escudos/atletico-madrid.png", pj: 19, pg: 11, pe: 5, pp: 3, gf: 32, gc: 18, pts: 38 },
    { pos: 4, equip: "Villarreal CF", escut: "img/escudos/villarreal.png", pj: 19, pg: 10, pe: 5, pp: 4, gf: 30, gc: 21, pts: 35 },
    { pos: 5, equip: "Athletic Club", escut: "img/escudos/athletic.png", pj: 19, pg: 9, pe: 6, pp: 4, gf: 28, gc: 20, pts: 33 },
    { pos: 6, equip: "Real Sociedad", escut: "img/escudos/real-sociedad.png", pj: 19, pg: 9, pe: 4, pp: 6, gf: 25, gc: 22, pts: 31 },
    { pos: 7, equip: "Girona FC", escut: "img/escudos/girona.png", pj: 19, pg: 8, pe: 5, pp: 6, gf: 29, gc: 26, pts: 29 },
    { pos: 8, equip: "Real Betis", escut: "img/escudos/betis.png", pj: 19, pg: 7, pe: 7, pp: 5, gf: 24, gc: 22, pts: 28 },
    { pos: 9, equip: "RCD Mallorca", escut: "img/escudos/mallorca.png", pj: 19, pg: 7, pe: 5, pp: 7, gf: 18, gc: 19, pts: 26 },
    { pos: 10, equip: "CA Osasuna", escut: "img/escudos/osasuna.png", pj: 19, pg: 7, pe: 4, pp: 8, gf: 22, gc: 28, pts: 25 },
    { pos: 11, equip: "Sevilla FC", escut: "img/escudos/sevilla.png", pj: 19, pg: 6, pe: 6, pp: 7, gf: 23, gc: 25, pts: 24 },
    { pos: 12, equip: "Celta de Vigo", escut: "img/escudos/celta.png", pj: 19, pg: 6, pe: 4, pp: 9, gf: 27, gc: 31, pts: 22 },
    { pos: 13, equip: "Rayo Vallecano", escut: "img/escudos/rayo.png", pj: 19, pg: 5, pe: 6, pp: 8, gf: 19, gc: 24, pts: 21 },
    { pos: 14, equip: "Valencia CF", escut: "img/escudos/valencia.png", pj: 19, pg: 5, pe: 4, pp: 10, gf: 20, gc: 29, pts: 19 },
    { pos: 15, equip: "Getafe CF", escut: "img/escudos/getafe.png", pj: 19, pg: 3, pe: 9, pp: 7, gf: 14, gc: 21, pts: 18 },
    { pos: 16, equip: "Deportivo Alavés", escut: "img/escudos/alaves.png", pj: 19, pg: 4, pe: 5, pp: 10, gf: 17, gc: 28, pts: 17 },
    { pos: 17, equip: "UD Las Palmas", escut: "img/escudos/las-palmas.png", pj: 19, pg: 4, pe: 4, pp: 11, gf: 18, gc: 32, pts: 16 },
    { pos: 18, equip: "CD Leganés", escut: "img/escudos/leganes.png", pj: 19, pg: 3, pe: 6, pp: 10, gf: 15, gc: 27, pts: 15 },
    { pos: 19, equip: "RCD Espanyol", escut: "img/escudos/espanyol.png", pj: 19, pg: 3, pe: 4, pp: 12, gf: 16, gc: 34, pts: 13 },
    { pos: 20, equip: "Real Valladolid", escut: "img/escudos/valladolid.png", pj: 19, pg: 2, pe: 5, pp: 12, gf: 13, gc: 35, pts: 11 }
];

// 3. FUNCIONES DE RENDERIZADO

// Partidos jugados (ticker)

function generarTickerResultados(partidos) {
    const track = document.getElementById('ticker-track');
    if (!track) return;
    
    const itemsHTML = partidos.map(p => `
        <div class="ticker-item">
            <img src="${p.equip_local.escut}" class="ticker-escudo">
            <span class="ticker-marcador">${p.resultat}</span>
            <img src="${p.equip_visitant.escut}" class="ticker-escudo">
        </div>
    `).join('');

    track.innerHTML = itemsHTML + itemsHTML;
}

// Próxima jornada

function generarSlidersFondoEscudos(partidos) {
    const container = document.getElementById('contenedor-sliders');
    if (!container) return;

    partidos.forEach(partido => {
        const colorLocal = coloresEquipos[partido.local]?.principal || "#fff";
        const colorVisitante = coloresEquipos[partido.visitante]?.principal || "#fff";
        const nombreEstadioArchivo = partido.estadio.replace(/ /g, "_").toLowerCase();
        const estadioUrl = `img/estadios/${nombreEstadioArchivo}.jpg`;

        const slider = document.createElement('div');
        slider.className = 'slider-item';
        slider.style.backgroundImage = `url('${estadioUrl}')`;

        slider.innerHTML = `
            <div class="capa-oscura"></div>
            <div class="contenido-texto">
                <div class="fila-equipos">
                    <span class="equipo-nombre" style="color: ${colorLocal}">${partido.local}</span>
                    <span class="vs">vs</span>
                    <span class="equipo-nombre" style="color: ${colorVisitante}">${partido.visitante}</span>
                </div>
                <div class="fila-detalles">
                    <div class="fecha-hora">${partido.fecha} | ${partido.hora}</div>
                    <div class="estadio">${partido.estadio}</div>
                    <div class="badge-tv">${partido.tv}</div>
                </div>
            </div>
        `;
        container.appendChild(slider);
    });
}

function moveSlider() {
    const track = document.getElementById('contenedor-sliders');
    if (!track) return;
    const firstItem = track.querySelector('.slider-item');
    if (!firstItem) return;

    track.style.transition = "margin-left 0.8s ease-in-out";
    track.style.marginLeft = "-100%";

    setTimeout(() => {
        track.style.transition = "none";
        track.appendChild(firstItem);
        track.style.marginLeft = "0";
    }, 800);
}

// Tablas de estadísticas

function generarTablasEstadisticas() {
    renderizarTabla("tabla-goleadores", "Máximos Goleadores", goleadores, "Goles", mapeo);
    renderizarTabla("tabla-asistentes", "Máximos Asistentes", asistentes, "Asist.", mapeo);
    renderizarTabla("tabla-zamora", "Porterías Imbatidas", zamora, "Partidos", mapeo);
}

function renderizarTabla(idContenedor, titulo, datos, etiquetaValor, mapeo) {
    const container = document.getElementById(idContenedor);
    if (!container) return;

    let html = `<h3>${titulo}</h3><table><thead><tr>
        <th>#</th><th>Jugador</th><th>Escudo</th><th>${etiquetaValor}</th>
    </tr></thead><tbody>`;

    datos.forEach((jugador, index) => {
        const archivo = mapeo[jugador.equipo] || "default";
        html += `<tr>
            <td>${index + 1}</td>
            <td>${jugador.nombre}</td>
            <td><img src="img/escudos/${archivo}.png" class="tabla-escudo-img" alt="${jugador.equipo}"></td>
            <td class="valor-stat">${jugador.cantidad}</td>
        </tr>`;
    });
    container.innerHTML = html + `</tbody></table>`;
}

// Tarjetas de equipos

document.addEventListener("DOMContentLoaded", async function() {
    try {
        const response = await fetch('json/jugadores.json');
        const dadesJugadors = await response.json();

        generarSlidersFondoEscudos(proximaJornada);
        generarTablasEstadisticas();
        dibujarTarjetasEquipos(dadesJugadors);

        let sliderInterval = setInterval(moveSlider, 3000);
        const sliderContainer = document.querySelector('.slider-container');
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', () => clearInterval(sliderInterval));
            sliderContainer.addEventListener('mouseleave', () => sliderInterval = setInterval(moveSlider, 3000));
        }
    } catch (error) {
        console.error(error);
    }
});

function dibujarTarjetasEquipos(dadesJugadors) {
    const contenedor = document.getElementById('contenedor-tarjetas');
    contenedor.innerHTML = '';

    const ordenPosiciones = {
        "Porter": 1,
        "Defensa": 2,
        "Migcampista": 3,
        "Davanter": 4
    };
    
    dadesEquips.forEach(equipoInfo => {
        const colores = coloresEquipos[equipoInfo.equip];
        const infoCompleta = dadesJugadors.find(e => e.equip === equipoInfo.equip);
        
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-equipo';
        tarjeta.style.setProperty('--color-p', colores.principal);
        tarjeta.style.setProperty('--color-s', colores.secundario);

        const conteFrontal = document.createElement('div');
        conteFrontal.className = 'escudo-frontal-conte';

        const imgEscudo = document.createElement('img');
        imgEscudo.src = equipoInfo.escut;
        imgEscudo.className = 'escudo-frontal';
        
        const nombreEquipo = document.createElement('h3');
        nombreEquipo.textContent = equipoInfo.equip;
        nombreEquipo.className = 'nombre-equipo-frontal';

        conteFrontal.appendChild(imgEscudo);
        conteFrontal.appendChild(nombreEquipo);

        const infoHover = document.createElement('div');
        infoHover.className = 'info-hover';

        if (infoCompleta) {
            const divEntrenador = document.createElement('div');
            divEntrenador.className = 'entrenador-header';
            divEntrenador.innerHTML = `
                <img src="${infoCompleta.entrenador.foto}" alt="">
                <span>${infoCompleta.entrenador.nomPersona}</span>
            `;
            infoHover.appendChild(divEntrenador);

            const jugadoresOrdenados = [...infoCompleta.jugadors].sort((a, b) => {
                if (ordenPosiciones[a.posicio] !== ordenPosiciones[b.posicio]) {
                    return ordenPosiciones[a.posicio] - ordenPosiciones[b.posicio];
                }
                return b.qualitat - a.qualitat;
            });

            const tabla = document.createElement('table');
            tabla.className = 'tabla-jugadores';
            let filas = `<thead><tr><th>#</th><th>Nombre</th><th>Pos</th><th>Med</th></tr></thead><tbody>`;
            
            jugadoresOrdenados.slice(0, 5).forEach(j => {
                filas += `
                    <tr>
                        <td>${j.dorsal}</td>
                        <td>${j.nomPersona.split(' ').pop()}</td>
                        <td>${j.posicio.substring(0, 3)}</td>
                        <td>${j.qualitat}</td>
                    </tr>
                `;
            });
            filas += `</tbody>`;
            tabla.innerHTML = filas;
            infoHover.appendChild(tabla);
        }

        tarjeta.appendChild(conteFrontal);
        tarjeta.appendChild(infoHover);
        contenedor.appendChild(tarjeta);
    });
}

// Clasificación

function dibujarClasificacion() {
    const contenedor = document.getElementById('tabla-clasificacion');
    if (!contenedor) return;

    let tablaHTML = `
        <table class="tabla-liga">
            <thead>
                <tr>
                    <th>Pos</th>
                    <th>Equipo</th>
                    <th>PJ</th>
                    <th>PG</th>
                    <th>PE</th>
                    <th>PP</th>
                    <th>GF</th>
                    <th>GC</th>
                    <th>Pts</th>
                </tr>
            </thead>
            <tbody>
    `;

    dadesClasificacio.forEach(e => {
        let clasePosicion = "";
        if (e.pos <= 4) clasePosicion = "champions";
        else if (e.pos <= 6) clasePosicion = "europa-league";
        else if (e.pos === 7) clasePosicion = "conference";
        else if (e.pos >= 18) clasePosicion = "descenso";

        tablaHTML += `
            <tr class="${clasePosicion}">
                <td>${e.pos}</td>
                <td class="td-equipo">
                    <img src="${e.escut}" class="img-mini-escut">
                    ${e.equip}
                </td>
                <td>${e.pj}</td>
                <td>${e.pg}</td>
                <td>${e.pe}</td>
                <td>${e.pp}</td>
                <td>${e.gf}</td>
                <td>${e.gc}</td>
                <td class="pts-bold">${e.pts}</td>
            </tr>
        `;
    });

    tablaHTML += `</tbody></table>`;
    contenedor.innerHTML = tablaHTML;
}

// 4. INICIALIZACIÓN ÚNICA
document.addEventListener("DOMContentLoaded", async function() {
    try {
        const resJugadores = await fetch('json/jugadores.json');
        const dadesJugadors = await resJugadores.json();

        const resPartidos = await fetch('json/partidos.json');
        const dadesPartidos = await resPartidos.json();

        if (document.getElementById('contenedor-sliders')) generarSlidersFondoEscudos(proximaJornada);
        if (document.querySelector('.contenedor-estadisticas')) generarTablasEstadisticas();
        if (document.getElementById('contenedor-tarjetas')) dibujarTarjetasEquipos(dadesJugadors);
        if (document.getElementById('ticker-track')) generarTickerResultados(dadesPartidos);
        if (document.getElementById('tabla-clasificacion')) dibujarClasificacion(dadesClasificacio);

        const sliderContainer = document.querySelector('.slider-container');
        if (sliderContainer) {
            let sliderInterval = setInterval(moveSlider, 3000);
            sliderContainer.addEventListener('mouseenter', () => clearInterval(sliderInterval));
            sliderContainer.addEventListener('mouseleave', () => sliderInterval = setInterval(moveSlider, 3000));
        }
    } catch (error) {
        console.error(error);
    }
});
