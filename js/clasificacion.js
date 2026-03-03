const datosClasificacion = [
    { pos: 1, nom: "FC Barcelona", pj: 28, g: 22, e: 4, p: 2, gf: 65, gc: 20, pts: 70, escut: "img/escudos/barcelona.png" },
    { pos: 2, nom: "Real Madrid CF", pj: 28, g: 20, e: 6, p: 2, gf: 58, gc: 22, pts: 66, escut: "img/escudos/real-madrid.png" },
    { pos: 3, nom: "Atlético de Madrid", pj: 28, g: 18, e: 5, p: 5, gf: 45, gc: 25, pts: 59, escut: "img/escudos/atletico-madrid.png" },
    { pos: 4, nom: "Girona FC", pj: 28, g: 17, e: 5, p: 6, gf: 55, gc: 32, pts: 56, escut: "img/escudos/girona.png" },
    { pos: 5, nom: "Athletic Club", pj: 28, g: 15, e: 8, p: 5, gf: 48, gc: 28, pts: 53, escut: "img/escudos/athletic.png" },
    { pos: 6, nom: "Real Sociedad", pj: 28, g: 13, e: 10, p: 5, gf: 40, gc: 28, pts: 49, escut: "img/escudos/real-sociedad.png" },
    { pos: 7, nom: "Real Betis", pj: 28, g: 10, e: 12, p: 6, gf: 34, gc: 31, pts: 42, escut: "img/escudos/betis.png" },
    { pos: 8, nom: "Valencia CF", pj: 28, g: 11, e: 7, p: 10, gf: 32, gc: 32, pts: 40, escut: "img/escudos/valencia.png" },
    { pos: 9, nom: "Villarreal CF", pj: 28, g: 10, e: 8, p: 10, gf: 45, gc: 48, pts: 38, escut: "img/escudos/villarreal.png" },
    { pos: 10, nom: "Getafe CF", pj: 28, g: 9, e: 11, p: 8, gf: 34, gc: 35, pts: 38, escut: "img/escudos/getafe.png" },
    { pos: 11, nom: "UD Las Palmas", pj: 28, g: 10, e: 7, p: 11, gf: 29, gc: 31, pts: 37, escut: "img/escudos/las-palmas.png" },
    { pos: 12, nom: "CA Osasuna", pj: 28, g: 10, e: 6, p: 12, gf: 33, gc: 39, pts: 36, escut: "img/escudos/osasuna.png" },
    { pos: 13, nom: "Deportivo Alavés", pj: 28, g: 8, e: 8, p: 12, gf: 26, gc: 33, pts: 32, escut: "img/escudos/alaves.png" },
    { pos: 14, nom: "Sevilla FC", pj: 28, g: 6, e: 10, p: 12, gf: 35, gc: 42, pts: 28, escut: "img/escudos/sevilla.png" },
    { pos: 15, nom: "RCD Mallorca", pj: 28, g: 5, e: 12, p: 11, gf: 24, gc: 35, pts: 27, escut: "img/escudos/mallorca.png" },
    { pos: 16, nom: "Rayo Vallecano", pj: 28, g: 5, e: 11, p: 12, gf: 23, gc: 38, pts: 26, escut: "img/escudos/rayo.png" },
    { pos: 17, nom: "RC Celta de Vigo", pj: 28, g: 5, e: 9, p: 14, gf: 30, gc: 43, pts: 24, escut: "img/escudos/celta.png" },
    { pos: 18, nom: "CD Leganés", pj: 28, g: 4, e: 8, p: 16, gf: 20, gc: 40, pts: 20, escut: "img/escudos/leganes.png" },
    { pos: 19, nom: "Real Valladolid CF", pj: 28, g: 4, e: 7, p: 17, gf: 19, gc: 45, pts: 19, escut: "img/escudos/valladolid.png" },
    { pos: 20, nom: "RCD Espanyol", pj: 28, g: 3, e: 8, p: 17, gf: 22, gc: 50, pts: 17, escut: "img/escudos/espanyol.png" }
];

function mostrarClasificacion() {
    const cuerpo = document.getElementById('cuerpo-clasificacion');
    if (!cuerpo) return;

    cuerpo.innerHTML = datosClasificacion.map(e => {
        let claseZona = "";
        
        if (e.pos <= 4) claseZona = "zona-champions";
        else if (e.pos === 5) claseZona = "zona-europa-league";
        else if (e.pos === 6) claseZona = "zona-conference";
        else if (e.pos >= 18) claseZona = "zona-descenso";

        return `
            <tr class="${claseZona}">
                <td><strong>${e.pos}</strong></td>
                <td class="equipo-tabla">
                    <img src="${e.escut}" alt="${e.nom}" onerror="this.src='img/escudos/default.png'">
                    <p>${e.nom}</p>
                </td>
                <td>${e.pj}</td>
                <td>${e.g}</td>
                <td>${e.e}</td>
                <td>${e.p}</td>
                <td>${e.gf}</td>
                <td>${e.gc}</td>
                <td>${e.gf - e.gc}</td>
                <td class="pts-col"><strong>${e.pts}</strong></td>
            </tr>
        `;
    }).join('');
}

document.addEventListener('DOMContentLoaded', mostrarClasificacion);