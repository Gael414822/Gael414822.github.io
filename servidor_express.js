// Express facilita mucho el manejo de rutas y respuestas sin tanto código repetitivo
import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
const puerto = 1984;

// Middleware para que Express pueda servir la foto del árbol y cualquier archivo estático
app.use(express.static('.'));

//Escribe un comentario explicando para qué sirve http
//http sive para cargar el modulo nativo de http, permite trabajar con http sin descargar librerias externas 
//y lo mas importante es crear un servidor 
// (En Express ya no importamos http directamente para el ruteo)

//Escribe un comentario explicando para qué sirve fs
//Sirve para interactuar con el sistema de archivos de tu computadora o servidor.

function darBienvenida(req, res) {
    fs.readFile('bienvenida.html', 'utf8', (error, data) => {
        if (error) {
            res.status(500).send('Oh no!!!!');
            return;
        }
        res.send(data);
    });
}

function getUsuarios(req, res) {
    const usuarios = [
        { "nombre": "Punk", "saldo": "0" },
        { "nombre": "Rock", "saldo": "20" }
    ];
    // Express ya hace el stringify automáticamente con res.json
    res.json(usuarios);
}

function mostrarPerfil(req, res) {
    fs.readFile('perfil.html', 'utf8', (error, data) => {
        if (error) {
            res.status(500).send('Oh no!!!!');
            return;
        }
        res.send(data);
    });
}

function mostrarMovimientos(req, res) {
    fs.readFile('movimientos.html', 'utf8', (error, data) => {
        if (error) {
            res.status(500).send('Oh no!!!!');
            return;
        }
        res.send(data);
    });
}

const movimientos = [
    { id: 1, concepto: 'Pago Nómina', monto: 1200 },
    { id: 2, concepto: 'Supermercado', monto: -85 }
];

function getMoviminientos(req, res) {
    res.json(movimientos);
}

function mostrarEquipo(req, res) {
    // Se agregó la foto del árbol y el nombre científico
    const contenidoHTML = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Equipo</title>
    </head>
    <body>
        <h1>Mi Equipo</h1>
        <p><strong>Nombre:</strong> Jesus Andres Marquez Martinez</p>
        <p><strong>Cualidad:</strong> Es muy bueno para escuchar y acompañar</p>
        
        <h2>Árbol del Tec Guadalajara</h2>
        <p><strong>Nombre científico:</strong> <em>Ficus benjamina</em></p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Ficus_benjamina_01.JPG/800px-Ficus_benjamina_01.JPG" alt="Árbol de la universidad" width="400">
    </body>
    </html>
  `;
    res.send(contenidoHTML);
}

function mostrarOpinion(req, res) {
    const opinionHTML = `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"><title>Opinión</title></head>
        <body>
            <h1>Colonialismo Digital</h1>
            <p><strong>¿Riesgo?</strong> Sí, porque dependemos de infraestructura extranjera.</p>
            <p><strong>FreedomBox:</strong> Es un servidor personal para recuperar el control de tus datos.</p>
            <a href="https://www.aljazeera.com/opinions/2019/3/13/digital-colonialism-is-threatening-the-global-south">Leer artículo</a>
        </body>
        </html>`;
    res.send(opinionHTML);
}

function mostrarCheckout(req, res) {
    const html = `<h1>Kueski Pay - Checkout</h1><p>Total: $1,200.00 MXN</p><button>Finalizar</button><br><a href="/">Volver</a>`;
    res.send(html);
}

function mostrarAuth(req, res) {
    const html = `<h1>Inicio de Sesion - Kueski</h1><form><input type="email"><br><input type="password"><br><button>Entrar</button></form><br><a href="/">Volver</a>`;
    res.send(html);
}

function mostrarSaldo(req, res) {
    const html = `<h1>Mi Saldo</h1><h2 style="color: green;">$5,450.00 MXN</h2><a href="/">Volver</a>`;
    res.send(html);
}

function mostrarCashback(req, res) {
    const html = `<h1>Kueski Cashback</h1><h3>$125.50 MXN</h3><a href="/">Regresar</a>`;
    res.send(html);
}

function mostrarPrestamos(req, res) {
    const html = `<h1>Tus Prestamos</h1><table border="1"><tr><th>Folio</th><th>Monto</th></tr><tr><td>#9982</td><td>$2,000</td></tr></table><br><a href="/">Volver</a>`;
    res.send(html);
}

// Rutas

app.get('/', darBienvenida);
app.get('/api/usuarios', getUsuarios);
app.get('/api/movimientos', getMoviminientos);
app.get('/usuarios', mostrarPerfil);
app.get('/movimientos', mostrarMovimientos);
app.get('/equipo', mostrarEquipo); 
app.get('/opinion', mostrarOpinion);
app.get('/checkout', mostrarCheckout);
app.get('/auth', mostrarAuth);
app.get('/user', mostrarPerfil); 
app.get('/saldo', mostrarSaldo);
app.get('/cashback', mostrarCashback);
app.get('/prestamos', mostrarPrestamos);

app.use((req, res) => {
    res.status(404).send('Busca en otro lugar.');
});

app.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});