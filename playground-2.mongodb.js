/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('TURISMO_DB');

// Create a new collection.
db.createCollection('establecimientos');
db.createCollection('zonas');

// Insertar zonas
db.zonas.insertMany([
    {
        nombre: "Centro",
    },
    {
        nombre: "Casco Antiguo",
    },
    {
        nombre: "Puerto",
    },

]);

// Obtener el ID de la zona 'Centro'
let zonasId = db.zonas.findOne({nombre: "Centro"})._id;

// Insertar establecimientos en 'Centro'
db.establecimientos.insertMany([
    {
        name: "Bar Pepe",
        direccion: "Casa miswebos 23",
        descripcion: "aowoaowoaowooawooaow que rico",
        precio: "10-15",
        dieta: "Flexitariana",
        paginaWeb: "www.barpepe.com",
        zonaId: zonasId
    },
    {
        name: "Bar Manolo",
        direccion: "Casa caracul 34",
        descripcion: "sjahsdjkdhjkdahjk masmalo",
        precio: "40-50",
        dieta: "Vegetariana",
        paginaWeb: "www.barmanolo.com",
        zonaId: zonasId
    },
    {
        name: "Bar Paqui",
        direccion: "Casa llepapiles 45",
        descripcion: "el peor masmalo",
        precio: "20-25",
        dieta: "Vegana",
        paginaWeb: "www.barpaqui.com",
        zonaId: zonasId
    }
]);

// Obtener el ID de la zona 'Casco Antiguo'
zonasId = db.zonas.findOne({nombre: "Casco Antiguo"})._id;

// Insertar establecimientos en 'Casco Antiguo'
db.establecimientos.insertMany([
    {
        name: "Bar Xikilicuatre",
        direccion: "Casa miswebos 23",
        descripcion: "aowoaowoaowooawooaow que rico",
        precio: "10-15",
        dieta: "Flexitariana",
        paginaWeb: "www.barxikilicuatre.com",
        zonaId: zonasId
    },
    {
        name: "Bar MikuMikuUiu",
        direccion: "Casa caracul 34",
        descripcion: "sjahsdjkdhjkdahjk masmalo",
        precio: "40-50",
        dieta: "Vegetariana",
        paginaWeb: "www.barmiku.com",
        zonaId: zonasId
    },
    {
        name: "Bar Madri",
        direccion: "Casa llepapiles 45",
        descripcion: "el peor masmalo",
        precio: "20-25",
        dieta: "Vegana",
        paginaWeb: "www.barmadri.com",
        zonaId: zonasId
    }
]);

zonasId = db.zonas.findOne({nombre: "Puerto"})._id;

// Insertar establecimientos en 'Puerto'
db.establecimientos.insertMany([
    {
        name: "Bar Xikilicuatre",
        direccion: "Casa miswebos 23",
        descripcion: "aowoaowoaowooawooaow que rico",
        precio: "10-15",
        dieta: "Flexitariana",
        paginaWeb: "www.barxikilicuatre.com",
        zonaId: zonasId
    },
    {
        name: "Bar MikuMikuUiu",
        direccion: "Casa caracul 34",
        descripcion: "sjahsdjkdhjkdahjk masmalo",
        precio: "40-50",
        dieta: "Vegetariana",
        paginaWeb: "www.barmiku.com",
        zonaId: zonasId
    },
    {
        name: "Bar Madri",
        direccion: "Casa llepapiles 45",
        descripcion: "el peor masmalo",
        precio: "20-25",
        dieta: "Vegana",
        paginaWeb: "www.barmadri.com",
        zonaId: zonasId
    }
]);

// Ahora, realizar una consulta para obtener establecimientos por zonaId:
let zonaBusqueda = "Centro"; // Cambia esto según la zona que quieras consultar

let zonaId = db.zonas.findOne({nombre: zonaBusqueda})._id;

// Consulta para obtener los establecimientos de esa zona
let establecimientos = db.ESTABLECIMIENTOS.find({ zonaId: zonaId }).toArray();

// Mostrar los establecimientos encontrados
