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

function mostrarClasificacion() {
    const cuerpo = document.getElementById('cuerpo-clasificacion');
    if (!cuerpo) return;
    cuerpo.innerHTML = ''; 
    datosClasificacion.forEach(e => {
        const fila = document.createElement('tr');
        if (e.pos <= 4) fila.className = "zona-champions";
        else if (e.pos === 5) fila.className = "zona-europa-league";
        else if (e.pos === 6) fila.className = "zona-conference";
        else if (e.pos >= 18) fila.className = "zona-descenso";

        const tdPos = document.createElement('td');
        const fuerte = document.createElement('strong');
        fuerte.textContent = e.pos;
        tdPos.appendChild(fuerte);

        const tdEquipo = document.createElement('td');
        tdEquipo.className = "equipo-tabla";
        const img = document.createElement('img');
        img.src = e.escudo;
        img.onerror = () => img.src = 'img/escudos/default.png';
        const pNom = document.createElement('p');
        pNom.textContent = e.nom;
        tdEquipo.append(img, pNom);

        const celdas = [e.pj, e.g, e.e, e.p, e.gf, e.gc, e.gf - e.gc];
        const tdsDatos = celdas.map(dato => {
            const td = document.createElement('td');
            td.textContent = dato;
            return td;
        });

        const tdPts = document.createElement('td');
        tdPts.className = "pts-col";
        const fuertePts = document.createElement('strong');
        fuertePts.textContent = e.pts;
        tdPts.appendChild(fuertePts);

        fila.append(tdPos, tdEquipo, ...tdsDatos, tdPts);
        cuerpo.appendChild(fila);
    });
}

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

    contenedor.innerHTML = '';
    proximos.forEach(p => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-partido';

        const crearEquipo = (imgSrc, nombre) => {
            const div = document.createElement('div');
            div.className = 'equipo-partido';
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = nombre;
            const h2 = document.createElement('h2');
            h2.textContent = nombre;
            div.append(img, h2);
            return div;
        };

        const info = document.createElement('div');
        info.className = 'info-partido';
        const h3Fecha = document.createElement('h3');
        h3Fecha.className = 'fecha-partido';
        h3Fecha.textContent = p.fecha;
        const vs = document.createElement('span');
        vs.className = 'vs';
        vs.textContent = 'VS';
        const h3Estadio = document.createElement('h3');
        h3Estadio.className = 'estadio-partido';
        h3Estadio.textContent = p.estadio;
        info.append(h3Fecha, vs, h3Estadio);

        tarjeta.append(crearEquipo(p.imgL, p.local), info, crearEquipo(p.imgV, p.visit));
        contenedor.appendChild(tarjeta);
    });
}

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
            
            const escCont = document.createElement('div');
            escCont.className = 'escudo-contenedor';
            const img = document.createElement('img');
            img.src = eq.escut;
            img.onerror = () => img.src = 'img/equipos/default.png';
            escCont.appendChild(img);

            const infoD = document.createElement('div');
            infoD.className = 'info-derecha';
            const h3 = document.createElement('h3');
            h3.textContent = eq.equip;
            
            const pEnt = document.createElement('p');
            const strEnt = document.createElement('strong');
            strEnt.textContent = 'Entrenador: ';
            pEnt.append(strEnt, eq.entrenador.nomPersona);

            const pEst = document.createElement('p');
            const strEst = document.createElement('strong');
            strEst.textContent = 'Estadio: ';
            pEst.append(strEst, info.estadio);

            const pMed = document.createElement('p');
            const strMed = document.createElement('strong');
            strMed.textContent = 'Media: ';
            pMed.append(strMed, media);

            infoD.append(h3, pEnt, pEst, pMed);
            card.append(escCont, infoD);
            card.onclick = () => window.location.href = `plantilla.html?equipo=${encodeURIComponent(eq.equip)}`;
            contenedor.appendChild(card);
        });
    } catch (e) { console.error(e); }
}

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

        document.getElementById('nombre-equipo-titulo').textContent = eq.equip;
        
        const info = INFO_ADICIONAL[nombreEquipo] || { estadio: "N/A", fundado: "N/A" };
        const infoEq = document.querySelector('.info-equipo');
        infoEq.innerHTML = '';
        const contInfoGen = document.createElement('div');
        contInfoGen.className = 'contenedor-info-general';

        const crearDato = (titulo, valor) => {
            const div = document.createElement('div');
            div.className = 'dato-info';
            const h3 = document.createElement('h3');
            h3.textContent = titulo;
            const p = document.createElement('p');
            p.textContent = valor;
            div.append(h3, p);
            return div;
        };

        contInfoGen.append(
            crearDato('Equipo', eq.equip),
            crearDato('Entrenador', eq.entrenador.nomPersona),
            crearDato('Estadio', info.estadio),
            crearDato('Fundado', info.fundado)
        );
        infoEq.appendChild(contInfoGen);

        const trf = palmares[nombreEquipo] || { liga: 0, copa: 0, supercopa: 0, ucl: 0 };
        const palmaresDiv = document.querySelector('.palmares');
        palmaresDiv.innerHTML = '';
        const contPalmares = document.createElement('div');
        contPalmares.className = 'contenedor-palmares';

        const trofeos = [
            { t: 'La Liga', c: trf.liga, img: 'liga.png' },
            { t: 'Copa del Rey', c: trf.copa, img: 'copa.png' },
            { t: 'Supercopa', c: trf.supercopa, img: 'supercopa.png' },
            { t: 'UCL', c: trf.ucl, img: 'ucl.png' }
        ];

        trofeos.forEach(trofeo => {
            const div = document.createElement('div');
            div.className = 'item-palmares';
            const img = document.createElement('img');
            img.src = `img/trofeos/${trofeo.img}`;
            const h3 = document.createElement('h3');
            h3.textContent = trofeo.t;
            const span = document.createElement('span');
            span.className = 'cantidad';
            span.textContent = trofeo.c;
            div.append(img, h3, span);
            contPalmares.appendChild(div);
        });
        palmaresDiv.appendChild(contPalmares);

        dibujarCampoTactico(eq.jugadors, document.getElementById('canvas-tactico'), eq.entrenador);

        contenedor.innerHTML = '';
        eq.jugadors.sort((a,b) => (ordenPos[a.posicio.toUpperCase()] || 99) - (ordenPos[b.posicio.toUpperCase()] || 99) || b.qualitat - a.qualitat).forEach(j => {
            const card = document.createElement('div');
            card.className = 'tarjeta-equipo-horizontal';
            
            const escCont = document.createElement('div');
            escCont.className = 'escudo-contenedor';
            const img = document.createElement('img');
            img.src = j.foto;
            img.onerror = () => img.src = 'img/logos/default_player.png';
            escCont.appendChild(img);

            const infoD = document.createElement('div');
            infoD.className = 'info-derecha';
            const h3 = document.createElement('h3');
            h3.textContent = j.nomPersona;

            const crearP = (label, valor) => {
                const p = document.createElement('p');
                const str = document.createElement('strong');
                str.textContent = label;
                p.append(str, valor);
                return p;
            };

            infoD.append(
                h3,
                crearP('Posición: ', tradPos[j.posicio.toUpperCase()] || j.posicio),
                crearP('Dorsal: ', j.dorsal),
                crearP('Calidad: ', j.qualitat)
            );
            card.append(escCont, infoD);
            contenedor.appendChild(card);
        });
    } catch (e) { console.error(e); }
}

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
    
    contenedor.innerHTML = '';
    const campo = document.createElement('div');
    campo.className = 'campo-futbol';

    const elementosEstaticos = [
        { c: 'linea linea-central' },
        { c: 'circulo-central' },
        { c: 'area izquierda' },
        { c: 'area derecha' }
    ];
    elementosEstaticos.forEach(el => {
        const div = document.createElement('div');
        div.className = el.c;
        campo.appendChild(div);
    });

    const banquillo = document.createElement('div');
    banquillo.className = 'zona-banquillo';
    const fEnt = document.createElement('div');
    fEnt.className = 'ficha-entrenador';
    const imgEnt = document.createElement('img');
    imgEnt.src = entrenador.foto;
    imgEnt.onerror = () => imgEnt.src = 'img/logos/default_player.png';
    fEnt.appendChild(imgEnt);
    const iEnt = document.createElement('div');
    iEnt.className = 'info-entrenador';
    const spanM = document.createElement('span');
    spanM.textContent = 'Mister';
    const h4Ent = document.createElement('h4');
    h4Ent.textContent = entrenador.nomPersona;
    iEnt.append(spanM, h4Ent);
    banquillo.append(fEnt, iEnt);
    campo.appendChild(banquillo);

    seleccionados.forEach(j => {
        const p = coords[j.posT][vConteo[j.posT]] || coords["COMODIN"][0];
        vConteo[j.posT]++;
        const ficha = document.createElement('div');
        ficha.className = 'ficha-jugador local';
        ficha.style.cssText = `top:${p.t}%; left:${p.l}%; transform:translate(-50%,-50%)`;
        const fotoCont = document.createElement('div');
        fotoCont.className = 'contenedor-foto-ficha';
        const imgJ = document.createElement('img');
        imgJ.src = j.foto;
        imgJ.onerror = () => imgJ.src = 'img/logos/default_player.png';
        fotoCont.appendChild(imgJ);
        const nomF = document.createElement('div');
        nomF.className = 'nombre-ficha';
        nomF.textContent = j.nomPersona.split(' ').pop();
        ficha.append(fotoCont, nomF);
        campo.appendChild(ficha);
    });
    contenedor.appendChild(campo);
}

async function cargarResultados() {
    const contenedor = document.getElementById('contenedor-partidos-plantilla');
    if (!contenedor) return;
    try {
        const res = await fetch('json/partidos.json');
        const partidos = await res.json();
        contenedor.innerHTML = '';
        partidos.forEach(p => {
            const sL = INFO_ADICIONAL[p.equip_local.nom]?.siglas || p.equip_local.nom.substring(0,3).toUpperCase();
            const sV = INFO_ADICIONAL[p.equip_visitant.nom]?.siglas || p.equip_visitant.nom.substring(0,3).toUpperCase();
            
            const tarjeta = document.createElement('div');
            tarjeta.className = 'tarjeta-partido-anterior';

            const crearEq = (esc, sig) => {
                const div = document.createElement('div');
                div.className = 'equipo-partido-anterior';
                const img = document.createElement('img');
                img.src = esc;
                const h2 = document.createElement('h2');
                h2.textContent = sig;
                const sub = document.createElement('div');
                sub.className = 'subrayado-verde-anterior';
                div.append(img, h2, sub);
                return div;
            };

            const info = document.createElement('div');
            info.className = 'info-partido-anterior';
            const h3F = document.createElement('h3');
            h3F.className = 'fecha-partido-anterior';
            h3F.textContent = p.data.split('T')[0];
            const h3R = document.createElement('h3');
            h3R.className = 'vs-anterior';
            h3R.textContent = p.resultat;
            info.append(h3F, h3R);

            tarjeta.append(crearEq(p.equip_local.escut, sL), info, crearEq(p.equip_visitant.escut, sV));
            contenedor.appendChild(tarjeta);
        });
    } catch (e) { console.error(e); }
}

function initFormulario() {
    const select = document.getElementById('equipo-select');
    if (!select) return;
    Object.keys(INFO_ADICIONAL).sort().forEach(eq => {
        const opt = document.createElement('option');
        opt.value = eq;
        opt.textContent = eq;
        select.appendChild(opt);
    });
    const toggle = () => document.getElementById('seccion-posiciones').style.display = document.getElementById('tipo-jugador').checked ? 'block' : 'none';
    document.getElementById('tipo-jugador').onchange = toggle;
    document.getElementById('tipo-entrenador').onchange = toggle;
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarClasificacion();
    cargarEquipos();
    cargarPlantilla();
    cargarResultados();
    initFormulario();
    cargarProximosEncuentros();
});
