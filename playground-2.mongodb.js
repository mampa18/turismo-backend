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
        alergeno:"pescado",
        imagen1:"https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/f9/4b/ab/damasol.jpg",
        imagen2:"https://lh4.googleusercontent.com/proxy/MNYaxItrVp3aixy-KkBJJ3SuNBUwL89a01iO4PSgEfFLCnC4Y3eh5dB4bs7FV7mTxaImwdflT-TEVPkdtI_YOQrnMg-L629CHC2YCiakXSc88gCwxkTKEF9f0g",
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.0024257767436!2d-0.4869033999999999!3d38.34892589999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd62370deb75fe6b%3A0x5c11de730ad6139c!2sRestaurant%20Damasol!5e0!3m2!1ses!2ses!4v1739303394669!5m2!1ses!2ses",
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
        alergeno:"Gluten", 
        imagen1:"https://www.ociomagazine.es/uploads/2016/01/resized/900_bodhigreen-restaurantes-ociomagazine-alicante-7.jpg",
        imagen2:"https://cdn.mtrip.me/img/1056642/original/748b0511187d2310_RackMultipart20180903-14758-1esmhn2.jpg",
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.2758095223567!2d-0.48627879999999996!3d38.342597899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6237b36580c995%3A0x34f3c03f388219cb!2sBodhigreen!5e0!3m2!1ses!2ses!4v1739304125276!5m2!1ses!2ses",
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
        imagen1:"https://lh3.googleusercontent.com/p/AF1QipP_ZHfokypM3j2CSywcJL6iL7pV58i_l6PzXTY=s680-w680-h510",
        imagen2:" https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/50/e2/6d/el-buen-comer.jpg?w=900&h=500&s=1",
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.1794253713365!2d-0.482477!3d38.34482899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6237b19cb104c1%3A0xd191384d5603f95d!2sRESTAURANTE%20EL%20BUEN%20COMER!5e0!3m2!1ses!2ses!4v1739304239554!5m2!1ses!2ses",
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
        alergeno: "Mariscos",
        imagen1:"https://grupogastronou.com/wp-content/uploads/2018/02/REFORMAS_NOUMANOLIN_BLOG_GRUPOGASTRONOU_ALICANTE_4.jpg",
        imagen2:" https://s3.ppllstatics.com/todoalicante/www/multimedia/2023/04/22/1464524809-keED--748x524@TodoAlicante-TodoAlicante.jpg",
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.159453287135!2d-0.48516420000000005!3d38.3452913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6237b25af44845%3A0x53fc23e75548c88!2sNou%20Manol%C3%ADn!5e0!3m2!1sen!2ses!4v1739304259841!5m2!1sen!2ses",
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
        alergeno: "Varía según el plato",
        imagen1:" https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/5e/42/a1/esta-terraza-es-alucinante.jpg?w=900&h=500&s=1",
        imagen2:"https://res.cloudinary.com/tf-lab/image/upload/restaurant/0e244f51-ef99-4240-b6b2-6e922bf71acc/3599a2ca-ee12-4f5b-83f3-89124dd5d0a6.jpg",
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6258.03805896883!2d-0.48158339999999994!3d38.3485416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6237b1ad66986b%3A0x6be792f97091fad8!2sRestaurant%20La%20Ereta!5e0!3m2!1sen!2ses!4v1739304343025!5m2!1sen!2ses",
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
        alergeno: "Pescado",
        imagen1: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/cf/58/3b/la-sastreria.jpg?w=900&h=500&s=1",
        imagen2:" https://www.araalicante.com/wp-content/uploads/2023/10/Sastreria-2-ara-restaurantes-alicante-1080x675.jpg",
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.2260261088936!2d-0.4849906!3d38.343750299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6237b3a4dec6df%3A0x4a86d86135b1bd7f!2sRestaurante%20La%20Sastrer%C3%ADa!5e0!3m2!1ses!2ses!4v1739304309799!5m2!1ses!2ses",
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
        alergeno: "Pescado",
        imagen1:" https://lh5.googleusercontent.com/p/AF1QipMwfP2-qz0D0rE-489rEjr5l1izDR3dWcxQ-Dkd",
        imagen2:" https://images.happycow.net/venues/1024/92/13/hcmp92135_1134336.jpeg",
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.717026856907!2d-0.5089585!3d38.332383199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd623615c8595555%3A0x5753dacca774bee4!2sFalafelmania%20Restaurante%20Vegetariano%20y%20Vegano%20Oriental!5e0!3m2!1ses!2ses!4v1739304353157!5m2!1ses!2ses",
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
        alergeno: "Huevos",
        imagen1:"https://www.alicantecongresos.com/sites/default/files/cesar%20anca%203.jpg",
        imagen2:" https://www.gastronomun.com/wp-content/uploads/2019/02/20190120_160450-840x630.jpg",
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.259514708963!2d-0.48504069999999994!3d38.3429751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6237b3bf326e55%3A0xddfa5efc21535b12!2sRestaurante%20C%C3%A9sar%20Anca!5e0!3m2!1sen!2ses!4v1739304398948!5m2!1sen!2ses",

    }
]);

// Ahora, realizar una consulta para obtener establecimientos por zonaId:
let zonaBusqueda = "Centro"; // Cambia esto según la zona que quieras consultar

let zonaId = db.zonas.findOne({nombre: zonaBusqueda})._id;

// Consulta para obtener los establecimientos de esa zona
let establecimientos = db.establecimientos.find({ zonaId: zonaId }).toArray();

// Mostrar los establecimientos encontrados
