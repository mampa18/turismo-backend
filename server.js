import express from 'express';
import morgan from 'morgan';
<<<<<<< HEAD
import { MongoClient } from 'mongodb';
import cors from 'cors';

=======
import { MongoClient, ObjectId } from 'mongodb';
//Cors
const app = express();
>>>>>>> bb8fa579e81f57d41afcdb80e7a7959781256a14
const mongoUrl = 'mongodb://localhost:27017';
const app = express();



app.use(cors());
app.use(express.json());

let db;

MongoClient.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true}) 
.then(client => {
    console.log('Conectado a MongoDB');
    db = client.db('TURISMO_DB'); // Asignar la base de datos
    }) .catch(err => { console.error('Error al conectar a MongoDB:', err);
    
    }); 
    

// API

<<<<<<< HEAD


app.get('/zonas', async (req, res) => {

    try { 
        console.log("conectando a mongodb");
        if (!db) {
            return res.status(500).json({ error: 'La conexión a la base de datos no está lista' });
        } 
        const data = await db.collection('ZONAS').find().toArray(); // Buscamos en la colección correcta
        console.log('✅ Datos obtenidos:', data);
        res.json(data);
    } catch (err) {
        console.error('❌ Error al obtener los datos:', err);
        res.status(500).json({ error: err.message });
    }
    });

=======
app.get('/zonas', async (req, res) => { 
    try { // Realiza una búsqueda en la colección "ESTABLECIMIENTOS" para obtener los establecimientos que tengan el "zona_id" igual a zonasId 
   const resultado = await db.collection('ZONAS').find.toArray();
       res.json(resultado); } catch (error) { 
       console.error('Error al obtener zonas:', error);
       res.status(500).json({ error: 'Hubo un problema al obtener las zonas' }); } });
>>>>>>> bb8fa579e81f57d41afcdb80e7a7959781256a14

app.get('/zonas/:id/establecimientos', async (req, res) => {
     const zonasId = req.params.id; // Zona ID que viene en la URL (por ejemplo, '60c72b2f9e1d8c3efcb15d10')
     try { // Realiza una búsqueda en la colección "ESTABLECIMIENTOS" para obtener los establecimientos que tengan el "zona_id" igual a zonasId 
    const resultado = await db.collection('ESTABLECIMIENTOS').find({ zona_id: new ObjectId(ZONASId) }).toArray();
      // Enviar el resultado de la consulta a MongoDB como respuesta JSON
        res.json(resultado); } catch (error) { 
        console.error('Error al obtener establecimientos:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener los establecimientos' }); } });

//endpoint se une al anterior
app.get('/zonas/:id/establecimientos', async (req, res) => {
    const {precioId, dietaId, alergenosId} = req.query;
    const zonasId = req.params.id; //LLAMAMOS  A LOS ESTABLECIMIENTOS CON ESA :ID
    const establecimientosPorZonas = await db.collection('ESTABLECIMIENTOS').find({ zona_id: new ObjectId(zonasId) }).toArray();

    if(precioId) {
        establecimientosPorZonas = establecimientosPorZonas.filter((establecimiento) => establecimiento.precioId==precioId);   // establecimiento.zonasId == precioId;
    }

    if(dietaId) {
        establecimientosPorZonas = establecimientosPorZonas.filter((establecimiento) => establecimiento.dietaId==dietaId); // Asumimos que 'dieta' es un array en cada establecimiento.

    }

    if(alergenosId) {
        establecimientosPorZonas = establecimientosPorZonas.filter((establecimiento) => establecimiento.alergenosId == alergenosId); // Excluimos establecimientos que contengan alguno de los alérgenos
    }

    res.json(establecimientosPorZonas);

});

app.get('/', (req, res) => {
    res.send('¡Servidor funcionando correctamente!');
  });

app.listen(3000, () => {
    console.log('Ready on port 3000!');
});
