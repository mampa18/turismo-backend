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

app.get('/zonas/:id/establecimientos', async (req, res) => {
  const zonaId = req.params.id; 
  const { precioId, dietaId, alergenosId } = req.query; 

  try {
    const filtros = { zonaId: new ObjectId(zonaId) };

    if (precioId) filtros.precio = precioId;
    if (dietaId) filtros.dieta = dietaId;
    if (alergenosId) filtros.alergeno = alergenosId;

    console.log("📌 Aplicando filtros:", filtros); // <-- Asegúrate de que aquí se ven los filtros correctos

    const establecimientos = await db.collection('establecimientos').find(filtros).toArray();
    
    console.log("✅ Establecimientos filtrados:", establecimientos);
    res.json(establecimientos);

  } catch (error) {
    console.error("❌ Error al obtener establecimientos:", error);
    res.status(500).json({ error: 'Hubo un problema al obtener los establecimientos' });
  }
});



app.get('/filtros', async (req, res) => {
  try {
    // Obtener los valores únicos de los filtros
    const precios = await db.collection('establecimientos').distinct('precio');
    const dietas = await db.collection('establecimientos').distinct('dieta');
    const alergenos = await db.collection('establecimientos').distinct('alergeno');

    // Responder con los valores
    res.json({ precios, dietas, alergenos });
  } catch (error) {
    console.error('Error al obtener los filtros:', error);
    res.status(500).json({ error: 'Hubo un problema al obtener los filtros' });
  }
});
app.get('/', (req, res) => {
    res.send('¡Servidor funcionando correctamente!');
});

app.listen(3000, () => {
    console.log('Ready on port 3000!');
});

//detalle
app.get('/establecimientos/:id', async (req, res) => {
  const establecimientoId = req.params.id;  // Extraer el ID del establecimiento desde la URL

  try {
    const establecimiento = await db.collection('establecimientos').findOne({
      _id: new ObjectId(establecimientoId)  // Buscar el establecimiento por su ID
    });

    if (establecimiento) {
      res.json(establecimiento);  // Si lo encuentra, responder con los datos del establecimiento
    } else {
      res.status(404).json({ error: 'Establecimiento no encontrado' });
    }
  } catch (error) {
    console.error("❌ Error al obtener el establecimiento:", error);
    res.status(500).json({ error: 'Hubo un problema al obtener el establecimiento' });
  }
});