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
        name: "El Damasol",
        direccion: "Calle Castaños, 25, 03001 Alicante",
        descripcion: "Un restaurante especializado en cocina alicantina con toques caseros. Destacan su arroz meloso de pescado y sus tapas elaboradas con productos frescos del mar.",
        precio: "€€€",
        dieta: "Flexitariana",
        telefono: "965 20 76 99",
        paginaWeb: "www.eldamasol.com",
        zonaId: zonasId,
        imagen: "https://estaticos.elmundo.es/assets/multimedia/imagenes/2016/12/30/14831205166665.jpg",
        alergeno:"pescado"
    },
    {
        name: "Bodhigreen Vegetariano",
        direccion: "Calle San Fernando, 46 Bajo(cafe Belice), 03001 Alicante España",
        descripcion: "Restaurante amplio con suelo de madera, que sirve zumos de frutas y platos vegetarianos y sin gluten.",
        precio: "€€",
        dieta: "Vegetariana",
        telefono: "965 21 31 44",
        paginaWeb: "http://www.bodhigreen.es/",
        zonaId: zonasId,
        imagen:"https://www.ociomagazine.es/uploads/2016/01/resized/900_bodhigreen-restaurantes-ociomagazine-alicante-8.jpg",
        alergeno:"Gluten" 
    },

    {
        name: "El buen comer",
        direccion: "C. Mayor, 8, 03002 Alicante",
        descripcion: "Tapas, pescado, marisco y arroces de la cocina española en un restaurante informal con detalles de madera y terraza.",
        precio: "€",
        dieta: "Vegana",
        telefono: "965 21 35 41",
        paginaWeb: "https://www.elbuencomer.es/",
        zonaId: zonasId,
        imagen:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/60/9f/c6/salon-planta-baja-reformado.jpg?w=900&h=-1&s=1",
        alergeno: "Mariscos",
    }
]);

// Obtener el ID de la zona 'Casco Antiguo'
zonasId = db.zonas.findOne({nombre: "Casco Antiguo"})._id;

// Insertar establecimientos en 'Casco Antiguo'
db.establecimientos.insertMany([
    {
        name: "Nou Manolín",
        direccion: "Calle Mayor, 12, 03002 Alicante",
        descripcion: "Fundado en 1971, este bar icónico ofrece productos de alta calidad como gambas rojas, arroz y jamón ibérico. Su barra es considerada una de las mejores del mundo.",
        precio: "€€€",
        dieta: "Mariscos y arroces",
        telefono: "965 20 03 68",
        paginaWeb: "www.noumanolin.com",
        zonaId: zonasId,
        imagen: "https://grupogastronou.com/wp-content/uploads/10.jpg",
        alergeno: "Mariscos"
    },
    {
        name: "La Ereta",
        direccion: "Parque de la Ereta, s/n, 03001 Alicante",
        descripcion: "Con impresionantes vistas de la ciudad, La Ereta combina innovación y tradición en su cocina. Su chef, Dani Frías, ofrece una reinterpretación moderna de los sabores locales.",
        precio: "€€€",
        dieta: "Gastronomía local innovadora",
        telefono: "965 14 32 50",
        paginaWeb: "www.laereta.es",
        zonaId: zonasId,
        imagen: "https://res.cloudinary.com/tf-lab/image/upload/restaurant/0e244f51-ef99-4240-b6b2-6e922bf71acc/545c7a59-9681-46a6-8ec0-8f4735536151.jpg",
        alergeno: "Varía según el plato"
    }
]);

zonasId = db.zonas.findOne({nombre: "Puerto"})._id;

// Insertar establecimientos en 'Puerto'
db.establecimientos.insertMany([
    {
        name: "La Sastrería",
        direccion: "Av. Conde de Vallellano, 8, 03001 Alicante",
        descripcion: "Un restaurante especializado en cocina alicantina con toques caseros. Destacan su arroz meloso de pescado y sus tapas elaboradas con productos frescos del mar.",
        precio: "€€",
        dieta: "Pescado y mariscos",
        telefono: "965 20 31 74",
        paginaWeb: "www.lasastreriaalicante.com",
        zonaId: zonasId,
        imagen: "https://media-cdn.tripadvisor.com/media/photo-s/1d/f5/a9/01/mesa-la-sastreria.jpg",
        alergeno: "Pescado"
    },
    {
        name: "Falafelmanía",
        direccion: "C/ de Perú, 13 Local 2E, 03008 Alicante España",
        descripcion: "Auténtica cocina casera, exclusiva Vegetariana y Vegana, hecha con los exquisitos sabores del Medio Oriente y servida en deliciosos Menús de Degustación",
        precio: "€",
        dieta: "Vegano",
        telefono: "966 08 07 39",
        paginaWeb: "https://www.facebook.com/falafelmania",
        zonaId: zonasId,
        imagen: "https://media-cdn.tripadvisor.com/media/photo-s/1d/f5/a9/01/mesa-la-sastreria.jpg",
        alergeno: "Pescado"
    },
    {
        name: "César Anca",
        direccion: "Explanada de España, 3, 03002 Alicante",
        descripcion: "Con un enfoque en tapas modernas, César Anca reinterpreta clásicos españoles con creatividad, como sus huevos rotos con queso ahumado y romero.",
        precio: "€€",
        dieta: "Tapas creativas",
        telefono: "965 14 94 65",
        paginaWeb: "www.cesaranca.com",
        zonaId: zonasId,
        imagen: "https://www.cesaranca.com/wp-content/uploads/2024/07/CESARANCA_LABARRA-14.jpg",
        alergeno: "Huevos"
    }
]);

// Ahora, realizar una consulta para obtener establecimientos por zonaId:
let zonaBusqueda = "Centro"; // Cambia esto según la zona que quieras consultar

let zonaId = db.zonas.findOne({nombre: zonaBusqueda})._id;

// Consulta para obtener los establecimientos de esa zona
let establecimientos = db.establecimientos.find({ zonaId: zonaId }).toArray();

// Mostrar los establecimientos encontrados
