// --- INFO EQUIPOS ---
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

// --- CLASIFICACIÓN ---
const datosClasificacion = [
    { pos: 1, nom: "FC Barcelona", pj: 28, g: 22, e: 4, p: 2, gf: 65, gc: 20, pts: 70, escudo: "img/escudos/barcelona.png" },
    { pos: 2, nom: "Real Madrid CF", pj: 28, g: 20, e: 6, p: 2, gf: 58, gc: 22, pts: 66, escudo: "img/escudos/real-madrid.png" },
    { pos: 3, nom: "Atlético de Madrid", pj: 28, g: 18, e: 5, p: 5, gf: 45, gc: 25, pts: 59, escudo: "img/escudos/atletico-madrid.png" },
    { pos: 4, nom: "Girona FC", pj: 28, g: 17, e: 5, p: 6, gf: 55, gc: 32, pts: 56, escudo: "img/escudos/girona.png" },
    { pos: 5, nom: "Athletic Club", pj: 28, g: 15, e: 8, p: 5, gf: 48, gc: 28, pts: 53, escudo: "img/escudos/athletic.png" },
    { pos: 6, nom: "Real Sociedad", pj: 28, g: 13, e: 10, p: 5, gf: 40, gc: 28, pts: 49, escudo: "img/escudos/real-sociedad.png" },
    { pos: 7, nom: "Real Betis", pj: 28, g: 10, e: 12, p: 6, gf: 34, gc: 31, pts: 42, escudo: "img/escudos/betis.png" },
    { pos: 8, nom: "Valencia CF", pj: 28, g: 11, e: 7, p: 10, gf: 32, gc: 32, pts: 40, escudo: "img/escudos/valencia.png" },
    { pos: 9, nom: "Villarreal CF", pj: 28, g: 10, e: 8, p: 10, gf: 45, gc: 48, pts: 38, escudo: "img/escudos/villarreal.png" },
    { pos: 10, nom: "Getafe CF", pj: 28, g: 9, e: 11, p: 8, gf: 34, gc: 35, pts: 38, escudo: "img/escudos/getafe.png" },
    { pos: 11, nom: "UD Las Palmas", pj: 28, g: 10, e: 7, p: 11, gf: 29, gc: 31, pts: 37, escudo: "img/escudos/las-palmas.png" },
    { pos: 12, nom: "CA Osasuna", pj: 28, g: 10, e: 6, p: 12, gf: 33, gc: 39, pts: 36, escudo: "img/escudos/osasuna.png" },
    { pos: 13, nom: "Deportivo Alavés", pj: 28, g: 8, e: 8, p: 12, gf: 26, gc: 33, pts: 32, escudo: "img/escudos/alaves.png" },
    { pos: 14, nom: "Sevilla FC", pj: 28, g: 6, e: 10, p: 12, gf: 35, gc: 42, pts: 28, escudo: "img/escudos/sevilla.png" },
    { pos: 15, nom: "RCD Mallorca", pj: 28, g: 5, e: 12, p: 11, gf: 24, gc: 35, pts: 27, escudo: "img/escudos/mallorca.png" },
    { pos: 16, nom: "Rayo Vallecano", pj: 28, g: 5, e: 11, p: 12, gf: 23, gc: 38, pts: 26, escudo: "img/escudos/rayo.png" },
    { pos: 17, nom: "RC Celta de Vigo", pj: 28, g: 5, e: 9, p: 14, gf: 30, gc: 43, pts: 24, escudo: "img/escudos/celta.png" },
    { pos: 18, nom: "CD Leganés", pj: 28, g: 4, e: 8, p: 16, gf: 20, gc: 40, pts: 20, escudo: "img/escudos/leganes.png" },
    { pos: 19, nom: "Real Valladolid CF", pj: 28, g: 4, e: 7, p: 17, gf: 19, gc: 45, pts: 19, escudo: "img/escudos/valladolid.png" },
    { pos: 20, nom: "RCD Espanyol", pj: 28, g: 3, e: 8, p: 17, gf: 22, gc: 50, pts: 17, escudo: "img/escudos/espanyol.png" }
];

// --- CLASIFICACIÓN ---
function mostrarClasificacion() {
    const cuerpo = document.getElementById('cuerpo-clasificacion');
    if (!cuerpo) return;
    cuerpo.innerHTML = datosClasificacion.map(e => {
        let zona = e.pos <= 4 ? "zona-champions" : e.pos === 5 ? "zona-europa-league" : e.pos === 6 ? "zona-conference" : e.pos >= 18 ? "zona-descenso" : "";
        return `<tr class="${zona}">
            <td><strong>${e.pos}</strong></td>
            <td class="equipo-tabla"><img src="${e.escudo}" onerror="this.src='img/escudos/default.png'"><p>${e.nom}</p></td>
            <td>${e.pj}</td><td>${e.g}</td><td>${e.e}</td><td>${e.p}</td><td>${e.gf}</td><td>${e.gc}</td><td>${e.gf - e.gc}</td>
            <td class="pts-col"><strong>${e.pts}</strong></td>
        </tr>`;
    }).join('');
}

// --- INDEX: PRÓXIMOS ENCUENTROS ---
function cargarProximosEncuentros() {
    const contenedor = document.getElementById('contenedor-proximos-encuentros');
    if (!contenedor) return;

    const proximos = [
        { local: "BAR", visit: "RMA", fecha: "HOY 21:00", estadio: "Spotify Camp Nou", imgL: "img/escudos/barcelona.png", imgV: "img/escudos/real-madrid.png" },
        { local: "ATM", visit: "ATH", fecha: "MAÑANA 18:30", estadio: "Metropolitano", imgL: "img/escudos/atletico-madrid.png", imgV: "img/escudos/athletic.png" },
        { local: "SEV", visit: "BET", fecha: "DOM 21:00", estadio: "Sánchez-Pizjuán", imgL: "img/escudos/sevilla.png", imgV: "img/escudos/betis.png" },
        { local: "VCF", visit: "VIL", fecha: "LUN 21:00", estadio: "Mestalla", imgL: "img/escudos/valencia.png", imgV: "img/escudos/villarreal.png" },
        { local: "RSO", visit: "GIR", fecha: "MAR 19:00", estadio: "Reale Arena", imgL: "img/escudos/real-sociedad.png", imgV: "img/escudos/girona.png" }
    ];

    contenedor.innerHTML = proximos.map(p => `
        <div class="tarjeta-partido">
            <div class="equipo-partido">
                <img src="${p.imgL}" alt="${p.local}">
                <h2>${p.local}</h2>
            </div>
            <div class="info-partido">
                <h3 class="fecha-partido">${p.fecha}</h3>
                <span class="vs">VS</span>
                <h3 class="estadio-partido">${p.estadio}</h3>
            </div>
            <div class="equipo-partido">
                <img src="${p.imgV}" alt="${p.visit}">
                <h2>${p.visit}</h2>
            </div>
        </div>
    `).join('');
}

// --- INDEX: EQUIPOS ---
async function cargarEquipos() {
    const contenedor = document.querySelector('.div_equipos');
    if (!contenedor) return;
    try {
        const res = await fetch('json/jugadores.json');
        const equipos = await res.json();
        const colores = { "FC Barcelona": "#004d98 50%, #a50044 50%", "Real Madrid CF": "#fff 50%, #fff 50%", "Atlético de Madrid": "#cb3524 50%, #fff 50%", "Villarreal CF": "#ffe600 50%, #ffe600 50%", "Sevilla FC": "#fff 50%, #c4041b 50%", "Real Sociedad": "#0067b1 50%, #fff 50%", "Athletic Club": "#f00 50%, #fff 50%", "Real Betis": "#0bb363 50%, #fff 50%", "Valencia CF": "#fff 50%, #000 50%", "CA Osasuna": "#c4041b 50%, #0c1c33 50%", "Girona FC": "#e20612 50%, #fff 50%", "Rayo Vallecano": "#fff 50%, #e20612 50%", "RC Celta de Vigo": "#87adce 50%, #87adce 50%", "RCD Mallorca": "#e20612 50%, #000 50%", "Deportivo Alavés": "#003ca6 50%, #fff 50%", "UD Las Palmas": "#fff000 50%, #00529f 50%", "Getafe CF": "#00529f 50%, #00529f 50%", "CD Leganés": "#00529f 50%, #fff 50%", "RCD Espanyol": "#007dc5 50%, #fff 50%", "Real Valladolid CF": "#6d2d91 50%, #fff 50%" };

        equipos.sort((a,b) => (b.jugadors.reduce((t,j)=>t+j.qualitat,0)/b.jugadors.length) - (a.jugadors.reduce((t,j)=>t+j.qualitat,0)/a.jugadors.length));
        contenedor.innerHTML = '';
        equipos.forEach(eq => {
            const media = (eq.jugadors.reduce((t,j)=>t+j.qualitat,0)/eq.jugadors.length).toFixed(1);
            const info = INFO_ADICIONAL[eq.equip] || {estadio: "Estadio Municipal"};
            const card = document.createElement('div');
            card.className = 'tarjeta-equipo-horizontal';
            card.style.cssText = `cursor:pointer; border-image: linear-gradient(to right, ${colores[eq.equip] || "#ccc 50%, #ccc 50%"}) 1;`;
            card.innerHTML = `<div class="escudo-contenedor"><img src="${eq.escut}" onerror="this.src='img/equipos/default.png'"></div>
                              <div class="info-derecha"><h3>${eq.equip}</h3><p><strong>Entrenador:</strong> ${eq.entrenador.nomPersona}</p><p><strong>Estadio:</strong> ${info.estadio}</p><p><strong>Media:</strong> ${media}</p></div>`;
            card.onclick = () => window.location.href = `plantilla.html?equipo=${encodeURIComponent(eq.equip)}`;
            contenedor.appendChild(card);
        });
    } catch (e) { console.error(e); }
}

// --- PLANTILLA: JUGADORES ---
async function cargarPlantilla() {
    const contenedor = document.getElementById('contenedor-jugadores');
    if (!contenedor) return;
    const params = new URLSearchParams(window.location.search);
    const nombreEquipo = params.get('equipo');
    if (!nombreEquipo) return;

    const palmares = { "Real Madrid CF": { liga: 36, copa: 20, supercopa: 13, ucl: 15 }, "FC Barcelona": { liga: 27, copa: 31, supercopa: 14, ucl: 5 }, "Atlético de Madrid": { liga: 11, copa: 10, supercopa: 2, ucl: 0 }, "Athletic Club": { liga: 8, copa: 24, supercopa: 3, ucl: 0 }, "Valencia CF": { liga: 6, copa: 8, supercopa: 1, ucl: 0 }, "Real Sociedad": { liga: 2, copa: 3, supercopa: 1, ucl: 0 }, "Sevilla FC": { liga: 1, copa: 5, supercopa: 1, ucl: 0 }, "Real Betis": { liga: 1, copa: 3, supercopa: 0, ucl: 0 }, "RCD Espanyol": { liga: 0, copa: 4, supercopa: 0, ucl: 0 }, "RCD Mallorca": { liga: 0, copa: 1, supercopa: 1, ucl: 0 } };
    const ordenPos = { "PORTER": 1, "DEFENSA": 2, "MIGCAMPISTA": 3, "DAVANTER": 4 };
    const tradPos = { "PORTER": "Portero", "DEFENSA": "Defensa", "MIGCAMPISTA": "Mediocentro", "DAVANTER": "Delantero" };

    try {
        const res = await fetch('json/jugadores.json');
        const equipos = await res.json();
        const eq = equipos.find(e => e.equip === nombreEquipo);
        if (!eq) return;

        document.getElementById('nombre-equipo-titulo').innerText = eq.equip;
        const info = INFO_ADICIONAL[nombreEquipo] || { estadio: "N/A", fundado: "N/A" };
        document.querySelector('.info-equipo').innerHTML = `<div class="contenedor-info-general">
            <div class="dato-info"><h3>Equipo</h3><p>${eq.equip}</p></div><div class="dato-info"><h3>Entrenador</h3><p>${eq.entrenador.nomPersona}</p></div>
            <div class="dato-info"><h3>Estadio</h3><p>${info.estadio}</p></div><div class="dato-info"><h3>Fundado</h3><p>${info.fundado}</p></div></div>`;

        const trf = palmares[nombreEquipo] || { liga: 0, copa: 0, supercopa: 0, ucl: 0 };
        document.querySelector('.palmares').innerHTML = `<div class="contenedor-palmares">
            <div class="item-palmares"><img src="img/trofeos/liga.png"><h3>La Liga</h3><span class="cantidad">${trf.liga}</span></div>
            <div class="item-palmares"><img src="img/trofeos/copa.png"><h3>Copa del Rey</h3><span class="cantidad">${trf.copa}</span></div>
            <div class="item-palmares"><img src="img/trofeos/supercopa.png"><h3>Supercopa</h3><span class="cantidad">${trf.supercopa}</span></div>
            <div class="item-palmares"><img src="img/trofeos/ucl.png"><h3>UCL</h3><span class="cantidad">${trf.ucl}</span></div></div>`;

        dibujarCampoTactico(eq.jugadors, document.getElementById('canvas-tactico'), eq.entrenador);

        contenedor.innerHTML = eq.jugadors.sort((a,b) => (ordenPos[a.posicio.toUpperCase()] || 99) - (ordenPos[b.posicio.toUpperCase()] || 99) || b.qualitat - a.qualitat).map(j => `
            <div class="tarjeta-equipo-horizontal">
                <div class="escudo-contenedor"><img src="${j.foto}" onerror="this.src='img/logos/default_player.png'"></div>
                <div class="info-derecha"><h3>${j.nomPersona}</h3><p><strong>Posición:</strong> ${tradPos[j.posicio.toUpperCase()] || j.posicio}</p><p><strong>Dorsal:</strong> ${j.dorsal}</p><p><strong>Calidad:</strong> ${j.qualitat}</p></div>
            </div>`).join('');
    } catch (e) { console.error(e); }
}

// --- PLANTILLA: CAMPO ---
function dibujarCampoTactico(jugadores, contenedor, entrenador) {
    const seleccionados = [];
    const usados = new Set();
    const conteo = { PORTER: 0, DEFENSA: 0, MIGCAMPISTA: 0, DAVANTER: 0 };
    ["PORTER", "DEFENSA", "MIGCAMPISTA", "DAVANTER"].forEach(p => {
        jugadores.filter(j => j.posicio.toUpperCase() === p).sort((a,b)=>b.qualitat-a.qualitat).forEach(j => {
            if (seleccionados.length < 5 && !usados.has(j.nomPersona) && conteo[p] < 2) {
                seleccionados.push({...j, posT: p}); usados.add(j.nomPersona); conteo[p]++;
            }
        });
    });
    
    const coords = { "PORTER": [{t:50,l:12}], "DEFENSA": [{t:50,l:32},{t:30,l:32}], "MIGCAMPISTA": [{t:50,l:55},{t:25,l:55}], "DAVANTER": [{t:50,l:82},{t:35,l:82}], "COMODIN": [{t:15,l:45}] };
    let vConteo = { PORTER: 0, DEFENSA: 0, MIGCAMPISTA: 0, DAVANTER: 0, COMODIN: 0 };
    
    let html = `<div class="campo-futbol"><div class="linea linea-central"></div><div class="circulo-central"></div><div class="area izquierda"></div><div class="area derecha"></div><div class="zona-banquillo"><div class="ficha-entrenador"><img src="${entrenador.foto}" onerror="this.src='img/logos/default_player.png'"></div><div class="info-entrenador"><span>Mister</span><h4>${entrenador.nomPersona}</h4></div></div>`;
    seleccionados.forEach(j => {
        const p = coords[j.posT][vConteo[j.posT]] || coords["COMODIN"][0];
        vConteo[j.posT]++;
        html += `<div class="ficha-jugador local" style="top:${p.t}%; left:${p.l}%; transform:translate(-50%,-50%)"><div class="contenedor-foto-ficha"><img src="${j.foto}" onerror="this.src='img/logos/default_player.png'"></div><div class="nombre-ficha">${j.nomPersona.split(' ').pop()}</div></div>`;
    });
    contenedor.innerHTML = html + `</div>`;
}

// --- RESULTADOS ---
async function cargarResultados() {
    const contenedor = document.getElementById('contenedor-partidos-plantilla');
    if (!contenedor) return;
    try {
        const res = await fetch('json/partidos.json');
        const partidos = await res.json();
        contenedor.innerHTML = partidos.map(p => {
            const sL = INFO_ADICIONAL[p.equip_local.nom]?.siglas || p.equip_local.nom.substring(0,3).toUpperCase();
            const sV = INFO_ADICIONAL[p.equip_visitant.nom]?.siglas || p.equip_visitant.nom.substring(0,3).toUpperCase();
            return `<div class="tarjeta-partido-anterior"><div class="equipo-partido-anterior"><img src="${p.equip_local.escut}"><h2>${sL}</h2><div class="subrayado-verde-anterior"></div></div>
                    <div class="info-partido-anterior"><h3 class="fecha-partido-anterior">${p.data.split('T')[0]}</h3><h3 class="vs-anterior">${p.resultat}</h3></div>
                    <div class="equipo-partido-anterior"><img src="${p.equip_visitant.escut}"><h2>${sV}</h2><div class="subrayado-verde-anterior"></div></div></div>`;
        }).join('');
    } catch (e) { console.error(e); }
}

// --- FORMULARIO ---
function initFormulario() {
    const select = document.getElementById('equipo-select');
    if (!select) return;
    Object.keys(INFO_ADICIONAL).sort().forEach(eq => {
        const opt = document.createElement('option');
        opt.value = opt.textContent = eq;
        select.appendChild(opt);
    });
    const toggle = () => document.getElementById('seccion-posiciones').style.display = document.getElementById('tipo-jugador').checked ? 'block' : 'none';
    document.getElementById('tipo-jugador').onchange = toggle;
    document.getElementById('tipo-entrenador').onchange = toggle;
}

// --- INICIALIZADOR ÚNICO ---
document.addEventListener('DOMContentLoaded', () => {
    mostrarClasificacion();
    cargarEquipos();
    cargarPlantilla();
    cargarResultados();
    initFormulario();
    cargarProximosEncuentros();
});