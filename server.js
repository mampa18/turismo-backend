import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { MongoClient, ObjectId } from 'mongodb';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const mongoUrl = 'mongodb://localhost:27017/';
let db;

MongoClient.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(client => {
        console.log('Conectado a MongoDB');
        db = client.db('TURISMO_DB'); // Asignar la base de datos
    }).catch(err => {
    console.error('Error al conectar a MongoDB:', err);
});


// API
app.get('/zonas', async (req, res) => {
    try {
        console.log("conectando a mongodb");
        if (!db) {
            return res.status(500).json({error: 'La conexión a la base de datos no está lista'});
        }
        const data = await db.collection('zonas').find().toArray(); // Buscamos en la colección correcta
        console.log('✅ Datos obtenidos:', data);
        res.json(data);
    } catch (err) {
        console.error('❌ Error al obtener los datos:', err);
        res.status(500).json({error: err.message});
    }
});

// Eliminar esta segunda definición duplicada
//app.get('/zonas', async (req, res) => {
//   // Este código está duplicado y no es necesario
//});


// Modificado: endpoint para obtener establecimientos filtrados por zona y otros parámetros
app.get('/zonas/:id/establecimientos', async (req, res) => {
    const { precioId, dietaId, alergenosId } = req.query;
    const zonasId = req.params.id; // Zona ID que viene en la URL (por ejemplo, '60c72b2f9e1d8c3efcb15d10')

    try {
        // Buscar establecimientos en la zona especificada
        let establecimientosPorZonas = await db.collection('establecimientos').find({ zonaId: new ObjectId(zonasId) }).toArray();

        // Filtrar por precioId si se pasa como parámetro
        if (precioId) {
            establecimientosPorZonas = establecimientosPorZonas.filter((establecimiento) => establecimiento.precio === precioId);
        }

        // Filtrar por dietaId si se pasa como parámetro
        if (dietaId) {
            establecimientosPorZonas = establecimientosPorZonas.filter((establecimiento) => establecimiento.dieta === dietaId);
        }

        // Filtrar por alergenosId si se pasa como parámetro
        if (alergenosId) {
            establecimientosPorZonas = establecimientosPorZonas.filter((establecimiento) => establecimiento.alergenos && establecimiento.alergenos.includes(alergenosId));
        }

        // Devolver los resultados
        res.json(establecimientosPorZonas);
    } catch (error) {
        console.error('Error al obtener establecimientos:', error);
        res.status(500).json({error: 'Hubo un problema al obtener los establecimientos'});
    }
});

app.get('/', (req, res) => {
    res.send('¡Servidor funcionando correctamente!');
});

app.listen(3000, () => {
    console.log('Ready on port 3000!');
});