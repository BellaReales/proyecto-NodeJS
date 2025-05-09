require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI;
const dbName = 'acmeschool';

const dbInit = async () => {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log('✅ Conectado a MongoDB Atlas');
        const db = client.db(dbName);

        const existingCollections = await db.listCollections().toArray();
        const existingNames = existingCollections.map(col => col.name);

    

        const estudianteValidator = {
            validator: {
                $jsonSchema: {
                    bsonType: "object",
                    required: ["estudianteId", "identificacionType", "identificacionNumber", "firstName", "secondName", "apellido", "email", "telefono"],
                    properties: {
                        estudianteId: { bsonType: "string" },
                        identificacionType: { bsonType: "string" },
                        identificacionNumber: { bsonType: "string" },
                        firstName: { bsonType: "string" },
                        secondName: { bsonType: "string" },
                        apellido: { bsonType: "string" },
                        email: { bsonType: "string" },
                        telefono: { bsonType: "string" },
                        inscripciones: {
                            bsonType: "array",
                            items: {
                                bsonType: "object",
                                properties: {
                                    cursos: {
                                        bsonType: "object",
                                        required: ["cursoId", "codigo", "nombre", "fechaInicio", "fechaFin", "intensidad", "aula", "profesorId"],
                                        properties: {
                                            cursoId: { bsonType: "string" },
                                            codigo: { bsonType: "string" },
                                            nombre: { bsonType: "string" },
                                            fechaInicio: { bsonType: "string" }, // Se guarda como texto
                                            fechaFin: { bsonType: "string" },
                                            intensidad: { bsonType: "string" },
                                            aula: { bsonType: "string" },
                                            profesorId: { bsonType: "string" }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };

        const profesorValidator = {
            validator: {
                $jsonSchema: {
                    bsonType: "object",
                    required: ["profesorId", "nombre", "apellido", "email", "telefono", "cursoId"],
                    properties: {
                        profesorId: { bsonType: "string" },
                        nombre: { bsonType: "string" },
                        apellido: { bsonType: "string" },
                        email: { bsonType: "string" },
                        telefono: { bsonType: "string" },
                        cursoId: { bsonType: "string" }
                    }
                }
            }
        };

        const aulaValidator = {
            validator: {
                $jsonSchema: {
                    bsonType: "object",
                    required: ["aulaID", "codigo", "capacidad"],
                    properties: {
                        aulaID: { bsonType: "string" },
                        codigo: { bsonType: "string" },
                        capacidad: { bsonType: "int" }
                    }
                }
            }
        };

        const usuarioValidator = {
            validator: {
                $jsonSchema: {
                    bsonType: "object",
                    required: ["usuario", "password", "rol"],
                    properties: {
                        usuario: { bsonType: "string" },
                        password: { bsonType: "string" },
                        rol: { enum: ["administrador", "profesor", "estudiante"] }
                    }
                }
            }
        };

        // ======= CREAR COLECCIONES CON VALIDADORES =========
        const colecciones = [
            { name: "estudiantes", validator: estudianteValidator },
            { name: "profesores", validator: profesorValidator },
            { name: "aulas", validator: aulaValidator },
            { name: "usuarios", validator: usuarioValidator }
        ];

        for (const col of colecciones) {
            if (!existingNames.includes(col.name)) {
                await db.createCollection(col.name, col.validator);
                console.log(`📁 Colección creada: ${col.name}`);
            } else {
                console.log(`✅ Colección ya existe: ${col.name}`);
            }
        }

        // Crear índices
        await db.collection('estudiantes').createIndex({ email: 1 }, { unique: true });
        await db.collection('profesores').createIndex({ email: 1 }, { unique: true });

        // Insertar usuario administrador si no existe
        const admin = { usuario: 'admin', password: 'admin123', rol: 'administrador' };
        const existeAdmin = await db.collection('usuarios').findOne({ usuario: admin.usuario });

        if (!existeAdmin) {
            await db.collection('usuarios').insertOne(admin);
            console.log('👤 Usuario administrador creado');
        } else {
            console.log('ℹ️ Usuario administrador ya existe');
        }

        console.log('\n🎉 Inicialización de base de datos con estructura desnormalizada completada');
    } catch (err) {
        console.error('❌ Error en la inicialización:', err);
    } finally {
        await client.close();
    }
};

dbInit();
