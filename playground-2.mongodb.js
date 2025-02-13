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
        direccion: "Calle Castaños, 25",
        descripcion: "Un restaurante especializado en cocina alicantina con toques caseros. Destacan su arroz meloso de pescado y sus tapas elaboradas con productos frescos del mar.",
        precio: "€€€",
        dieta: "Flexitariana",
        telefono: "965 20 76 99",
        paginaWeb: "www.eldamasol.com",
        zonaId: zonasId,
        imagen: "https://estaticos.elmundo.es/assets/multimedia/imagenes/2016/12/30/14831205166665.jpg",
        alergeno:"Sin Frutos Secos",
        imagen1:"https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/f9/4b/ab/damasol.jpg",
        imagen2:"https://lh4.googleusercontent.com/proxy/MNYaxItrVp3aixy-KkBJJ3SuNBUwL89a01iO4PSgEfFLCnC4Y3eh5dB4bs7FV7mTxaImwdflT-TEVPkdtI_YOQrnMg-L629CHC2YCiakXSc88gCwxkTKEF9f0g",
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.0024257767436!2d-0.4869033999999999!3d38.34892589999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd62370deb75fe6b%3A0x5c11de730ad6139c!2sRestaurant%20Damasol!5e0!3m2!1ses!2ses!4v1739303394669!5m2!1ses!2ses",
    },
    {
        name: "Bodhigreen Vegetariano",
        direccion: "Calle San Fernando, 46 Bajo(cafe Belice)",
        descripcion: "Restaurante amplio con suelo de madera, que sirve zumos de frutas y platos vegetarianos y sin gluten.",
        precio: "€€",
        dieta: "Vegetariana",
        telefono: "965 21 31 44",
        paginaWeb: "http://www.bodhigreen.es/",
        zonaId: zonasId,
        imagen:"https://www.ociomagazine.es/uploads/2016/01/resized/900_bodhigreen-restaurantes-ociomagazine-alicante-8.jpg",
        alergeno:"Sin Gluten", 
        imagen1:"https://www.ociomagazine.es/uploads/2016/01/resized/900_bodhigreen-restaurantes-ociomagazine-alicante-7.jpg",
        imagen2:"https://cdn.mtrip.me/img/1056642/original/748b0511187d2310_RackMultipart20180903-14758-1esmhn2.jpg",
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.2758095223567!2d-0.48627879999999996!3d38.342597899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6237b36580c995%3A0x34f3c03f388219cb!2sBodhigreen!5e0!3m2!1ses!2ses!4v1739304125276!5m2!1ses!2ses",
    },

    {
        name: "El buen comer",
        direccion: "C. Mayor, 8",
        descripcion: "Tapas, pescado, marisco y arroces de la cocina española en un restaurante informal con detalles de madera y terraza.",
        precio: "€",
        dieta: "Vegana",
        telefono: "965 21 35 41",
        paginaWeb: "https://www.elbuencomer.es/",
        zonaId: zonasId,
        imagen:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/60/9f/c6/salon-planta-baja-reformado.jpg?w=900&h=-1&s=1",
        alergeno: "Sin Mariscos",
        imagen1:"https://lh3.googleusercontent.com/p/AF1QipP_ZHfokypM3j2CSywcJL6iL7pV58i_l6PzXTY=s680-w680-h510",
        imagen2:" https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/50/e2/6d/el-buen-comer.jpg?w=900&h=500&s=1",
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.1794253713365!2d-0.482477!3d38.34482899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6237b19cb104c1%3A0xd191384d5603f95d!2sRESTAURANTE%20EL%20BUEN%20COMER!5e0!3m2!1ses!2ses!4v1739304239554!5m2!1ses!2ses",
    },
    {
        name: "El Lobo Blanco",
        direccion: "Carrer Castaños, 35",
        descripcion: "El Lobo Blanco en Alicante es un restaurante que combina una cocina mediterránea moderna con toques de creatividad. Ofrece platos elaborados con ingredientes frescos y locales, destacando por su ambiente acogedor y su atención al detalle en la presentación. Es ideal para disfrutar de una experiencia gastronómica única en un entorno relajado.",
        precio: "€€€",
        dieta: "Flexitariana",
        telefono: "662 35 88 71",
        paginaWeb: "https://www.elloboblanco.es",
        zonaId: zonasId,
        imagen:"https://res.cloudinary.com/tf-lab/image/upload/w_450,h_450,c_fill,g_auto:subject,q_auto,f_auto/restaurant/86d9e146-a6c4-4609-aad7-6d21f5e54561/5f5fa8a9-5c51-451b-8c32-125a4fca0d61.jpg",
        alergeno: "Sin Huevos",
        imagen1:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/51/30/36/soyez-les-bienvenus-les.jpg?w=900&h=500&s=1",
        imagen2:" https://media-cdn.tripadvisor.com/media/photo-s/19/7f/c1/e3/el-lobo-blanco.jpg",
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d782.2782554036742!2d-0.4866838304110052!3d38.346366050034995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6237e831736aed%3A0xbb2e6849b4f44209!2sEl%20Lobo%20Blanco!5e0!3m2!1sen!2ses!4v1739470361091!5m2!1sen!2ses",
    },
    {
        name: "Las Brasas de San Miguel",
        direccion: "C. San José, 5",
        descripcion: "Las Brasas de San Miguel en Alicante es un restaurante especializado en carnes a la brasa y platos tradicionales mediterráneos. Ofrecen una experiencia gastronómica auténtica, con un ambiente cálido y acogedor.",
        precio: "€€€",
        dieta: "Flexitariana",
        telefono: "865 52 01 96",
        paginaWeb: "https://lasbrasasdesanmiguel.es",
        zonaId: zonasId,
        imagen:"https://cdn.website.dish.co/media/71/e5/4244144/Las-Brasas-de-San-Miguel-WhatsApp-Image-2022-01-26-at-12-55-16-jpeg.jpg",
        alergeno: "Sin Lactosa",
        imagen1:"https://res.cloudinary.com/tf-lab/image/upload/restaurant/bec40736-db55-4aba-93f5-ab0c526e0fa8/a05dcc27-efe4-430a-a5a7-d8158ac6fdc9.jpg",
        imagen2:" https://media-cdn.tripadvisor.com/media/photo-s/1d/16/19/16/el-salon.jpg",
        mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d782.2835655407944!2d-0.4834494!3d38.3458744!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6237cfb0438a07%3A0x6e74c7e65fb0ef29!2sLas%20Brasas%20de%20San%20Miguel!5e0!3m2!1sen!2ses!4v1739470867773!5m2!1sen!2ses",
    }
]);

// Obtener el ID de la zona 'Casco Antiguo'
zonasId = db.zonas.findOne({nombre: "Casco Antiguo"})._id;

// Insertar establecimientos en 'Casco Antiguo'
db.establecimientos.insertMany([
    {
        name: "Nou Manolín",
        direccion: "Calle Mayor, 12",
        descripcion: "Fundado en 1971, este bar icónico ofrece productos de alta calidad como gambas rojas, arroz y jamón ibérico. Su barra es considerada una de las mejores del mundo.",
        precio: "€€€",
        dieta: "Vegetariana",
        telefono: "965 20 03 68",
        paginaWeb: "www.noumanolin.com",
        zonaId: zonasId,
        imagen: "https://grupogastronou.com/wp-content/uploads/10.jpg",
        alergeno: "Sin Frutos Secos",
        imagen1:"https://grupogastronou.com/wp-content/uploads/2018/02/REFORMAS_NOUMANOLIN_BLOG_GRUPOGASTRONOU_ALICANTE_4.jpg",
        imagen2:" https://s3.ppllstatics.com/todoalicante/www/multimedia/2023/04/22/1464524809-keED--748x524@TodoAlicante-TodoAlicante.jpg",
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.159453287135!2d-0.48516420000000005!3d38.3452913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6237b25af44845%3A0x53fc23e75548c88!2sNou%20Manol%C3%ADn!5e0!3m2!1sen!2ses!4v1739304259841!5m2!1sen!2ses",
    },
    {
        name: "La Ereta",
        direccion: "Parque de la Ereta, s/n",
        descripcion: "Con impresionantes vistas de la ciudad, La Ereta combina innovación y tradición en su cocina. Su chef, Dani Frías, ofrece una reinterpretación moderna de los sabores locales.",
        precio: "€€",
        dieta: "Vegana",
        telefono: "965 14 32 50",
        paginaWeb: "www.laereta.es",
        zonaId: zonasId,
        imagen: "https://res.cloudinary.com/tf-lab/image/upload/restaurant/0e244f51-ef99-4240-b6b2-6e922bf71acc/545c7a59-9681-46a6-8ec0-8f4735536151.jpg",
        alergeno: "Sin Mariscos",
        imagen1:" https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/5e/42/a1/esta-terraza-es-alucinante.jpg?w=900&h=500&s=1",
        imagen2:"https://res.cloudinary.com/tf-lab/image/upload/restaurant/0e244f51-ef99-4240-b6b2-6e922bf71acc/3599a2ca-ee12-4f5b-83f3-89124dd5d0a6.jpg",
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6258.03805896883!2d-0.48158339999999994!3d38.3485416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6237b1ad66986b%3A0x6be792f97091fad8!2sRestaurant%20La%20Ereta!5e0!3m2!1sen!2ses!4v1739304343025!5m2!1sen!2ses",
    },
    {
        name: "El Pont",
        direccion: "Pl. del Puente, 7",
        descripcion: "El Pont es un restaurante con cocina mediterránea, una encantadora terraza y vistas al Castillo de Santa Bárbara. Destaca por su ambiente acogedor y buena comida.",
        precio: "€",
        dieta: "Flexitariana",
        telefono: "634 12 10 71",
        paginaWeb: "www.elpontalicante.es",
        zonaId: zonasId,
        imagen: "https://media-cdn.tripadvisor.com/media/photo-s/13/6a/26/fb/salmon-a-la-plancha-con.jpg",
        alergeno: "Sin Lactosa",
        imagen1:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/6a/27/5f/terraza-fresca-con-preciosas.jpg?h=-1&s=1&w=1200",
        imagen2:"https://scontent.fvlc6-2.fna.fbcdn.net/v/t1.6435-9/49438579_330503617788274_3269710666314809344_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=HmK4qvrNLokQ7kNvgEfmtpV&_nc_oc=AdgJQj3Cvtu6qukT_AOerk510-btWRV0xU7I18sXg3H0-gJf1spNW4qSBqw_Ola7vIQ&_nc_zt=23&_nc_ht=scontent.fvlc6-2.fna&_nc_gid=AXBj1Fs0gHZa8-5X-y5rI5P&oh=00_AYCjy3pZ2YbAgax18pBMtCAU3gDFqBFYFOnVX13Thz-_Dg&oe=67D5A705",
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6258.222980151899!2d-0.48032729999999996!3d38.34640149999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6237b03051fde7%3A0x5eb2d40d6fbf191c!2sEl%20Pont%20%7C%20Restaurante%20%7C%20Bar%20%7C%20Tapas!5e0!3m2!1sen!2ses!4v1739468759742!5m2!1sen!2ses",
    },
    {
        name: "San Telmo Gastrobar",
        direccion: "C. de San Nicolás, 14",
        descripcion: "San Telmo Gastrobar en Alicante ofrece cocina mediterránea y alicantina con ingredientes frescos. Destacan sus tapas, arroces, pescados y carnes, acompañados de una selección de vinos. Está ubicado en el centro de la ciudad.",
        precio: "€€€",
        dieta: "Vegetariana",
        telefono: "865 64 61 70",
        paginaWeb: "www.santelmogastrobar.es",
        zonaId: zonasId,
        imagen: "https://estaticos-cdn.prensaiberica.es/clip/d9bbddef-d2d2-4993-af1f-85476cfb7791_alta-libre-aspect-ratio_default_0.jpg",
        alergeno: "Sin Huevos",
        imagen1:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/d9/aa/1f/fachada.jpg?w=900&h=500&s=1",
        imagen2:"https://www.araalicante.com/wp-content/uploads/2023/11/San-Telmo-4-ara-restaurantes-alicante.jpg",
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1564.5688688933453!2d-0.48275793039215814!3d38.34579395004326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6237b195203b29%3A0x5e60e30bfa85ecd9!2sSan%20Telmo%20Gastrobar!5e0!3m2!1sen!2ses!4v1739469934081!5m2!1sen!2ses",
    },
    {
        name: "Mayor 20",
        direccion: "C. Mayor, 20",
        descripcion: "Mayor 20 es un bar y restaurante en el centro de Alicante, conocido por su ambiente acogedor y su cocina mediterránea. Ofrecen platos elaborados con productos frescos y locales, ideales para disfrutar en su terraza mientras se vive el dinamismo de la zona.",
        precio: "€€€",
        dieta: "Vegana",
        telefono: "663 29 44 18",
        paginaWeb: "www.mayor20.es",
        zonaId: zonasId,
        imagen: "https://res.cloudinary.com/tf-lab/image/upload/w_450,h_450,c_fill,g_auto:subject,q_auto,f_auto/restaurant/f9fb7197-e7d5-4a47-8fdc-2c240950e5f7/c45e2fe1-4bab-45d3-aa37-dde961b86241.jpg",
        alergeno: "Sin Frutos Secos",
        imagen1:"https://res.cloudinary.com/tf-lab/image/upload/restaurant/f9fb7197-e7d5-4a47-8fdc-2c240950e5f7/76c21b46-5fc8-4126-84c6-972769af77cd.jpg",
        imagen2:"https://res.cloudinary.com/tf-lab/image/upload/w_450,h_450,c_fill,g_auto:subject,q_auto,f_auto/restaurant/f9fb7197-e7d5-4a47-8fdc-2c240950e5f7/09948e1b-38a8-4ee2-8427-64cadc9f8d4c.jpg",
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.172288643192!2d-0.483508761279273!3d38.34499419659149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6237a3f4f99d1f%3A0xb7adc2e65ef65cf1!2sMayor%2020!5e0!3m2!1sen!2ses!4v1739469990153!5m2!1sen!2ses",
    }
]);

zonasId = db.zonas.findOne({nombre: "Puerto"})._id;

// Insertar establecimientos en 'Puerto'
db.establecimientos.insertMany([
    {
        name: "La Sastrería",
        direccion: "Av. Conde de Vallellano, 8",
        descripcion: "Un restaurante especializado en cocina alicantina con toques caseros. Destacan su arroz meloso de pescado y sus tapas elaboradas con productos frescos del mar.",
        precio: "€€",
        dieta: "Vegetariana",
        telefono: "965 20 31 74",
        paginaWeb: "www.lasastreriaalicante.com",
        zonaId: zonasId,
        imagen: "https://media-cdn.tripadvisor.com/media/photo-s/1d/f5/a9/01/mesa-la-sastreria.jpg",
        alergeno: "Sin Pescado",
        imagen1: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/cf/58/3b/la-sastreria.jpg?w=900&h=500&s=1",
        imagen2:" https://www.araalicante.com/wp-content/uploads/2023/10/Sastreria-2-ara-restaurantes-alicante-1080x675.jpg",
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.2260261088936!2d-0.4849906!3d38.343750299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6237b3a4dec6df%3A0x4a86d86135b1bd7f!2sRestaurante%20La%20Sastrer%C3%ADa!5e0!3m2!1ses!2ses!4v1739304309799!5m2!1ses!2ses",
    },
    {
        name: "Falafelmanía",
        direccion: "C/ de Perú, 13 Local 2E",
        descripcion: "Auténtica cocina casera, exclusiva Vegetariana y Vegana, hecha con los exquisitos sabores del Medio Oriente y servida en deliciosos Menús de Degustación",
        precio: "€",
        dieta: "Vegana",
        telefono: "966 08 07 39",
        paginaWeb: "https://www.facebook.com/falafelmania",
        zonaId: zonasId,
        imagen: "https://media-cdn.tripadvisor.com/media/photo-s/1b/a9/5f/8d/falafelmania.jpg",
        alergeno: "Sin Gluten",
        imagen1:" https://lh5.googleusercontent.com/p/AF1QipMwfP2-qz0D0rE-489rEjr5l1izDR3dWcxQ-Dkd",
        imagen2:" https://images.happycow.net/venues/1024/92/13/hcmp92135_1134336.jpeg",
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.717026856907!2d-0.5089585!3d38.332383199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd623615c8595555%3A0x5753dacca774bee4!2sFalafelmania%20Restaurante%20Vegetariano%20y%20Vegano%20Oriental!5e0!3m2!1ses!2ses!4v1739304353157!5m2!1ses!2ses",
    },
    {
        name: "César Anca",
        direccion: "Explanada de España, 3",
        descripcion: "Con un enfoque en tapas modernas, César Anca reinterpreta clásicos españoles con creatividad, como sus huevos rotos con queso ahumado y romero.",
        precio: "€€",
        dieta: "Flexitariana",
        telefono: "965 14 94 65",
        paginaWeb: "www.cesaranca.com",
        zonaId: zonasId,
        imagen: "https://www.cesaranca.com/wp-content/uploads/2024/07/CESARANCA_LABARRA-14.jpg",
        alergeno: "Sin Huevos",
        imagen1:"https://www.alicantecongresos.com/sites/default/files/cesar%20anca%203.jpg",
        imagen2:" https://www.gastronomun.com/wp-content/uploads/2019/02/20190120_160450-840x630.jpg",
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.259514708963!2d-0.48504069999999994!3d38.3429751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6237b3bf326e55%3A0xddfa5efc21535b12!2sRestaurante%20C%C3%A9sar%20Anca!5e0!3m2!1sen!2ses!4v1739304398948!5m2!1sen!2ses",

    },
    {
        name: "Don Pepe",
        direccion: "Passeig Esplanada d'Espanya, 7",
        descripcion: "El Restaurante Don Pepe ofrece cocina mediterránea con especialidad en arroces y mariscos. Su ubicación frente al mar y su terraza lo hacen ideal para disfrutar de una comida con vistas.",
        precio: "€€",
        dieta: "Vegana",
        telefono: "965 20 56 89",
        paginaWeb: "www.donpepebistro.com",
        zonaId: zonasId,
        imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/71/f3/43/caption.jpg",
        alergeno: "Sin Gluten",
        imagen1:"https://i.gyazo.com/7ad012069fad186d642ead291d526bcd.jpg",
        imagen2:" https://www.gastronomun.com/wp-content/uploads/2019/02/20190120_160450-840x630.jpg",
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.213688059209!2d-0.4819309!3d38.3440359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6237c0dc8b605b%3A0xa48b8322899a2216!2sRESTAURANTE%20DON%20PEPE%20ALICANTE!5e0!3m2!1sen!2ses!4v1739468461161!5m2!1sen!2ses",

    },
    {
        name: "Momen",
        direccion: "Passeig Esplanada d'Espanya, 21",
        descripcion: "Momen ofrece tapas, hamburguesas, cócteles y un ambiente acogedor con terraza. Destaca por su buen servicio y ha sido premiado en Tripadvisor.",
        precio: "€",
        dieta: "Vegetariana",
        telefono: "965 20 36 77",
        paginaWeb: "www.donpepebistro.com",
        zonaId: zonasId,
        imagen: "https://lh3.googleusercontent.com/p/AF1QipOXMXMJy7bX8YR3H9aows96FaazYVgPPmOKk8hk=s1360-w1360-h1020-rw",
        alergeno: "Sin Gluten",
        imagen1:"https://i.gyazo.com/8f8198bec0a883c9c772e9d00f076fd3.png",
        imagen2:"https://daveinspain.com/wp-content/uploads/2023/12/front.jpeg",
        mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1564.6183374791551!2d-0.4856805!3d38.3435038!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6237b384b80477%3A0xe9ce6e7b824158d4!2sMomen!5e0!3m2!1sen!2ses!4v1739468511689!5m2!1sen!2ses",

    }

]);

// Ahora, realizar una consulta para obtener establecimientos por zonaId:
let zonaBusqueda = "Centro"; // Cambia esto según la zona que quieras consultar

let zonaId = db.zonas.findOne({nombre: zonaBusqueda})._id;

// Consulta para obtener los establecimientos de esa zona
let establecimientos = db.establecimientos.find({ zonaId: zonaId }).toArray();

// Mostrar los establecimientos encontrados
