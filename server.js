import express from 'express';
import morgan from 'morgan';

const app = express();
let zonas = [
    { id: '1', name: 'Casco Antiguo' },
    { id: '2', name: ' Centro ' },
    { id: '3', name: ' Puerto' }
];

let establecimientos = [
    { id: '9', name: 'Bar Pepe', zonasId: 3 },
    { id: '8', name: 'Bar 2', zonasId: 2 },
    { id: '10', name: ' Bar 3', zonasId: 3 }
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
    { id: '18', precioMax: '25' },
]

app.use(express.json());
app.use(morgan('tiny'));



// API

app.get('/zonas', (req, res) => {
    res.json(zonas);
});

app.get('/zonas/:id/establecimientos', (req,res) => {
    const zonasId = req.params.id; //2
    const resultado = establecimientos.filter((establecimiento) => establecimiento.zonasId == zonasId);
    res.json(resultado);
});

//endpoint se une al anterior
app.get('/zonas/:id/establecimientos', (req, res) => {
    const {precioMin, precioMax , dieta, alergenos} = req.query;

    // buscar todos los establecimientos de la zona que ha elegido
    const zonasId = req.params.id; //2
    const resultado = establecimientos.filter((establecimiento) => establecimiento.zonasId == zonasId);


    if(precioMin && precioMax) {
        //filtros precio: algo parecido a la linea 57 pero con Pmax i Pmin
    }

    //hacer lo muismo con dieta y alergenos




});

app.listen(3000, () => {
    console.log('Ready on port 3000!');
});
