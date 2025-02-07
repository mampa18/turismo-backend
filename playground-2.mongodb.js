/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'TURISMO_DB';
const collection = 'ZONAS';

// The current database to use.
use('TURISMO_DB');

// Create a new collection.
db.createCollection('ESTABLECIMIENTOS');


db.ZONAS.insertMany([
   { nombre: "Centro",

   },

   {nombre: "Casco Antiguo",

   },

   { nombre: "Puerto",

   },

    ]); 

let ZONASId = db.ZONAS.findOne({ nombre: "Centro" })._id;

    db.ESTABLECIMIENTOS.insertMany([
    { name: "Bar Pepe",
        direccion: "Casa miswebos 23",
        descripcion: "aowoaowoaowooawooaow que rico",
        precio: "10-15",
        dieta: "Flexitariana",
        paginaWeb: "www.barpepe.com",
        zonaId: ZONASId },

    { name: "Bar Manolo",
        direccion: "Casa caracul 34",
        descripcion: "sjahsdjkdhjkdahjk masmalo",
        precio: "40-50",
        dieta: "Vegetariana",
        paginaWeb: "www.barmanolo.com",
        zonaId: ZONASId },

    { name: "Bar Paqui",
        direccion: "Casa llepapiles 45",
        descripcion: "el peor masmalo",
        precio: "20-25",
        dieta: "Vegana",
        paginaWeb: "www.barpaqui.com",
        zonaId: ZONASId }

    ]);

ZONASId = db.ZONAS.findOne({ nombre: "Casco Antiguo" })._id;

    db.ESTABLECIMIENTOS.insertMany([
    { name: "Bar Xikilicuatre",
        direccion: "Casa miswebos 23",
        descripcion: "aowoaowoaowooawooaow que rico",
        precio: "10-15",
        dieta: "Flexitariana",
        paginaWeb: "www.barxikilicuatre.com",
        zonaId: ZONASId },

    { name: "Bar MikuMikuUiu",
        direccion: "Casa caracul 34",
        descripcion: "sjahsdjkdhjkdahjk masmalo",
        precio: "40-50",
        dieta: "Vegetariana",
        paginaWeb: "www.barmiku.com",
        zonaId: ZONASId },

    { name: "Bar Madri",
        direccion: "Casa llepapiles 45",
        descripcion: "el peor masmalo",
        precio: "20-25",
        dieta: "Vegana",
        paginaWeb: "www.barmadri.com",
        zonaId: ZONASId }

    ]); 