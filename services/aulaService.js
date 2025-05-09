const Aula = require('../models/Aula');

class AulaService {
    static async crearAula(aulaData) {
        return await Aula.create(aulaData);
    }

    static async obtenerAulas() {
        return await Aula.find();
    }

    static async obtenerAula(id) {
        return await Aula.findOne({ aulaID: id });
    }

    static async actualizarAula(id, aulaData) {
        return await Aula.findOneAndUpdate({ aulaID: id }, aulaData, { new: true });
    }

    static async eliminarAula(id) {
        return await Aula.findOneAndDelete({ aulaID: id });
    }
}

module.exports = AulaService;
