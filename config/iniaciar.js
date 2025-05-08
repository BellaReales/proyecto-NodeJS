const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGO_URI;
const dbName = 'acmeschool';

const connectAndSetupDB = async () => {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log('✅ Conectado a MongoDB Atlas');

        const db = client.db(dbName);


        const collections = await db.listCollections().toArray();
        const collectionNames = collections.map(col => col.name);

        const requiredCollections = ['estudiantes', 'profesores', 'aulas', 'cursos'];

        for (const name of requiredCollections) {
            if (!collectionNames.includes(name)) {
                await db.createCollection(name);
                console.log(`📦 Colección creada: ${name}`);
            } else {
                console.log(`✅ Colección ya existe: ${name}`);
            }
        }
        const estudiantes = db.collection('estudiantes');
        const profesores = db.collection('profesores');
        const aulas = db.collection('aulas');
        const cursos = db.collection('cursos');

        return client; 
    } catch (err) {
        console.error('❌ Error al conectar o configurar MongoDB:', err);
    }
};

module.exports = connectAndSetupDB;
