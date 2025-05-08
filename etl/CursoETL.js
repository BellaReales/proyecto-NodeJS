const fs = require('fs');
const csv = require('csv-parser');
const Curso = require('../models/Curso');

class CursoETL {
    async loadFromCSV(filePath) {
        const cursos = [];
        return new Promise((resolve, reject) => {
            fs.createReadStream(filePath)
                .pipe(csv())
                .on('data', (data) => cursos.push(data))
                .on('end', async () => {
                    const result = await Curso.insertMany(cursos);
                    console.log(`✔️ Cargados ${result.length} cursos`);
                    resolve(result);
                })
                .on('error', reject);
        });
    }
}

module.exports = CursoETL;
