const fs = require('fs');
const csv = require('csv-parser');
const Aula = require('../models/Aula.js');  

class AulaETL {
  static async cargarDatos() {
    const aulas = [];

    fs.createReadStream('raw_data/Aula.csv')
      .pipe(csv())
      .on('data', (row) => {

        aulas.push({
          aulaID: row.aulaID,
          codigo: row.codigo,
          capacidad: row.capacidad
        });
      })
      .on('end', async () => {
        try {

          await Aula.insertMany(aulas);
          console.log(`${aulas.length} aulas cargadas`);
        } catch (err) {
          console.error('Error al cargar aulas:', err);
        }
      });
  }
}

module.exports = AulaETL;
