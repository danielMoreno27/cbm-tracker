const { DBFFile } = require('dbffile');
const path = require('path');

// Ruta a tu tabla (ajustala si es necesario)
const DBF_PATH = 'Y:/NEWSYS/DATA/ORDENES.DBF'; 

async function getOrdenesPendientes() {
    try {
        let dbf = await DBFFile.open(DBF_PATH);
        console.log(`Leyendo ${dbf.recordCount} registros...`);

        // Leemos los registros
        const records = await dbf.readRecords();

        // Filtramos: Solo queremos lo que NO es Recepcción Total (RT)
        // Y que tenga algo en EXISTPROD (metros disponibles)
        const pendientes = records.filter(r => 
            r.ESTATUS !== 'RT' && 
            r.EXISTPROD > 0
        ).map(r => ({
            numOrden: r.NUMORDEN,
            claveOrden: r.NOACCANADA, // Ejemplo: "B30253"
            tela: r.TELA_COD,
            color: r.COLOR_COD,
            metrosDisponibles: r.EXISTPROD,
            status: r.ESTATUS
        }));

        return pendientes;
    } catch (err) {
        console.error("Error al leer VFP:", err);
        return [];
    }
}

module.exports = { getOrdenesPendientes };