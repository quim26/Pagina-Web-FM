// Cargar header y footer

fetch('header.html').then(res => res.text()).then(data => { const h = document.getElementById('header'); if (h) h.innerHTML = data; }).catch(e => console.error('Error header:', e));
fetch('footer.html').then(res => res.text()).then(data => { const f = document.getElementById('footer'); if (f) f.innerHTML = data; }).catch(e => console.error('Error footer:', e));

// -- Cosas guardadas --

const INFO_ADICIONAL = {
    "FC Barcelona": { estadio: "Spotify Camp Nou", fundado: "1899", siglas: "BAR" },
    "Real Madrid CF": { estadio: "Santiago Bernabéu", fundado: "1902", siglas: "RMA" },
    "Atlético de Madrid": { estadio: "Cívitas Metropolitano", fundado: "1903", siglas: "ATM" },
    "Villarreal CF": { estadio: "Estadio de la Cerámica", fundado: "1923", siglas: "VIL" },
    "Sevilla FC": { estadio: "Ramón Sánchez-Pizjuán", fundado: "1890", siglas: "SEV" },
    "Real Sociedad": { estadio: "Reale Arena", fundado: "1909", siglas: "RSO" },
    "Athletic Club": { estadio: "San Mamés", fundado: "1898", siglas: "ATH" },
    "Real Betis": { estadio: "Benito Villamarín", fundado: "1907", siglas: "BET" },
    "Valencia CF": { estadio: "Mestalla", fundado: "1919", siglas: "VCF" },
    "CA Osasuna": { estadio: "El Sadar", fundado: "1920", siglas: "OSA" },
    "Girona FC": { estadio: "Montilivi", fundado: "1930", siglas: "GIR" },
    "Rayo Vallecano": { estadio: "Estadio de Vallecas", fundado: "1924", siglas: "RAY" },
    "RC Celta de Vigo": { estadio: "Abanca-Balaídos", fundado: "1923", siglas: "CEL" },
    "RCD Mallorca": { estadio: "Visit Mallorca Estadi", fundado: "1916", siglas: "MLL" },
    "Deportivo Alavés": { estadio: "Mendizorroza", fundado: "1921", siglas: "ALA" },
    "UD Las Palmas": { estadio: "Estadio de Gran Canaria", fundado: "1949", siglas: "LPA" },
    "Getafe CF": { estadio: "Coliseum", fundado: "1983", siglas: "GET" },
    "CD Leganés": { estadio: "Estadio Municipal de Butarque", fundado: "1928", siglas: "LEG" },
    "RCD Espanyol": { estadio: "RCDE Stadium", fundado: "1900", siglas: "ESP" },
    "Real Valladolid CF": { estadio: "Estadio José Zorrilla", fundado: "1928", siglas: "VLD" }
};

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

const clasificacionLiga = [
    { pos: 1, equipo: "FC Barcelona", pj: 19, g: 15, e: 1, p: 3, gf: 50, gc: 18, pts: 46 },
    { pos: 2, equipo: "Real Madrid", pj: 19, g: 13, e: 4, p: 2, gf: 38, gc: 15, pts: 43 },
    { pos: 3, equipo: "Atlético de Madrid", pj: 19, g: 12, e: 5, p: 2, gf: 31, gc: 14, pts: 41 },
    { pos: 4, equipo: "Villarreal CF", pj: 19, g: 11, e: 4, p: 4, gf: 33, gc: 25, pts: 37 },
    { pos: 5, equipo: "Athletic Club", pj: 19, g: 9, e: 6, p: 4, gf: 29, gc: 20, pts: 33 },
    { pos: 6, equipo: "Real Sociedad", pj: 19, g: 8, e: 5, p: 6, gf: 22, gc: 19, pts: 29 },
    { pos: 7, equipo: "Girona FC", pj: 19, g: 8, e: 4, p: 7, gf: 28, gc: 24, pts: 28 },
    { pos: 8, equipo: "RCD Mallorca", pj: 19, g: 8, e: 3, p: 8, gf: 19, gc: 18, pts: 27 },
    { pos: 9, equipo: "Real Betis", pj: 19, g: 7, e: 6, p: 6, gf: 21, gc: 22, pts: 27 },
    { pos: 10, equipo: "CA Osasuna", pj: 19, g: 7, e: 5, p: 7, gf: 23, gc: 27, pts: 26 },
    { pos: 11, equipo: "Rayo Vallecano", pj: 19, g: 6, e: 6, p: 7, gf: 20, gc: 21, pts: 24 },
    { pos: 12, equipo: "Sevilla FC", pj: 19, g: 6, e: 5, p: 8, gf: 22, gc: 26, pts: 23 },
    { pos: 13, equipo: "Celta de Vigo", pj: 19, g: 6, e: 4, p: 9, gf: 27, gc: 32, pts: 22 },
    { pos: 14, equipo: "Deportivo Alavés", pj: 19, g: 6, e: 3, p: 10, gf: 21, gc: 30, pts: 21 },
    { pos: 15, equipo: "CD Leganés", pj: 19, g: 5, e: 5, p: 9, gf: 16, gc: 24, pts: 20 },
    { pos: 16, equipo: "Getafe CF", pj: 19, g: 3, e: 9, p: 7, gf: 12, gc: 18, pts: 18 },
    { pos: 17, equipo: "UD Las Palmas", pj: 19, g: 4, e: 5, p: 10, gf: 19, gc: 31, pts: 17 },
    { pos: 18, equipo: "Valencia CF", pj: 19, g: 3, e: 6, p: 10, gf: 15, gc: 29, pts: 15 },
    { pos: 19, equipo: "Real Valladolid", pj: 19, g: 3, e: 5, p: 11, gf: 14, gc: 35, pts: 14 },
    { pos: 20, equipo: "RCD Espanyol", pj: 19, g: 3, e: 4, p: 12, gf: 18, gc: 36, pts: 13 }
];

const proximaJornada = [
    {
        local: "Real Madrid",
        visitante: "RCD Mallorca",
        fecha: "2026-03-20",
        hora: "21:00",
        estadio: "Santiago Bernabéu",
        tv: "DAZN"
    },
    {
        local: "FC Barcelona",
        visitante: "Getafe CF",
        fecha: "2026-03-21",
        hora: "16:15",
        estadio: "Spotify Camp Nou",
        tv: "Movistar+ LaLiga"
    },
    {
        local: "Villarreal CF",
        visitante: "Valencia CF",
        fecha: "2026-03-21",
        hora: "18:30",
        estadio: "Estadio de la Cerámica",
        tv: "DAZN"
    },
    {
        local: "Atlético de Madrid",
        visitante: "Sevilla FC",
        fecha: "2026-03-21",
        hora: "21:00",
        estadio: "Cívitas Metropolitano",
        tv: "Movistar+ LaLiga"
    },
    {
        local: "Real Sociedad",
        visitante: "Athletic Club",
        fecha: "2026-03-22",
        hora: "14:00",
        estadio: "Reale Arena",
        tv: "DAZN"
    },
    {
        local: "Girona FC",
        visitante: "Real Valladolid",
        fecha: "2026-03-22",
        hora: "16:15",
        estadio: "Montilivi",
        tv: "Movistar+ LaLiga"
    },
    {
        local: "Real Betis",
        visitante: "Celta de Vigo",
        fecha: "2026-03-22",
        hora: "18:30",
        estadio: "Benito Villamarín",
        tv: "DAZN"
    },
    {
        local: "CA Osasuna",
        visitante: "Rayo Vallecano",
        fecha: "2026-03-22",
        hora: "21:00",
        estadio: "El Sadar",
        tv: "Movistar+ LaLiga"
    },
    {
        local: "UD Las Palmas",
        visitante: "CD Leganés",
        fecha: "2026-03-23",
        hora: "21:00",
        estadio: "Gran Canaria",
        tv: "GOL Play"
    },
    {
        local: "RCD Espanyol",
        visitante: "Deportivo Alavés",
        fecha: "2026-03-23",
        hora: "21:00",
        estadio: "Stage Front Stadium",
        tv: "DAZN"
    }
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

// -- Inicio -- 

// Sliders de fondo con escudos y detalles de partidos próximos

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

document.addEventListener("DOMContentLoaded", function() {
    generarSlidersFondoEscudos(proximaJornada);

    const track = document.getElementById('contenedor-sliders');
    const container = document.querySelector('.slider-container');
    const intervalTime = 3000;
    let sliderInterval;

    function moveSlider() {
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

    function startInterval() {
        sliderInterval = setInterval(moveSlider, intervalTime);
    }

    startInterval();

    if (container) {
        container.addEventListener('mouseenter', () => clearInterval(sliderInterval));
        container.addEventListener('mouseleave', startInterval);
    }
});

function moveSlider() {
    const track = document.getElementById('contenedor-sliders');
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
    renderizarTabla("tabla-goleadores", "Máximos Goleadores", goleadores, "Goles");
    renderizarTabla("tabla-asistentes", "Máximos Asistentes", asistentes, "Asist.");
    renderizarTabla("tabla-zamora", "Porterías Imbatidas", zamora, "Partidos");
}

function renderizarTabla(idContenedor, titulo, datos, etiquetaValor) {
    const container = document.getElementById(idContenedor);
    if (!container) return;

    let html = `
        <h3>${titulo}</h3>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Jugador</th>
                    <th>${etiquetaValor}</th>
                </tr>
            </thead>
            <tbody>
    `;

    datos.forEach((jugador, index) => {
        html += `
            <tr>
                <td>${index + 1}</td>
                <td>
                    <span class="jugador-nombre">${jugador.nombre}</span>
                    <br><small class="equipo-subtexto">${jugador.equipo}</small>
                </td>
                <td class="valor-stat">${jugador.cantidad}</td>
            </tr>
        `;
    });

    html += `</tbody></table>`;
    container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function() {
    generarSlidersFondoEscudos(proximaJornada);
    generarTablasEstadisticas();
    // ... resto de tu código de movimiento ...
});