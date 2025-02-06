import express from 'express';
import morgan from 'morgan';

const app = express();
let zonas = [
    { id: '1', name: 'Casco Antiguo' },
    { id: '2', name: ' Centro ' },
    { id: '3', name: ' Puerto' }
];

let establecimientos = [
    { id: '9', name: 'Bar Pepe', zonasId: 3, dietaId: 16, preciosId: 23 },
    { id: '8', name: 'Bar 2', zonasId: 2, dietaId: 14, preciosId: 17 },
    { id: '10', name: ' Bar 3', zonasId: 3, dietaId: 15, preciosId: 18 }
]

let filtros = [
    { id: '11', name: 'Dieta'},
    { id: '12', name: 'Precio' },
    { id: '13', name: 'Alergenos'}
]

let dieta = [
    { id: '14', name: 'Vegetariana'},
    { id: '15', name: 'Vegana' },
    { id: '16', name: 'Flexitariana'}
]

let precios = [
    { id: '17', precioMin: '1', precioMax: '10'},
    { id: '18', precioMin: '10', precioMax: '25' },
    { id: '23', precioMin: '25', precioMax: '50' }
]

let alergenos = [
    { id: '19', name: 'frutos secos'},
    { id: '20', name: 'marisco'},
    { id: '21', name: 'huevo'},
    { id: '22', name: 'gluten'}
]

app.use(express.json());
app.use(morgan('tiny'));

// API

app.get('/zonas', (req, res) => {
    res.json(zonas);
});

app.get('/zonas/:id/establecimientos', (req,res) => { // llama a los establecimientos de esos zonas
    const zonasId = req.params.id; //2
    const resultado = establecimientos.filter((establecimiento) => establecimiento.zonasId == zonasId);
    res.json(resultado);
});

//endpoint se une al anterior
app.get('/zonas/:id/establecimientos', (req, res) => {
    const {precioId, dietaId, alergenosId} = req.query;
    const zonasId = req.params.id; //LLAMAMOS  A LOS ESTABLECIMIENTOS CON ESA :ID
    const establecimientosPorZonas = establecimientos.filter((establecimiento) => establecimiento.zonasId == zonasId); //LLAMAMOS  A LOS ESTABLECIMIENTOS QUE CONTENGAN ESA ID


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


app.listen(3000, () => {
    console.log('Ready on port 3000!');
});
