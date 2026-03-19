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

// 3. FUNCIONES DE RENDERIZADO

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

function dibujarTarjetasEquipos() {
    const contenedor = document.getElementById('contenedor-tarjetas');
    
    dadesEquips.forEach(equipoInfo => {
        const colores = coloresEquipos[equipoInfo.equip];
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-equipo';

        tarjeta.style.backgroundImage = `
            url('${equipoInfo.escut}'), 
            linear-gradient(135deg, ${colores.principal} 0%, ${colores.secundario} 100%)
        `;
        
        tarjeta.style.backgroundSize = '50%, cover';
        tarjeta.style.backgroundPosition = 'center 40%, center';
        tarjeta.style.backgroundRepeat = 'no-repeat, no-repeat';

        const nombre = document.createElement('h3');
        nombre.textContent = equipoInfo.equip;

        tarjeta.appendChild(nombre);
        contenedor.appendChild(tarjeta);
    });
}

// 4. INICIALIZACIÓN ÚNICA
document.addEventListener("DOMContentLoaded", function() {
    generarSlidersFondoEscudos(proximaJornada);
    generarTablasEstadisticas();
    dibujarTarjetasEquipos();

    // Iniciar Intervalo Slider
    let sliderInterval = setInterval(moveSlider, 3000);

    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', () => clearInterval(sliderInterval));
        sliderContainer.addEventListener('mouseleave', () => sliderInterval = setInterval(moveSlider, 3000));
    }
});