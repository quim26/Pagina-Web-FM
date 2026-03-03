async function cargarTodosLosResultados() {
    const contenedor = document.getElementById('contenedor-partidos-plantilla');
    if (!contenedor) return;

    try {
        const respuesta = await fetch('json/partidos.json');
        if (!respuesta.ok) throw new Error("Error al cargar json/partidos.json");
        
        const partidos = await respuesta.json();

        const siglasEquipos = {
            "FC Barcelona": "BAR",
            "Real Madrid CF": "RMA",
            "Atlético de Madrid": "ATM",
            "Villarreal CF": "VIL",
            "Sevilla FC": "SEV",
            "Real Sociedad": "RSO",
            "Athletic Club": "ATH",
            "Real Betis": "BET",
            "Valencia CF": "VCF",
            "CA Osasuna": "OSA",
            "Girona FC": "GIR",
            "Rayo Vallecano": "RAY",
            "RC Celta de Vigo": "CEL",
            "RCD Mallorca": "MLL",
            "Deportivo Alavés": "ALA",
            "UD Las Palmas": "LPA",
            "Getafe CF": "GET",
            "CD Leganés": "LEG",
            "RCD Espanyol": "ESP",
            "Real Valladolid CF": "VLD"
        };

        contenedor.innerHTML = partidos.map(p => {
            const siglaLocal = siglasEquipos[p.equip_local.nom] || p.equip_local.nom.substring(0, 3).toUpperCase();
            const siglaVisitante = siglasEquipos[p.equip_visitant.nom] || p.equip_visitant.nom.substring(0, 3).toUpperCase();

            return `
                <div class="tarjeta-partido-anterior">
                    <div class="equipo-partido-anterior">
                        <img src="${p.equip_local.escut}" onerror="this.src='img/escudos/default.png'">
                        <h2>${siglaLocal}</h2>
                        <div class="subrayado-verde-anterior"></div>
                    </div>
                    <div class="info-partido-anterior">
                        <h3 class="fecha-partido-anterior">${p.data.split('T')[0]}</h3>
                        <h3 class="vs-anterior">${p.resultat}</h3>
                    </div>
                    <div class="equipo-partido-anterior">
                        <img src="${p.equip_visitant.escut}" onerror="this.src='img/escudos/default.png'">
                        <h2>${siglaVisitante}</h2>
                        <div class="subrayado-verde-anterior"></div>
                    </div>
                </div>
            `;
        }).join('');
    } catch (error) {
        console.error("Fallo al cargar los resultados:", error);
    }
}

document.addEventListener('DOMContentLoaded', cargarTodosLosResultados);