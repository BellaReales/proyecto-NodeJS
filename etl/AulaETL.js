const fs = require('fs');
const csv = require('csv-parser');
const Aula = require('../models/Aula');

class AulaETL {
    async loadFromCSV(filePath) {
        const aulas = [];
        return new Promise((resolve, reject) => {
            fs.createReadStream(filePath)
                .pipe(csv())
                .on('data', (data) => aulas.push(data))
                .on('end', async () => {
                    const result = await Aula.insertMany(aulas);
                    console.log(`✔️ Cargadas ${result.length} aulas`);
                    resolve(result);
                })
                .on('error', reject);
        });
    }
}

module.exports = AulaETL;
